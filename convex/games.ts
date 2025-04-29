import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const createGame = mutation({
  args: {
    playerCount: v.union(v.literal(3), v.literal(4)),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const size = args.playerCount === 3 ? 16 : 25;
    const board = new Array(size).fill(null);

    return await ctx.db.insert("games", {
      playerCount: args.playerCount,
      currentPlayer: 0,
      board,
      players: [userId],
      status: "waiting",
    });
  },
});

export const joinGame = mutation({
  args: {
    gameId: v.id("games"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const game = await ctx.db.get(args.gameId);
    if (!game) throw new Error("Game not found");
    if (game.status !== "waiting") throw new Error("Game already started");
    if (game.players.includes(userId)) throw new Error("Already joined");
    if (game.players.length >= game.playerCount) throw new Error("Game full");

    const players = [...game.players, userId];
    const status = players.length === game.playerCount ? "playing" : "waiting";

    await ctx.db.patch(args.gameId, {
      players,
      status,
    });
  },
});

export const makeMove = mutation({
  args: {
    gameId: v.id("games"),
    position: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const game = await ctx.db.get(args.gameId);
    if (!game) throw new Error("Game not found");
    if (game.status !== "playing") throw new Error("Game not in progress");
    
    const playerIndex = game.players.indexOf(userId);
    if (playerIndex === -1) throw new Error("Not in game");
    if (playerIndex !== game.currentPlayer) throw new Error("Not your turn");
    if (game.board[args.position] !== null) throw new Error("Invalid move");

    const board = [...game.board];
    board[args.position] = playerIndex;

    const winner = checkWinner(board, game.playerCount);
    const hasEmptySpaces = board.some(cell => cell === null);

    const status = winner !== null ? "finished" : !hasEmptySpaces ? "finished" : "playing";
    const nextPlayer = (game.currentPlayer + 1) % game.playerCount;

    await ctx.db.patch(args.gameId, {
      board,
      currentPlayer: nextPlayer,
      status,
      ...(winner !== null ? { winner } : {}),
    });
  },
});

export const listGames = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("games")
      .withIndex("by_status", q => q.eq("status", "waiting"))
      .collect();
  },
});

export const getGame = query({
  args: {
    gameId: v.id("games"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.gameId);
  },
});

function checkWinner(board: (number | null)[], playerCount: number): number | null {
  const size = playerCount === 3 ? 4 : 5;
  const winLength = playerCount === 3 ? 3 : 4;

  // Check rows
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const start = i * size + j;
      const line = board.slice(start, start + winLength);
      const winner = checkLine(line);
      if (winner !== null) return winner;
    }
  }

  // Check columns
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const line = [];
      for (let k = 0; k < winLength; k++) {
        line.push(board[i + (j + k) * size]);
      }
      const winner = checkLine(line);
      if (winner !== null) return winner;
    }
  }

  // Check diagonals
  for (let i = 0; i <= size - winLength; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      const line1 = [];
      const line2 = [];
      for (let k = 0; k < winLength; k++) {
        line1.push(board[(i + k) * size + j + k]);
        line2.push(board[(i + k) * size + (j + winLength - 1 - k)]);
      }
      const winner1 = checkLine(line1);
      if (winner1 !== null) return winner1;
      const winner2 = checkLine(line2);
      if (winner2 !== null) return winner2;
    }
  }

  return null;
}

function checkLine(line: (number | null)[]): number | null {
  if (line[0] === null) return null;
  return line.every(cell => cell === line[0]) ? line[0] : null;
}

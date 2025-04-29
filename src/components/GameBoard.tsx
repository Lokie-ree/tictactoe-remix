import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

const COLORS = ["#FF4B4B", "#4B4BFF", "#4BFF4B", "#FFD700"];

export function GameBoard({ gameId, onBack }: { gameId: Id<"games">, onBack: () => void }) {
  const game = useQuery(api.games.getGame, { gameId });
  const makeMove = useMutation(api.games.makeMove);

  if (!game) return <div>Loading...</div>;

  const size = game.playerCount === 3 ? 4 : 5;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 items-center">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onBack}
        >
          Back to Games
        </button>
        <div className="text-xl">
          {game.status === "waiting" && "Waiting for players..."}
          {game.status === "playing" && `Player ${game.currentPlayer + 1}'s turn`}
          {game.status === "finished" && game.winner !== undefined && `Player ${game.winner + 1} wins!`}
          {game.status === "finished" && game.winner === undefined && "Game ended in a draw!"}
        </div>
      </div>

      <div 
        className="grid gap-2" 
        style={{ 
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          width: size === 4 ? "320px" : "400px"
        }}
      >
        {game.board.map((cell, index) => (
          <button
            key={index}
            className="w-16 h-16 border-2 rounded flex items-center justify-center text-2xl font-bold"
            style={{
              backgroundColor: cell !== null ? COLORS[cell] : "white",
              cursor: game.status === "playing" ? "pointer" : "default"
            }}
            disabled={game.status !== "playing" || cell !== null}
            onClick={() => makeMove({ gameId, position: index })}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        {game.players.map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span>Player {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

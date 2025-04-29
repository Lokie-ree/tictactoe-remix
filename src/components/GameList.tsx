import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useState } from "react";

export function GameList({ onSelectGame }: { onSelectGame: (id: Id<"games">) => void }) {
  const games = useQuery(api.games.listGames) || [];
  const createGame = useMutation(api.games.createGame);
  const joinGame = useMutation(api.games.joinGame);
  const [creating, setCreating] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {!creating ? (
        <div className="flex gap-4 justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCreating(true)}
          >
            Create New Game
          </button>
        </div>
      ) : (
        <div className="flex gap-4 justify-center">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={async () => {
              const game = await createGame({ playerCount: 3 });
              onSelectGame(game);
            }}
          >
            Create 3 Player Game
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={async () => {
              const game = await createGame({ playerCount: 4 });
              onSelectGame(game);
            }}
          >
            Create 4 Player Game
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => setCreating(false)}
          >
            Cancel
          </button>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">Available Games</h2>
      <div className="grid grid-cols-1 gap-4">
        {games.map((game) => (
          <div
            key={game._id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{game.playerCount} Player Game</p>
              <p className="text-sm text-gray-600">
                {game.players.length}/{game.playerCount} Players
              </p>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={async () => {
                await joinGame({ gameId: game._id });
                onSelectGame(game._id);
              }}
            >
              Join Game
            </button>
          </div>
        ))}
        {games.length === 0 && (
          <p className="text-gray-600 text-center">No games available</p>
        )}
      </div>
    </div>
  );
}

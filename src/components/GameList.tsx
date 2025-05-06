import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GameList({ onSelectGame }: { onSelectGame: (id: Id<"games">) => void }) {
  const games = useQuery(api.games.listGames) || [];
  const createGame = useMutation(api.games.createGame);
  const joinGame = useMutation(api.games.joinGame);
  const [creating, setCreating] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {!creating ? (
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            onClick={() => setCreating(true)}
          >
            Create New Game
          </Button>
        </div>
      ) : (
        <div className="flexflex-col gap-6 space-x-4 justify-center">
          <Button
            variant="default"
            onClick={async () => {
              const game = await createGame({ playerCount: 3 });
              onSelectGame(game);
            }}
          >
            3 Players
          </Button>
          <Button
            variant="default"
            onClick={async () => {
              const game = await createGame({ playerCount: 4 });
              onSelectGame(game);
            }}
          >
            4 Players
          </Button>
          <Button
            variant="outline"
            onClick={() => setCreating(false)}
          >
            Cancel
          </Button>
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
            <Button
              variant="default"
              onClick={async () => {
                await joinGame({ gameId: game._id });
                onSelectGame(game._id);
              }}
            >
              Join Game
            </Button>
          </div>
        ))}
        {games.length === 0 && (
          <p className="text-gray-600 text-center">No games available</p>
        )}
      </div>
    </div>
  );
}

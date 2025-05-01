import { Authenticated, Unauthenticated } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "./components/ui/toaster";
import { GameList } from "./components/GameList";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { Id } from "../convex/_generated/dataModel";

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Id<"games"> | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold accent-text">TicTacToe Remix</h2>
        <SignOutButton />
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl mx-auto">
          <Content selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
        </div>
      </main>
      <Toaster />
    </div>
  );
}

function Content({ selectedGame, setSelectedGame }: { 
  selectedGame: Id<"games"> | null, 
  setSelectedGame: (id: Id<"games"> | null) => void 
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold accent-text mb-4">TicTacToe Remix</h1>
        <Authenticated>
          {selectedGame ? (
            <GameBoard gameId={selectedGame} onBack={() => setSelectedGame(null)} />
          ) : (
            <GameList onSelectGame={setSelectedGame} />
          )}
        </Authenticated>
        <Unauthenticated>
          <p className="text-xl text-slate-600">Sign in to play</p>
          <SignInForm />
        </Unauthenticated>
      </div>
    </div>
  );
}

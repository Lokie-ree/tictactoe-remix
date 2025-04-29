# Multiplayer Tic Tac Toe Implementation

This is a project built with [Chef](https://chef.convex.dev) using [Convex](https://convex.dev) as its backend.

This project is connected to the Convex deployment named [`peaceful-caiman-708`](https://dashboard.convex.dev/d/peaceful-caiman-708).

## Game Overview

This is a reimagined version of the classic Tic Tac Toe game that supports 3-4 players instead of the traditional 2-player format. Key features include:

- **Expanded Gameplay**: Play with 3 or 4 players simultaneously
- **Larger Game Boards**: 4x4 grid for 3-player games and 5x5 grid for 4-player games
- **Adjusted Win Conditions**: 3-in-a-row for 3-player games, 4-in-a-row for 4-player games
- **Real-time Updates**: All players see game board updates instantly
- **Color-coded Players**: Each player has a distinct color (red, blue, green, gold)
- **Game State Management**: Automatically tracks turns, detects wins/draws, and manages game status

## How to Play

1. **Sign In**: Use anonymous authentication to quickly join
2. **Create or Join**: Create a new game (selecting 3 or 4 players) or join an existing game
3. **Take Turns**: Players take sequential turns placing their markers on the board
4. **Win Condition**: Get 3-in-a-row (3-player games) or 4-in-a-row (4-player games) horizontally, vertically, or diagonally
5. **Game End**: The game concludes when a player wins or the board fills with no winner (draw)

## Project structure

The frontend code is in the `app` directory and is built with [Vite](https://vitejs.dev/).

The backend code is in the `convex` directory.

`npm run dev` will start the frontend and backend servers.

## App authentication

Chef apps use [Convex Auth](https://auth.convex.dev/) with Anonymous auth for easy sign in. You may wish to change this before deploying your app.

## Developing and deploying your app

Check out the [Convex docs](https://docs.convex.dev/) for more information on how to develop with Convex.

- If you're new to Convex, the [Overview](https://docs.convex.dev/understanding/) is a good place to start
- Check out the [Hosting and Deployment](https://docs.convex.dev/production/) docs for how to deploy your app
- Read the [Best Practices](https://docs.convex.dev/understanding/best-practices/) guide for tips on how to improve you app further

## HTTP API

User-defined http routes are defined in the `convex/router.ts` file. We split these routes into a separate file from `convex/http.ts` to allow us to prevent the LLM from modifying the authentication routes.

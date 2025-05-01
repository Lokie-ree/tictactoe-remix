# TicTacToe Remix – Comprehensive Documentation

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-org/tictactoe-remix/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/your-org/tictactoe-remix)](https://github.com/your-org/tictactoe-remix/graphs/contributors)

## Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Goals](#goals)
4. [Features](#features)
5. [Architecture & Tech Stack](#architecture--tech-stack)
6. [Game Rules & Mechanics](#game-rules--mechanics)
7. [UI/UX & Animation Libraries](#uiux--animation-libraries)
8. [Development & Project Structure](#development--project-structure)
9. [Onboarding & Accessibility](#onboarding--accessibility)
10. [Contribution Guide](#contribution-guide)
11. [FAQ](#faq)
12. [Contact & Support](#contact--support)

---

## Overview

TicTacToe Remix is a web-based, real-time, learning-focused game that reimagines the classic Tic Tac Toe for 3–4 players. It features larger boards, modern UI/UX, and interactive learning enhancements. Built with React, Convex, and Tailwind CSS, it demonstrates how to create collaborative, real-time web apps using modern technologies.

- **Live Demo:** _Coming soon!_
- **Product Requirements:** [docs/prd.md](docs/prd.md)
- **Development Plan:** [docs/plan.md](docs/plan.md)

---

## Quick Start

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-org/tictactoe-remix.git
   cd tictactoe-remix
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Start the development server:**
   ```sh
   pnpm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## Goals

### Business Goals
- Showcase Convex's real-time sync and collaborative capabilities
- Serve as a reference for developers building multiplayer apps
- Drive adoption of Convex through an engaging, accessible example

### User Goals
- Play Tic Tac Toe with 3 or 4 friends in real time
- Experience a visually engaging, interactive, and educational game
- Learn new strategies via move history, sandbox, and guided learning

---

## Features

- **3–4 Player Support:** Play on 4x4 (3 players) or 5x5 (4 players) boards
- **Real-Time Multiplayer:** All moves and state changes sync instantly
- **Anonymous Auth:** Quick sign-in, no account required
- **Game Creation & Listing:** Create or join games, see available lobbies
- **Turn Management:** Enforced turn order, visual indicators
- **Win/Draw Detection:** Automatic, with celebratory animations
- **Move History & Sandbox:** Review and experiment with past moves
- **Onboarding & Tutorials:** Interactive walkthrough for new users
- **Enhanced Interactivity:** Animated transitions, sound, micro-interactions
- **Custom Avatars & Colors:** Player customization and animated turn indicators
- **Disconnect Handling:** 30s grace period to reconnect, then skip turn
- **Accessibility:** Keyboard navigation, color contrast, reduced motion support

---

## Architecture & Tech Stack

### System Overview
- **Frontend:** React (TypeScript), Vite, Tailwind CSS
- **Backend:** Convex (database, real-time sync, auth)
- **Authentication:** Convex Auth (anonymous)
- **Deployment:** Convex Cloud (backend), Vercel/Netlify (frontend, optional)

### Key Libraries
- **Framer Motion:** Advanced UI animations and transitions
- **Radix UI:** Accessible, unstyled UI primitives (dialogs, menus, popovers)
- **React-bits:** Flashy, visually engaging components for onboarding, achievements, etc.
- **Tailwind CSS:** Utility-first styling for rapid, responsive design
- **Heroicons/Phosphor Icons:** Iconography

### Architecture Pattern
- **Real-time Client-Server:** All game state and logic reside in Convex; frontend subscribes for updates.

### Database Schema (Convex)
- **games:** id, status, playerCount, boardSize, currentTurn, moves[], createdAt, updatedAt
- **players:** id, gameId, userId, color, avatar, lastActive
- **moves:** id, gameId, playerId, position, turnNumber, timestamp

---

## Game Rules & Mechanics

- **Player Count:** 3 (4x4 board) or 4 (5x5 board)
- **Win Condition:**
  - 3-in-a-row (3 players)
  - 4-in-a-row (4 players)
- **Turns:** Sequential, enforced by backend
- **Move Restrictions:** Only empty cells, only on your turn
- **Game End:** Win (row/col/diagonal) or draw (board full, no winner)
- **Disconnects:** 30s to reconnect, then turn is skipped
- **Move History:** All moves are logged; players can review and experiment during the game
- **Sandbox Mode:** Step through move history and try alternate moves (does not affect live game)

---

## UI/UX & Animation Libraries

### UI Libraries
- **Radix UI:** For dialogs, menus, popovers, tooltips, and other primitives
- **React-bits:** For onboarding, achievements, and celebratory UI
- **Tailwind CSS:** For all styling and layout
- **Heroicons/Phosphor Icons:** For icons

### Animation
- **Framer Motion:**
  - Marker placement (scale/fade)
  - Turn transitions (slide/pulse)
  - Win/draw highlights (color pulse/confetti)
  - Move history transitions
  - Onboarding/tutorial overlays
  - Micro-interactions (button presses, hover/tap feedback)
- **Sound Effects:** (e.g., Howler.js or use-sound) for moves, wins, achievements

### Accessibility
- All interactive elements are keyboard accessible
- Animations respect `prefers-reduced-motion`
- High color contrast and ARIA labels for screen readers

---

## Development & Project Structure

### Directory Layout
- `app/` – Frontend (React, Vite, Tailwind, Framer Motion, Radix UI, React-bits)
- `convex/` – Backend (Convex functions, schema, auth)
- `docs/prd.md` – Product requirements document
- `docs/plan.md` – Development plan and task list
- `README.md` – This documentation

### Key Files
- `app/components/` – UI components (board, cell, player list, dialogs, etc.)
- `app/pages/` – Main pages (home, game list, game board, onboarding)
- `convex/functions/` – Game logic, validation, real-time sync
- `convex/schema.ts` – Database schema
- `convex/auth.ts` – Auth logic

### Running Locally
- `pnpm install` – Install dependencies
- `pnpm run dev` – Start frontend and backend (Vite + Convex)

### Deployment
- Backend: Convex Cloud
- Frontend: Vercel/Netlify (optional)

---

## Onboarding & Accessibility

### Onboarding
- First-time users see an interactive tutorial (React-bits + Framer Motion)
- Explains rules, UI, and multiplayer features
- Onboarding can be revisited from the menu

### Accessibility
- Keyboard navigation for all controls
- High-contrast color palette
- Animations respect user motion preferences
- ARIA roles/labels for screen readers

---

## Contribution Guide

1. **Fork and clone the repo**
2. **Install dependencies:** `pnpm install`
3. **Start dev server:** `pnpm run dev`
4. **Follow code style:** Use Prettier and ESLint
5. **Write clear, accessible UI:** Use Radix UI and Tailwind CSS
6. **Add/Update documentation as needed**
7. **Open a pull request with a clear description**
8. **Consult the [Development Plan](docs/plan.md) for the full project task list and contribution opportunities.**
   - The plan.md file contains up-to-date priorities, open tasks, and areas where help is needed.

---

## FAQ

**Q: How do I play?**
A: Sign in anonymously, create or join a game, and take turns placing your marker. Get 3 or 4 in a row to win!

**Q: What happens if I disconnect?**
A: You have 30 seconds to reconnect. After that, your turn is skipped.

**Q: Can I review past moves?**
A: Yes! Move history and sandbox mode are available during the game.

**Q: Is my data private?**
A: Yes. Only anonymous authentication is used; no personal data is stored.

**Q: How can I contribute?**
A: Fork the repo, follow the contribution guide, and open a pull request!

**Q: What if I have accessibility needs?**
A: The app supports keyboard navigation, high-contrast colors, and reduced motion. Please open an issue if you need more support.

---

## Contact & Support

For questions, suggestions, or support, please [open an issue](https://github.com/your-org/tictactoe-remix/issues) or contact the maintainers via GitHub.

---

For more details, see [docs/prd.md](docs/prd.md) or [docs/plan.md](docs/plan.md).

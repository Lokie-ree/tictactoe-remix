# PRD: TicTacToe Remix 🎲✨

_Last updated: May 2, 2025_
_Status: In Progress_

**Related docs:** [Development Plan](docs/plan.md) | [README](../README.md)

---

## 1. Product overview 📝

### 1.1 Document title and version

- 📄 PRD: TicTacToe Remix
- 🗓️ Version: 1.0

### 1.2 Product summary

TicTacToe Remix is a web-based game that reimagines the classic Tic Tac Toe experience by expanding it to support 3-4 players. Unlike traditional Tic Tac Toe which is limited to a 3x3 grid and two players, this version offers larger game boards (4x4 for 3 players, 5x5 for 4 players) and adjusts winning conditions based on player count.

The application uses Convex as its backend to provide real-time updates and synchronization of game state across all players. Users can create new games, join existing ones, and compete with others in real-time.

### 1.3 Enhanced Interactivity and Visual Appeal ✨

To align with modern learning game principles and create a more engaging experience, the following features are planned:

- 🎞️ **Animated Game Board**: Smooth transitions for marker placement, turn changes, and win/draw highlights (using React Bits, Framer Motion, and custom components).
- 🖱️ **Interactive Feedback**: Hover/tap previews, cell highlights, and celebratory effects for wins/draws (React Bits, Framer Motion).
- ⏮️ **Move History & Exploration**: Timeline to review previous moves and board states; sandbox mode for experimentation (Animated List, Glass Icons).
- 🧑‍🏫 **Guided Learning Mode**: Challenge puzzles, tiered hints, and post-game explanations to foster learning by doing.
- 🧑‍💻 **Onboarding & Tutorials**: Interactive walkthrough for new users, explaining rules and mechanics.
- 📝 **Mini-Quizzes & Reflections**: Quick quizzes and prompts after games to reinforce learning and encourage reflection.
- 🧑‍🎨 **Custom Avatars & Colors**: Player customization for avatars and marker colors, with animated turn indicators (lucide-react, custom components).
- 📊 **Visual Storytelling**: Progress bars, victory/draw screens, and fun UI elements to create a narrative arc (React Bits, Framer Motion).
- 💥 **Micro-Interactions**: Sound effects, subtle animations, and easter eggs for delight.
- 🏅 **Achievements & Rewards**: Badges, streaks, and stats to motivate continued play and mastery.

---

## 2. Goals 🎯

### 2.1 Business goals
- 🚀 Create an engaging multiplayer game to showcase Convex's real-time synchronization capabilities
- 🧑‍💻 Demonstrate how to build a real-time collaborative application using modern web technologies
- 📚 Provide a reference implementation for developers learning to build multiplayer applications
- 🌍 Drive user adoption of the Convex platform through an entertaining and accessible example app

### 2.2 User goals
- 👥 Play Tic Tac Toe with multiple friends simultaneously
- 🏗️ Join existing games or create new ones with customizable player counts
- 🔄 Experience real-time updates as other players make their moves
- 👀 Easily understand game state (whose turn, game status, winner)
- 🧠 Quickly learn and adapt to the multiplayer version of a familiar game

### 2.3 Non-goals
- 🚫 Supporting more than 4 players in a single game
- 🚫 Implementing AI opponents or single-player mode
- 🚫 Creating a tournament or ranking system
- 🚫 Implementing chat functionality between players
- 🚫 Supporting offline play
- 🚫 Implementing custom user profiles or avatars

---

## 3. User personas 👤

### 3.1 Key user types
- 🎮 Casual gamers looking for a quick multiplayer experience
- 👯 Friends who want to play a simple game together
- 👨‍💻 Developers interested in learning about real-time multiplayer applications
- 🧑‍🎲 People familiar with traditional Tic Tac Toe looking for a fresh take

### 3.2 Basic persona details
- **Casual Player**: Someone looking for a quick, fun game that's easy to understand and play
- **Social Gamer**: Player who enjoys connecting with friends through simple games
- **Developer**: Technical user exploring the application to learn about implementing real-time multiplayer features
- **Tic Tac Toe Enthusiast**: Player who enjoys the classic game and is interested in variations

### 3.3 Role-based access
- 👀 **Guest**: Can view the application but must sign in to create or join games
- 🔑 **Authenticated User**: Can create new games, join existing games, and play with others
- 🏗️ **Game Creator**: The user who created a specific game instance, with the same abilities as other players
- 🎲 **Game Participant**: Any authenticated user who has joined a game and can make moves when it's their turn

---

## 4. Functional requirements ✅

- 🔐 **User Authentication** (Priority: High)
  - Support anonymous authentication for easy sign-in
  - Allow users to sign out
  - Restrict game access to authenticated users only

- 🏗️ **Game Creation** (Priority: High)
  - Allow users to create new games
  - Support selection of player count (3 or 4 players)
  - Generate the appropriate board size based on player count (4x4 or 5x5)

- 📋 **Game Listing** (Priority: Medium)
  - Display a list of available games waiting for players
  - Show player count and current number of participants for each game
  - Hide games that are already full or in progress

- 👥 **Game Joining** (Priority: High)
  - Allow users to join existing games that are waiting for players
  - Update game status when all required players have joined
  - Transition game to "playing" state when fully populated

- 🎲 **Game Board** (Priority: High)
  - Display appropriate sized board (4x4 for 3 players, 5x5 for 4 players)
  - Show colored markers for each player's moves
  - Disable interaction with cells that are already marked
  - Prevent players from making moves when it's not their turn

- 🔄 **Game State Management** (Priority: High)
  - Track current player turn
  - Update board state in real-time for all participants
  - Detect winning conditions based on player count
  - Identify and display game results (winner or draw)

- 🧭 **Game Navigation** (Priority: Medium)
  - Allow players to return to game listing from an active game
  - Support switching between games

- ✨ **Enhanced Interactivity & Visuals** (Priority: High)
  - Animate marker placement, turn changes, and win/draw highlights
  - Provide interactive feedback on cell hover/tap
  - Allow users to review move history and experiment in sandbox mode
  - Offer guided learning mode with hints, explanations, and challenge puzzles
  - Include onboarding/tutorial overlays for new users
  - Add mini-quizzes and reflection prompts after games
  - Support player avatar and color customization
  - Display progress bars, victory/draw screens, and fun UI elements
  - Integrate sound effects and micro-interactions
  - Track achievements, streaks, and player stats

---

## 5. User experience 🌟

### 5.1. Entry points & first-time user flow
- 🏠 User lands on homepage showing the TicTacToe Remix title
- 🔑 First-time users are prompted to sign in with anonymous authentication
- 📋 After authentication, users see the available games list
- ➕ New users can either join an existing game or create a new one
- 👥 Creating a game allows selection of player count (3 or 4)
- 🎨 First game experience includes visual indicators for turn order and player colors

### 5.2. Core experience
- 🔐 **Authenticate**: Users sign in anonymously to access the game (simple and quick)
- 📋 **Browse Games**: View list of available games with player counts
- ➕ **Create or Join**: Users can create a new game or join an existing one
- 🎲 **Take Turns**: Players take sequential turns placing their markers on the board
- 🏆 **Game Resolution**: System automatically detects winning conditions or draws

### 5.3. Advanced features & edge cases
- 🚪 Handle players leaving mid-game gracefully
- ⏳ Manage turn skipping if a player becomes inactive
- 🔍 Handle edge cases in win detection for diagonal wins on larger boards
- 🔄 Support browser refresh without losing game state
- 🕒 Ensure game state consistency even with network delays

### 5.4. UI/UX highlights
- 🎨 Color-coded player markers for easy visual differentiation (red, blue, green, gold; see color palette below)
- 🎞️ Animated transitions for moves, wins, and draws (React Bits, Framer Motion)
- 🖱️ Interactive feedback on cell hover/tap (Framer Motion, React Bits)
- ⏮️ Move history timeline and sandbox mode (Animated List, Glass Icons)
- 🧑‍🏫 Guided learning overlays, hints, and explanations
- 🧑‍🎨 Customizable avatars and animated turn indicators (lucide-react, custom components)
- 📊 Progress bars and visual storytelling elements (React Bits, Framer Motion)
- 🔄 Real-time updates without requiring page refreshes
- 📱 Responsive design that works on various screen sizes
- 🏷️ Clear game status indicators (waiting, playing, finished)
- 🧭 Simple, intuitive UI with minimal learning curve
- 👀 Visual indicators for current player's turn (Variable Proximity, True Focus)
- ♿ Accessibility: Keyboard navigation, ARIA labels, reduced motion, high-contrast mode

---

## 6. Narrative 📖

Alex is a casual gamer who wants to play a quick game with two friends during their lunch break. They remember playing Tic Tac Toe as kids but want something that accommodates more than just two players. Alex discovers TicTacToe Remix and creates a 3-player game in seconds. After sharing the link with friends, all three join seamlessly and enjoy the familiar yet fresh experience of playing on a 4x4 grid with new winning patterns, appreciating how the app handles turn management and win detection automatically.

---

## 7. Success metrics 📈

### 7.1. User-centric metrics
- ⏱️ Average session duration
- 🎮 Number of games completed per user
- 🔁 User retention rate (returning players)
- 🚀 Time to start first game (from landing to playing)
- 🎲 Average number of games played per user
- ⭐ User satisfaction rating (if feedback mechanism is implemented)

### 7.2. Business metrics
- 👤 Total number of authenticated users
- 📅 Daily/monthly active users
- ➕ Number of games created
- 👥 Average number of players per game
- 🔄 Conversion rate (visitors to authenticated users)
- 🏁 Percentage of games that reach "playing" status

### 7.3. Technical metrics
- ⚡ Real-time synchronization latency
- ⏱️ Server response times
- ❌ API error rates
- 🖥️ Client-side performance metrics
- 🔐 Authentication success rate
- 🗄️ Database query performance

---

## 8. Technical considerations 🛠️

### 8.1. Integration points
- 🗄️ Convex backend for real-time data synchronization
- 🔐 Convex Auth for user authentication
- 💻 React for frontend UI components
- 🎨 Tailwind CSS for styling
- 🟦 TypeScript for type safety
- ⚡ Vite for frontend development and building
- 🧩 ShadCn UI for foundational, accessible, composable components
- 🖼️ lucide-react for iconography
- ✨ React Bits for playful, animated, and celebratory effects
- 🎬 Framer Motion for smooth transitions and custom animation logic

### 8.1.1 UI Architecture & Visual Design

#### Hybrid Component Strategy
- **ShadCn UI**: Foundational, accessible, composable components (Button, Input, Dialog, Menu)
- **lucide-react**: All iconography (player markers, status indicators, navigation, etc.)
- **Custom Atomic Components**: Game-specific or highly unique UI needs (animated player markers, custom game cards, celebratory overlays)
- **React Bits**: Playful, animated, and celebratory effects (see table below)
- **Framer Motion**: Smooth transitions and custom animation logic
- **Tailwind CSS**: Utility-first styling and theming

#### Color Palette
- **Primary:** #7C3AED (Violet 600, Tailwind)
- **Secondary:** #F59E42 (Orange 400, Tailwind)
- **Success:** #10B981 (Emerald 500, Tailwind)
- **Warning:** #FBBF24 (Amber 400, Tailwind)
- **Error:** #EF4444 (Red 500, Tailwind)
- **Background:** #F3F4F6 (Gray 100, Tailwind)
- **Surface:** #F3F4F6 (Gray 100, Tailwind; light mode, gentle/low-glare) / #1F2937 (Gray 800, for dark mode)
- **Text:** #111827 (Gray 900, Tailwind) / #F9FAFB (Gray 50, for dark mode)
- **Gradients:** Violet → Blue, Orange → Pink (for backgrounds and animated elements)

> Note: Light mode uses a gentle, low-glare gray background (#F3F4F6) for surface elements instead of pure white, to reduce eye strain and improve comfort.

#### Accessibility & Theming
- All interactive elements are keyboard navigable and ARIA-labeled
- All animated elements respect reduced motion settings
- High-contrast mode and light/dark mode supported via a global theme provider

#### Rationale
- Avoid deep coupling to any single UI library for flexibility and open-source friendliness
- Ensure accessibility, maintainability, and playful, modern design

#### React Bits & Animation Mapping Table
| Screen/Flow         | React Bits/Animation Used                | Notes                                                      |
|---------------------|------------------------------------------|------------------------------------------------------------|
| Landing Page        | Aurora/Hyperspeed (background), Rotating/Gradient Text, Count Up, Glass Icons | Subtle, playful intro effects                              |
| Game Listing        | Animated List, Tilted/Pixel Card, Grid Motion/Squares (background) | Playful, animated game entries                             |
| Game Creation       | Counter, Flowing Menu/Gooey Nav, Text Pressure | Animated player count, playful buttons                     |
| Game Board          | Variable Proximity/True Focus (turn), Pixel Transition (cell), Ball Pit (background), Glass Icons | Subtle, clear, animated gameplay                           |
| Move History        | Animated List, Glass Icons                | Timeline, move icons                                       |
| Celebration (Win/Draw) | Splash Cursor, Ribbons, Star Border, Aurora/Hyperspeed (intense), Count Up, Gradient Text | Over-the-top, skippable/dismissible celebratory effects    |
| Navigation          | Gooey Nav, Flowing Menu, Framer Motion    | Playful, smooth navigation                                 |
| Auth/Error          | Framer Motion (fade/slide), static background | Clean, accessible, minimal                                 |

### 8.2. Data storage & privacy
- 🗄️ Game state stored in Convex database
- 🔐 User authentication data handled through Convex Auth
- 🚫 No personal information required beyond anonymous authentication
- 🗑️ Game history not persistently stored after completion
- 🔒 No sensitive user data collected or stored

### 8.3. Scalability & performance
- 📈 Ensure Convex backend can handle concurrent games
- 📉 Optimize real-time updates to minimize bandwidth usage
- 🏆 Implement efficient win-checking algorithms for larger boards
- ⚡ Consider performance impact of increasing concurrent users
- 📱 Ensure responsive experience across different device types and connection speeds

### 8.4. Potential challenges
- 🔄 Managing game state consistency across multiple clients
- 🔌 Handling network disconnections and reconnections
- 🏳️ Ensuring fair play if users disconnect mid-game
- 🏆 Optimizing win detection algorithms for larger boards
- ⚡ Maintaining low latency for real-time updates
- 📱 Supporting different screen sizes effectively

---

## 9. Milestones & sequencing 🗓️

### 9.1. Project estimate
- ⏳ Medium: 2-3 weeks

### 9.2. Team size & composition
- 👥 Small Team: 2-3 total people
  - 💻 1 frontend developer, 🗄️ 1 backend developer, 🎨 1 designer/UX specialist

### 9.3. Suggested phases
- 🥇 **Phase 1**: Core authentication and game creation/joining (3-5 days)
  - Key deliverables: User authentication, game creation, game listing, joining functionality
- 🥈 **Phase 2**: Game board implementation and turn management (5-7 days)
  - Key deliverables: Interactive game board, turn-based gameplay, real-time updates
- 🥉 **Phase 3**: Win detection, game completion, and UI polish (5-7 days)
  - Key deliverables: Win detection algorithms, game status management, visual enhancements, responsive design

---

## 10. User stories 📚

_Note: Implementation status for user stories is tracked in [docs/plan.md](docs/plan.md)._

### 10.1. User authentication
- **ID**: US-001
- **Description**: As a user, I want to sign in anonymously so that I can quickly access the game without creating an account.
- **Acceptance criteria**:
  - Anonymous authentication is available on the landing page
  - User is automatically authenticated when they click "Sign In"
  - User receives visual confirmation of successful authentication
  - User is redirected to the game list after authentication

### 10.2. Create new game
- **ID**: US-002
- **Description**: As an authenticated user, I want to create a new game so that I can play with specific number of players.
- **Acceptance criteria**:
  - User can access game creation option from the game list screen
  - User can select between 3 or 4 player game options
  - System creates appropriate board size based on selection (4x4 for 3 players, 5x5 for 4 players)
  - Creator is automatically added as the first player
  - New game appears in the available games list for others to join

### 10.3. View available games
- **ID**: US-003
- **Description**: As an authenticated user, I want to see a list of available games so that I can join an existing game.
- **Acceptance criteria**:
  - Available games list displays all games with "waiting" status
  - Each game shows the current number of players and total required
  - Games are removed from list when they become full or change to "playing" status
  - List updates in real-time as new games are created or existing games change state

### 10.4. Join existing game
- **ID**: US-004
- **Description**: As an authenticated user, I want to join an existing game so that I can play with others.
- **Acceptance criteria**:
  - User can select an available game from the list
  - Joining a game adds user to the players list
  - When maximum players join, game status changes to "playing"
  - All players are redirected to the game board when game status changes to "playing"

### 10.5. Make a move on the game board
- **ID**: US-005
- **Description**: As a game participant, I want to make a move on the board when it's my turn so that I can play the game.
- **Acceptance criteria**:
  - User can only click on empty cells when it's their turn
  - Clicking a cell places the user's marker in that position
  - Board updates in real-time for all players
  - Turn advances to the next player after a move is made
  - Visual indicator shows whose turn it is

### 10.6. View game status
- **ID**: US-006
- **Description**: As a game participant, I want to see the current game status so that I know who's turn it is and the state of the game.
- **Acceptance criteria**:
  - Display shows "Waiting for players" when game is not full
  - Display shows "Player X's turn" during gameplay
  - Display shows winner when game is finished
  - Display shows "Game ended in a draw" when board is full with no winner
  - Player colors are clearly indicated in the UI

### 10.7. Return to game list
- **ID**: US-007
- **Description**: As a user, I want to return to the game list from an active game so that I can join or create a different game.
- **Acceptance criteria**:
  - "Back to Games" button is available on the game board screen
  - Clicking the button returns user to the game list
  - Current game state is preserved if user returns to the same game

### 10.8. View win or draw result
- **ID**: US-008
- **Description**: As a game participant, I want to know when the game has been won or ended in a draw so that I know the outcome.
- **Acceptance criteria**:
  - System detects winning combinations (3 in a row for 3-player games, 4 in a row for 4-player games)
  - Winner is clearly displayed when a winning combination is achieved
  - Draw is displayed when all cells are filled with no winner
  - Game board becomes non-interactive after game completion

### 10.9. Sign out
- **ID**: US-009
- **Description**: As an authenticated user, I want to sign out so that I can end my session.
- **Acceptance criteria**:
  - Sign out button is available in the header
  - Clicking sign out ends the user's session
  - User is returned to the landing page after signing out
  - User must sign in again to access games

### 10.10. Secure access to games
- **ID**: US-010
- **Description**: As a system administrator, I want to ensure only authenticated users can access games to maintain security.
- **Acceptance criteria**:
  - Unauthenticated users can only see the landing page
  - Game creation, listing, and joining require authentication
  - Game moves can only be made by authenticated participants
  - Backend validates all requests to ensure they come from authorized users

### 10.11. Enhanced interactivity and learning features
- **ID**: US-011
- **Description**: As a user, I want the game to be interactive and visually engaging, with features that help me learn and experiment with strategies.
- **Acceptance criteria**:
  - Animated transitions for moves, wins, and draws
  - Interactive feedback on cell hover/tap
  - Ability to review move history and use sandbox mode
  - Guided learning mode with hints, explanations, and challenge puzzles
  - Onboarding/tutorial overlays for new users
  - Mini-quizzes and reflection prompts after games
  - Customizable avatars and animated turn indicators
  - Progress bars, victory/draw screens, and fun UI elements
  - Sound effects and micro-interactions
  - Achievements, streaks, and player stats

---

**See also:** [Development Plan](docs/plan.md) | [README](../README.md)

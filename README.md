# B4F Cohort 8 — Salamiyah — PowerUp Catch-Up (2026)

This repository is for the **PowerUp catch-up track**. It gives you the real B4F Hub code and the
complete material for the React sessions and the backend sessions, plus practice and homework that
you do yourself.

## What we covered

| PowerUp session | Topic                                                            | Main-class sessions |
| --------------- | ---------------------------------------------------------------- | ------------------- |
| 01              | React: Router, Context, Redux Toolkit, selectors, `localStorage` | 01–04               |
| 02              | Backend: how the B4F Hub Node.js + Express server works          | 05 (first part)     |

## What is inside

```
.
├── docs/
│   ├── session-01/ … session-04/   complete material from the React sessions
│   ├── powerup-practice/           PowerUp 01 practice (React)
│   └── powerup-session-02/         PowerUp 02 guide + homework (backend)
├── server/                         the real B4F Hub Express server, as explained in PowerUp 02
├── practice-client/                B4F Hub React app at the start of Session 01 — your React practice
└── client/                         B4F Hub React app at the end of Session 04 — the React reference
```

### `docs/session-01` … `docs/session-04` — React material

| Folder             | Files                                                        |
| ------------------ | ------------------------------------------------------------ |
| `docs/session-01/` | `SESSION_GUIDE-EN.pdf`, `HOMEWORK-EN.pdf`                    |
| `docs/session-02/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |
| `docs/session-03/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |
| `docs/session-04/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |

### `docs/powerup-practice/` — React practice

**`POWERUP-PRACTICE-EN.pdf`** — rebuild B4F Hub's React architecture in `practice-client/`.

### `docs/powerup-session-02/` — backend

- **`SESSION_GUIDE-EN.pdf`** — how the server works: every file, the real endpoints, and requests
  traced from React to the server and back.
- **`HOMEWORK-EN.pdf`** — backend homework: you add four new endpoints to `server/index.js`.

### `server/`

The real B4F Hub Node.js + Express server — exactly the code we read in PowerUp Session 02. Almost
everything lives in one file, `index.js` (the app, the data in memory and every route); `data.js`
holds the starting data and `test.js` is the small "script vs server" demo. Every client gets its data
from it. Data lives in memory only and resets every time the server restarts.

### `practice-client/`

The real B4F Hub React app as it was at the **start of Session 01** — it loads real data from the
server with `fetch`, but has no Router, no Context and no Redux yet. Your React practice happens here.

### `client/`

The real B4F Hub React app at the **end of Session 04** — the React reference. Try each part yourself
first; read `client/` only when you are stuck.

| Topic                      | Where to look in `client/src/`                                                     |
| -------------------------- | ---------------------------------------------------------------------------------- |
| React Router               | `main.tsx`, `App.tsx`, `components/Navbar.tsx`, `pages/OpportunityDetailPage.tsx`  |
| Context                    | `context/NotificationContext.tsx`                                                  |
| Redux Toolkit              | `main.tsx`, `store/store.ts`, `store/hooks.ts`, `store/savedOpportunitiesSlice.ts` |
| Two slices and selectors   | `store/recentlyViewedSlice.ts`, `store/selectors.ts`                               |
| `localStorage` persistence | `store/savedOpportunitiesSlice.ts`, `store/store.ts`                               |

## Setup

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone <this repository's URL>
cd b4f-cohort8-salamiyah-powerup-react-2026
```

Every client needs the server running. Use **two terminals**, both started from the repository root.

### Terminal 1 — the server (port 3001)

```bash
cd server
npm install
npm start
```

Leave it running. After you change server code, stop it (Ctrl+C) and run `npm start` again.

### Terminal 2 — your practice client (port 5173)

```bash
cd practice-client
npm install
npm run dev
```

Open http://localhost:5173.

### Optional — the reference client

To look at the finished Session 04 app, stop the practice client (Ctrl+C) and run, in Terminal 2:

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173. (If both clients run at the same time, the second one uses the next
free port, such as 5174 — always open the address Vite prints.)

## What to work on

1. **Backend homework (PowerUp 02):** follow `docs/powerup-session-02/HOMEWORK-EN.pdf`. This is the
   one task where you change `server/`.
2. **React practice (PowerUp 01), at your own pace:** rebuild B4F Hub's React architecture inside
   `practice-client/`, following `docs/powerup-practice/POWERUP-PRACTICE-EN.pdf`. Before you submit,
   run `npm run build` and `npm run lint` inside `practice-client/`.

Do not change `client/` or `docs/`. Change `server/` only for the backend homework.

## Branch rules

- `main` is managed by the instructor. Never push to `main`.
- Each student gets one personal branch, `student-<your-github-username>` in lowercase. Your
  instructor will tell you when yours is ready.
- Commit often and push only to your own branch.

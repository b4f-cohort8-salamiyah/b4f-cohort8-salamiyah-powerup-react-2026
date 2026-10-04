# B4F Cohort 8 — Salamiyah — PowerUp React Catch-Up (2026)

This repository is for the **PowerUp React catch-up track**. It gives you the complete material and
the real B4F Hub code from the first four React sessions, plus a practice where you rebuild B4F
Hub's React architecture yourself against the same real Express server.

## What we covered on Saturday

Saturday covered the main ideas of four sessions quickly, in about three hours, using the real
B4F Hub project:

| Session | Topic                                                      |
| ------- | ---------------------------------------------------------- |
| 01      | React Router                                               |
| 02      | Context                                                    |
| 03      | Redux Toolkit                                              |
| 04      | Multiple slices, selectors, and `localStorage` persistence |

Use this repository to go back through each topic slowly, then practise all of it yourself.

## What is inside

```
.
├── docs/
│   ├── session-01/ … session-04/   complete material from Sessions 01–04
│   └── powerup-practice/           your practice instructions
├── server/                         the real B4F Hub Express server (data for every client)
├── practice-client/                B4F Hub at the start of Session 01 — you work here
└── client/                         B4F Hub at the end of Session 04 — the reference
```

### `docs/session-01` … `docs/session-04`

The complete material from each session:

| Folder             | Files                                                        |
| ------------------ | ------------------------------------------------------------ |
| `docs/session-01/` | `SESSION_GUIDE-EN.pdf`, `HOMEWORK-EN.pdf`                    |
| `docs/session-02/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |
| `docs/session-03/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |
| `docs/session-04/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |

Read each `SESSION_GUIDE-EN.pdf` first. The teamwork and homework PDFs show what the class
practised after each session.

### `docs/powerup-practice/`

**`POWERUP-PRACTICE-EN.pdf`** — your practice instructions. Read it before you start.

### `server/`

The real B4F Hub Express server — the same one from class. It is already built for you: it serves
the opportunities and community posts under `/api/...`, keeps its data in memory, and resets to the
original data every time it restarts. **Run it, but do not change it.**

### `practice-client/`

The real B4F Hub React app as it was at the **start of Session 01** — it already loads real data
from the server with `fetch`, but has no Router, no Context and no Redux yet. This is where you
rebuild those yourself, following the practice PDF.

### `client/`

The real B4F Hub React app at the **end of Session 04** — the reference. Try each part yourself
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

Leave it running.

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

1. Review `docs/session-01` … `docs/session-04`.
2. Rebuild B4F Hub's React architecture inside `practice-client/`, following
   `docs/powerup-practice/POWERUP-PRACTICE-EN.pdf`: CORE first, then STRETCH, then CHALLENGE.
3. Before you submit, run `npm run build` and `npm run lint` inside `practice-client/`.

Work only inside `practice-client/`. Do not change `server/`, `client/` or `docs/`.

## Branch rules

- `main` is managed by the instructor. Never push to `main`.
- Each student gets one personal branch, `student-<your-github-username>` in lowercase. Your
  instructor will tell you when yours is ready.
- Commit often and push only to your own branch.

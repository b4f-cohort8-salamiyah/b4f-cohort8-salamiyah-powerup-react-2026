# B4F Cohort 8 — Salamiyah — PowerUp React Catch-Up (2026)

This repository is for the **PowerUp React catch-up track**. It gives you the complete material
and the real code from the first four React sessions, plus one practice project that combines them.

## What we covered on Saturday

Saturday covered the main ideas of four sessions quickly, in about three hours:

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
│   └── powerup-practice/           the Course Explorer task
├── client/                         B4F Hub frontend, end of Session 04
├── server/                         B4F Hub data server, used by client/
└── course-explorer/                your practice project — you work here
```

### `docs/session-01` … `docs/session-04`

The complete material from each session, so you can review every topic in detail:

| Folder             | Files                                                        |
| ------------------ | ------------------------------------------------------------ |
| `docs/session-01/` | `SESSION_GUIDE-EN.pdf`, `HOMEWORK-EN.pdf`                    |
| `docs/session-02/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |
| `docs/session-03/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |
| `docs/session-04/` | `SESSION_GUIDE-EN.pdf`, `TEAMWORK-EN.pdf`, `HOMEWORK-EN.pdf` |

Read each `SESSION_GUIDE-EN.pdf` first. The teamwork and homework PDFs show what the class
practised after each session.

### `client/`

The real B4F Hub React app exactly as it was at the **end of Session 04**. Use it as a working
example — every idea from Sessions 01–04 is in it:

| Topic                      | Where to look in `client/src/`                                                     |
| -------------------------- | ---------------------------------------------------------------------------------- |
| React Router               | `main.tsx`, `App.tsx`, `components/Navbar.tsx`, `pages/OpportunityDetailPage.tsx`  |
| Context                    | `context/NotificationContext.tsx`                                                  |
| Redux Toolkit              | `main.tsx`, `store/store.ts`, `store/hooks.ts`, `store/savedOpportunitiesSlice.ts` |
| Two slices and selectors   | `store/recentlyViewedSlice.ts`, `store/selectors.ts`                               |
| `localStorage` persistence | `store/savedOpportunitiesSlice.ts`, `store/store.ts`                               |

### `server/`

A small Express server that gives data to `client/`. You do not need to study it for this track —
just start it so the client has data.

### `course-explorer/`

Your practice project. It combines React Router, Context, Redux Toolkit, selectors, multiple
slices, and `localStorage` persistence. The full task is in
**`docs/powerup-practice/POWERUP-PRACTICE-EN.pdf`** — read it before you start.

## Setup

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone <this repository's URL>
cd b4f-cohort8-salamiyah-powerup-react-2026
```

### Run Course Explorer

From the repository root:

```bash
cd course-explorer
npm install
npm run dev
```

Open http://localhost:5174. Course Explorer has its own local data and does not need the server.

### Run B4F Hub

B4F Hub needs **two terminals**, both started from the repository root.

Terminal 1 — the server (port 3001):

```bash
cd server
npm install
npm start
```

Terminal 2 — the client (port 5173):

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173. Keep both running — the client gets its data from the server.

## What to work on

1. Review `docs/session-01` … `docs/session-04`, using `client/` as the working example.
2. Build Course Explorer inside `course-explorer/`, following
   `docs/powerup-practice/POWERUP-PRACTICE-EN.pdf`: CORE first, then STRETCH, then CHALLENGE.
3. Before you submit, run `npm run build` and `npm run lint` inside `course-explorer/`.

Do not change `client/`, `server/` or `docs/`.

## Branch rules

- `main` is managed by the instructor. Never push to `main`.
- Each student gets one personal branch, `student-<your-github-username>` in lowercase. Your
  instructor will tell you when yours is ready.
- Commit often and push only to your own branch.

# Would You Rather?

A "Would You Rather?" polling app built with **React** and **Redux**. Users log in as one of the sample users, ask questions with two options, answer other users' questions and compare scores on a leaderboard.

> **Status: work in progress.** The project scaffolding, Redux actions, mock data API and the Login and Home components are in place. Several components and reducers (`NewQuestion`, `Leaderboard`, `Navbar`, `PrivateRoute`, `Page404`, the `users`/`questions`/`authedUser` reducers) are still empty, so the app does not run end-to-end yet.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-4-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![Bulma](https://img.shields.io/badge/Bulma-0.9-00D1B2?logo=bulma&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Planned Features

Based on the routes, actions and mock API already in the code:

- **Login** (`/`): pick a user from a drop-down of sample users.
- **Home** (`/home`): tabbed view of the user's questions.
- **New question** (`/add`): create a "Would you rather…" question with two options.
- **Answer** questions (`_saveQuestionAnswer` in the mock API).
- **Leaderboard** (`/leaderboard`): rank users by questions asked and answered.
- Protected routes for logged-in users and a 404 page.

## Tech Stack

- React 18 (Create React App)
- Redux 4, React Redux, Redux Thunk, React Redux Loading Bar
- React Router 6
- Bulma CSS, React Tabs
- Mock async backend in `src/utils/_DATA.js` (`_getUsers`, `_getQuestions`, `_saveQuestion`, `_saveQuestionAnswer`)

## Getting Started

```bash
git clone https://github.com/sharky412/Would_You_Rather.git
cd Would_You_Rather
npm install
npm start
```

The dev server runs at http://localhost:3000.

## Project Structure

```
src/
├── components/     # App (routes), Login, Home, NewQuestion, Leaderboard, Navbar, PrivateRoute, Page404
├── redux/
│   ├── actions/    # authedUser, questions, users
│   ├── reducers/   # authedUser, questions, users, index
│   └── store.js
└── utils/_DATA.js  # Mock users/questions data and async API
public/images/      # User avatars
```

## License

Released under the [MIT License](LICENSE).

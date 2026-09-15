# SilverSkyStake Frontend

The SilverSkyStake frontend is a React and TypeScript web application for account management, verification, offers, and related user settings. It uses Material UI, React Router, Redux Toolkit, and a custom Webpack configuration.

## Requirements

- Node.js 18 or later
- npm
- Access to the SilverSkyStake backend API

## Getting Started

Install dependencies from the project directory:

```bash
npm install
```

Create a `.env` file when the API is not available at the default address:

```env
REACT_APP_API_BASE_URL=http://localhost:8001
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000). The development server supports hot reload and client-side route fallback.

## Available Scripts

| Command                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Start Webpack in development mode on port `5000`.         |
| `npm run build`        | Create an optimized production bundle in `build/`.        |
| `npm run lint`         | Run ESLint against the `src` directory.                   |
| `npm run lint:error`   | Report ESLint errors only.                                |
| `npm run lint:fix`     | Fix applicable ESLint issues and remove unused variables. |
| `npm run format:check` | Check TypeScript formatting with Prettier.                |
| `npm run format:fix`   | Format TypeScript files with Prettier.                    |

To inspect the production bundle, set `ANALYZE_BUNDLE=true` before running the build. In PowerShell:

```powershell
$env:ANALYZE_BUNDLE = 'true'; npm run build
```

## Configuration

`REACT_APP_API_BASE_URL` controls the backend URL used by the frontend. The value is injected at build time by `dotenv-webpack`; do not commit credentials or other secrets to `.env` files.

If the variable is not set, the application falls back to `http://172.20.4.112:8001`, as defined in `src/configs/index.ts`.

## Main Routes

- `/` - Main application layout
- `/setting/account` - Account information
- `/setting/security` - Security settings
- `/setting/preference` - Preferences
- `/setting/session` - Active sessions
- `/setting/ignore` - Ignored users
- `/setting/verify` - Identity verification
- `/setting/offer` - Offers
- `/promotion`, `/vip`, `/blog`, `/forum`, `/support` - Content and promotional pages
- `/:token/reset-password` - Password reset

## Production

Build the application and serve the generated `build/` directory with a static web server:

```bash
npm run build
npx serve -s build
```

The server must route unknown paths to `index.html` so React Router can handle client-side navigation.

# DrivePulse

DrivePulse is a responsive car discovery, comparison, and watchlist demo. The project is split into a React + TypeScript + Vite frontend and a Node + Express + TypeScript + MongoDB + Socket.IO API.

## Run locally

Requirements: Node.js 20 or newer (includes npm). MongoDB is optional for the frontend-only demo and required for backend persistence and live updates.

### In VS Code

Open the DrivePulse project folder in VS Code. Press `Ctrl+Shift+B` and choose **DrivePulse: Start website** (or open the Command Palette with `Ctrl+Shift+P`, choose **Tasks: Run Task**, then choose **DrivePulse: Start website**). When Vite shows a local address in the terminal, open that address in your browser. The website works without starting the API.

To also start the optional API, run **Tasks: Run Task** and choose **DrivePulse: Start API (optional)**. MongoDB is only needed for database-backed catalog features.

### With npm

Install each app in its own folder, then run them in separate terminals:

```powershell
cd frontend
npm install
npm run dev
```

```powershell
cd backend
npm install
npm run dev
```

Open `http://localhost:5173`. The API listens at `http://localhost:4000`.

For backend persistence and real-time demo updates, copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI` to a local or hosted MongoDB connection string before starting the backend. The frontend works without MongoDB using its bundled demo catalog and browser-local saved cars/reviews.

### With pnpm

Alternatively, install the workspace with `pnpm install` and run both apps using `pnpm dev` from the root.

You can run the frontend by itself with `pnpm --filter drivepulse-web dev`; the bundled catalogue and browser-local saved cars/reviews work without the API. Starting the backend without `MONGODB_URI` leaves the HTTP server available but the server catalogue endpoints need a database connection.

## What is included

- 20 illustrative car profiles, filters, model details, reviews, and a comparison matrix capped at four cars.
- Local browser persistence for saved cars, comparisons, and review CRUD.
- Express API endpoints for search/filter/pagination, detail, compare, reviews, and simulated market status.
- MongoDB models and automatic seeding of 20 demo cars into an empty database.
- Socket.IO demo price updates every 45 seconds while the API is connected to MongoDB.
- Responsive layouts, keyboard focus styles, loading-safe image treatment, semantic page structure, and a frontend error boundary.

All listed prices, specifications, ratings, model availability, and market movements are illustrative portfolio demo data, not a live listing feed or buying advice. The simulated price fluctuations update the database only; they are not based on real market information.

## API

Base URL: `http://localhost:4000/api/v1`

- `GET /cars?q=&make=&bodyType=&fuel=&transmission=&minPrice=&maxPrice=&sort=&page=&limit=`
- `GET /cars/:id`
- `GET /cars/compare?ids=id1,id2,id3,id4`
- `GET /live-prices/status`
- `GET /watchlist/:sessionId`, `POST /watchlist`, and `DELETE /watchlist/:sessionId/:carId` for browser-session demo watchlists
- `POST /reviews` with `{ "carId", "reviewerName", "rating", "comment" }`
- `DELETE /reviews/:id`

The frontend stores its demo interactions locally so the portfolio can be evaluated without accounts. API review submission is available to a connected client when it has a MongoDB car ID.

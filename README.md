# AgrIDrone Mission Control Dashboard

A high-end React dashboard for Smart Agriculture Drone Monitoring.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Supabase
Copy `.env.example` to `.env` and fill in your keys:
```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_SUPABASE_URL=https://rfhdebvmyweobneoudon.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

> Use the **anon** key (not service_role) for the frontend dashboard.
> Make sure your `sensor_data` table and `drone-images` bucket have read policies.

### 3. Run development server
```bash
npm run dev
```

Open http://localhost:5173

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## Supabase Requirements

### Table: sensor_data
```sql
create table sensor_data (
  id bigint generated always as identity primary key,
  temperature float,
  humidity float,
  soil float,
  created_at timestamp default now()
);
-- Allow public read
create policy "allow_read" on sensor_data for select to anon using (true);
```

### Storage: drone-images bucket
- Must be **Public bucket** (toggle ON in dashboard)
- OR add SELECT policy for anon role

---

## Folder Structure
```
src/
├── App.jsx                  # Main layout + data fetching
├── main.jsx                 # Entry point
├── index.css                # Global styles + design tokens
├── lib/
│   └── supabase.js          # Supabase client + fetch helpers
└── components/
    ├── StatusBar.jsx         # Top status bar (online/GPS/mode)
    ├── SensorCard.jsx        # Animated sensor cards with ring gauge
    ├── DroneImagePanel.jsx   # Latest drone image viewer
    ├── AIInsightPanel.jsx    # AI recommendations panel
    ├── HistoryPanel.jsx      # Sparkline history charts
    └── SparkLine.jsx         # SVG sparkline component
```

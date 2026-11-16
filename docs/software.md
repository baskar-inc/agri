# AgrIDrone Software Documentation

## Frontend

- React
- Vite
- Tailwind CSS
- Lucide React

## Backend / Data

Supabase is used for database access, sensor-data storage, and drone-image storage.

## Dashboard Areas

- Status monitoring
- Sensor cards
- Drone image display
- Plant-health insight panel
- Historical data visualization
- Sparkline charts

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Security

Do not put privileged Supabase service-role credentials in frontend environment variables. Keep local `.env` files untracked.

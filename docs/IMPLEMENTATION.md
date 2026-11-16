# Implementation Notes

## Current software implementation

The reconstructed application provides a working React/Vite dashboard for the Design and Implementation of Drone Integrated Plant Health System.

### Implemented

- React/Vite application entry point.
- Responsive plant-health monitoring dashboard.
- Drone/flight status presentation for Pixhawk and ESP32-CAM/OV2640 components.
- Field sensor snapshot table with selectable fields.
- Rule-based demonstration plant-health scoring.
- Optional Supabase client initialization using Vite environment variables.
- Safe demo mode when Supabase configuration is not present.
- End-to-end workflow visualization from drone flight through plant-health monitoring.

### Data boundary

The dashboard deliberately uses local demonstration data unless a Supabase project is configured. It does not claim that a live sensor_data schema or storage bucket is available.

If the original Supabase schema is restored, the data layer can be connected through src/lib/supabase.js without committing credentials.

## Hardware boundary

The repository does not invent or fabricate ESP32-CAM firmware or Pixhawk configuration. Those artifacts should be added only from the original project files.

## Security

Real .env values must remain local. Use .env.example as the public configuration template.

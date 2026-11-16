# AgrIDrone System Architecture

## High-Level Architecture

```text
Agricultural Field
       │
       ▼
Drone / Camera / Sensors
       │
       ▼
ESP32-CAM / Embedded Controller
       │
       ▼
Data & Image Transmission
       │
       ├──────────────► Supabase Storage
       │
       └──────────────► Supabase Database
                               │
                               ▼
                       React + Vite Dashboard
                               │
                               ▼
                    Monitoring / Plant-Health UI
```

## Main Layers

1. **Field / Hardware:** drone platform, camera, sensors, and Pixhawk-related integration.
2. **Data Acquisition:** camera and sensor data are collected and prepared for transmission.
3. **Cloud:** Supabase provides database and image-storage services referenced by the dashboard.
4. **Application:** React/Vite presents status, sensor values, trends, imagery, and plant-health insights.

The repository should keep hardware acquisition, data transport, cloud persistence, frontend presentation, and plant-health analysis clearly separated.

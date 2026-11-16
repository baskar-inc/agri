# AgrIDrone — Smart Agriculture Drone Monitoring System

## Project Overview

**Design and Implementation of Drone Integrated Plant Health System**

AgrIDrone is a final-year engineering project combining a drone/camera sensing workflow with a web-based agricultural monitoring dashboard.

## System Scope

**Field / Drone → Camera & Sensor Data → Data Transmission → Supabase → React/Vite Dashboard → Plant-Health Monitoring**

### Technology areas
- React + Vite
- Tailwind CSS and Lucide React
- Supabase database and storage
- ESP32-CAM / OV2640 camera system
- Pixhawk-based flight-control integration
- 640×480 VGA image-capture workflow
- Environmental sensor data such as temperature, humidity, and soil-related measurements

## Repository Status

| Area | Status |
|---|---|
| React/Vite project foundation | Present |
| Dashboard configuration/documentation | Present |
| Supabase configuration template | Present |
| System block diagram | Present |
| Project preview asset | Present |
| Original source archive | Not currently visible in this branch |
| Embedded source files | Not currently visible in this branch |
| Full end-to-end hardware deployment | Requires verification against original project files |
| AI/ML plant-disease model integration | Not claimed as completed |

> This repository must only claim hardware, AI/ML, and end-to-end features supported by the actual source/evidence.

## Dashboard Scope

The documented dashboard areas include:
- System/drone status
- GPS and operating mode
- Environmental/sensor readings
- Latest drone image
- Historical sensor trends
- Plant-health insights

## Supabase Configuration

Create a local `.env` from `.env.example` and run:

```bash
npm install
cp .env.example .env
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

Never commit a real `.env` file or privileged Supabase credentials.

## Supabase Data Model

### sensor_data
Expected fields currently documented are `id`, `temperature`, `humidity`, `soil`, and `created_at`.

### drone-images
Supabase Storage bucket used for drone image assets.

## Repository Structure

```text
agri/
├── README.md
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── preview.webp
├── agridrone_system_block_diagram.png
└── docs/
    ├── architecture.md
    ├── hardware.md
    ├── software.md
    └── project-status.md
```

The source tree will be expanded when the original application/embedded source archive is restored.

## Engineering Value

The project spans embedded sensing/camera capture, drone integration, data transmission, cloud persistence, and a React monitoring interface.

## Interview Integrity

Describe only the features actually implemented and supported by repository evidence. Do not claim an AI model, autonomous flight capability, disease-classification accuracy, or production deployment unless the corresponding implementation and evidence are present.

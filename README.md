# Design and Implementation of Drone Integrated Plant Health System

A final-year engineering project that combines drone-based field monitoring, ESP32-CAM/OV2640 imaging, Pixhawk flight-control integration, and a React-based plant-health monitoring application.

## Repository Status

**Reconstruction completed for the project resources currently available.**

This repository contains the complete software reconstruction that can be supported by the available resources. Unavailable original hardware firmware, flight configuration, wiring files, credentials, and other source artifacts are not fabricated.

## System Overview

The project brings together:

- Drone-based aerial monitoring
- Pixhawk flight controller
- PWM-triggered camera capture
- ESP32-CAM with OV2640 camera
- React + Vite monitoring application
- Supabase integration point
- Field sensor monitoring
- Rule-based demonstration plant-health analysis

## End-to-End Workflow

**Drone flight → Pixhawk control → PWM camera trigger → ESP32-CAM / OV2640 capture → application/backend integration → plant-health monitoring and visualization**

## Application Features

- Responsive AgriDrone monitoring dashboard
- Field selection and sensor snapshot display
- Temperature, humidity, and soil-moisture metrics
- Demonstration plant-health status and scoring
- Rule-based monitoring guidance
- Pixhawk / ESP32-CAM / PWM workflow visualization
- Optional Supabase connection
- Safe demo mode when Supabase configuration is unavailable
- Mobile-responsive layout

## Technology Stack

### Frontend
- React 19
- Vite
- JavaScript
- CSS
- Lucide React

### Backend / Data Integration
- Supabase
- Supabase JavaScript client
- Known application integration point: sensor_data
- Known image-storage integration context: drone-images

### Hardware / Embedded
- Drone platform
- Pixhawk
- PWM trigger interface
- ESP32-CAM
- OV2640 camera
- 640×480 VGA capture configuration

## Repository Structure

~~~text
agri/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── lib/
│       └── supabase.js
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DATA_AND_ANALYSIS.md
│   ├── HARDWARE_INTEGRATION.md
│   ├── IMPLEMENTATION.md
│   ├── PROJECT_SCOPE.md
│   ├── PROJECT_STATUS.md
│   └── SETUP.md
├── public/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
~~~

## Data and Analysis Boundary

The current dashboard uses local demonstration data when a live Supabase configuration is not available.

The plant-health panel is **rule-based demonstration logic**. It is not represented as a trained AI/ML model.

The repository does not invent a Supabase table schema, storage policy, AI model, hardware firmware, Pixhawk parameter set, wiring diagram, or other unavailable implementation detail.

## Hardware Boundary

The repository documents the hardware integration supported by the available project resources. Original ESP32-CAM firmware, Pixhawk configuration files, wiring diagrams, and hardware test artifacts are not fabricated.

See:

- docs/ARCHITECTURE.md
- docs/HARDWARE_INTEGRATION.md
- docs/DATA_AND_ANALYSIS.md
- docs/PROJECT_SCOPE.md

## Development

Install dependencies:

~~~bash
npm install
~~~

Start the development server:

~~~bash
npm run dev
~~~

Build for production:

~~~bash
npm run build
~~~

Run lint checks:

~~~bash
npm run lint
~~~

For detailed setup instructions, see docs/SETUP.md.

## Security

Never commit real Supabase credentials or private configuration values.

Use .env.example as the public configuration template.

## Author

**Baskar R**

Final-year engineering project.

# Design and Implementation of Drone Integrated Plant Health System **(Final Year Project)**

> **Final Year Project · B.E. Electronics and Communication Engineering**

A drone-integrated plant health monitoring system combining aerial field monitoring, Pixhawk flight-control integration, ESP32-CAM/OV2640 imaging, field-sensor monitoring, and a React-based dashboard.

## Project Overview

**Drone flight → Pixhawk control → PWM camera trigger → ESP32-CAM / OV2640 capture → application/backend integration → plant-health monitoring and visualization**

## Key Components

- Drone-based aerial monitoring
- Pixhawk flight controller integration
- PWM-triggered camera capture
- ESP32-CAM with OV2640 camera
- 640×480 VGA capture configuration
- React + Vite monitoring dashboard
- Supabase integration point
- Temperature, humidity, and soil-moisture monitoring
- Rule-based demonstration plant-health analysis

## Software

- React 19
- Vite
- JavaScript
- CSS
- Lucide React
- Supabase JavaScript client

## Hardware

- Drone platform
- Pixhawk
- PWM trigger interface
- ESP32-CAM
- OV2640 camera

## Repository Status

**Reconstruction completed for the project resources currently available.**

This repository documents and implements the software functionality that can be supported by the available project resources. Original hardware firmware, Pixhawk parameter files, wiring diagrams, production Supabase configuration, trained AI/ML model files, and other unavailable artifacts are not fabricated.

## Data & Analysis

The current dashboard supports local demonstration data and an optional Supabase integration.

The plant-health panel uses **rule-based demonstration logic**. It is not represented as a trained AI/ML model.

Known integration points include:

- `sensor_data`
- `drone-images`

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

See the `docs/` directory for architecture, hardware integration, data/analysis, implementation, setup, project scope, and project status.

## Author

**Baskar R**

B.E. Electronics and Communication Engineering  
Final Year Project

# Design and Implementation of Drone Integrated Plant Health System

A final-year engineering project focused on integrating a drone-mounted imaging system with a plant-health monitoring application.

## Repository Status

**Software reconstruction completed for the available project scope.**

The repository now contains a runnable React/Vite monitoring application, project documentation, safe Supabase configuration scaffolding, and an explicit boundary between implemented software and hardware artifacts that still require the original source/configuration files.

## System Overview

The project combines:

- A drone-based aerial platform
- ESP32-CAM / OV2640 camera hardware
- Pixhawk-based flight-control integration
- PWM-triggered image capture
- A React + Vite web application
- Supabase integration scaffolding
- Plant-health monitoring and rule-based visualization

## Implemented in this repository

- Responsive AgriDrone monitoring dashboard
- Field sensor snapshot view
- Selectable field monitoring
- Rule-based plant-health demonstration analysis
- Pixhawk / ESP32-CAM / PWM workflow presentation
- Optional Supabase client initialization
- Safe demo mode when live Supabase configuration is unavailable
- Project architecture and implementation documentation
- Public environment configuration template without credentials

## Technology Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

### Backend / Data
- Supabase
- Supabase JavaScript client

### Embedded / Hardware
- ESP32-CAM
- OV2640 camera
- Pixhawk
- PWM trigger interface

## Repository Structure

- src/ — React application source
- src/lib/ — Supabase integration
- docs/ — Architecture and implementation documentation
- public/ — Static frontend assets
- .env.example — Safe public configuration template
- package.json — Frontend dependencies and scripts
- vite.config.js — Vite configuration
- README.md — Project overview

## Core Workflow

**Drone flight → Pixhawk control → camera trigger → image capture → application/backend integration → plant-health analysis and visualization**

The dashboard currently uses local demonstration data unless a Supabase project is configured. This prevents the repository from claiming a live database schema that has not been verified.

## Hardware Source Boundary

ESP32-CAM firmware, Pixhawk flight configuration, wiring diagrams, and original demonstration media are not fabricated. They should be added only when the corresponding original project files are available.

## Development

Install dependencies:

npm install

Start the development server:

npm run dev

Build for production:

npm run build

Run lint checks:

npm run lint

## Security

Do not commit real Supabase credentials or private configuration values. Use .env.example as the public template.

## Author

**Baskar R**

Final-year engineering project.

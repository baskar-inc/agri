# Design and Implementation of Drone Integrated Plant Health System

A final-year engineering project focused on integrating a drone-mounted imaging system with a plant-health monitoring application.

## Project Status

**Reconstructed project repository — active development/documentation**

This repository contains the software workspace and documentation for the final-year project. The repository is being reconstructed from the project work completed so far; unfinished components are explicitly marked rather than presented as complete.

## System Overview

The project combines:

- A drone-based aerial platform
- ESP32-CAM / OV2640 camera hardware
- Pixhawk-based flight-control integration
- PWM-triggered image capture
- A React + Vite web application
- Supabase for application data/storage integration
- Plant-health monitoring and visualization

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

```
.
├── src/                 # React application source
├── public/              # Static frontend assets
├── docs/                # Project architecture and technical documentation
├── package.json         # Frontend dependencies and scripts
├── vite.config.*        # Vite configuration
└── README.md            # Project overview
```

## Core Workflow

The intended system flow is:

**Drone flight → Pixhawk control → camera trigger → image capture → application/backend integration → plant-health analysis and visualization**

The repository documents the implementation that actually exists. Future integrations and unfinished functionality will be tracked separately instead of being claimed as completed features.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Project Documentation

See the `docs/` directory for the reconstructed architecture and implementation notes.

## Author

**Baskar R**

Final-year engineering project.

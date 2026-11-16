# System Architecture

## Project

**Design and Implementation of Drone Integrated Plant Health System**

## High-Level Architecture

The system is organized into four connected layers:

1. **Drone / Flight Layer**
   - Drone platform
   - Pixhawk flight controller
   - PWM-based trigger interface

2. **Imaging Layer**
   - ESP32-CAM
   - OV2640 camera
   - Image capture at the configured camera resolution

3. **Application Layer**
   - React + Vite web application
   - Plant-health monitoring interface
   - Data visualization and user-facing controls

4. **Backend / Storage Layer**
   - Supabase
   - Application data
   - Image storage integration

## Data Flow

```
Drone
  │
  ▼
Pixhawk
  │
  │ PWM trigger
  ▼
ESP32-CAM + OV2640
  │
  │ image/data transfer
  ▼
Application / Supabase
  │
  ▼
Plant-health monitoring interface
```

## Current Repository Boundary

This repository is primarily the software/application workspace. Hardware firmware, wiring, flight configuration, and external services should be added under clearly named directories when their corresponding source files are available.

## Implementation Status

The repository is being reconstructed from the completed project work. Documentation distinguishes implemented functionality from planned or pending integrations so that the GitHub repository remains technically accurate.

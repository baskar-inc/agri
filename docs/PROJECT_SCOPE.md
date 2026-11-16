# Project Scope and Reconstruction Boundary

## Project

**Design and Implementation of Drone Integrated Plant Health System**

This repository is the reconstructed software/project workspace for the final-year project. The reconstruction uses only the project resources and implementation details available to us.

## What is included

### Application
- React + Vite frontend
- Responsive plant-health monitoring dashboard
- Field selection and sensor snapshot display
- Demonstration plant-health scoring
- Drone/flight workflow presentation
- Supabase client integration through environment variables
- Safe demo mode when Supabase configuration is unavailable

### Known project integration points
- Drone-based aerial operation
- Pixhawk flight controller
- PWM-triggered camera capture
- ESP32-CAM
- OV2640 camera
- Camera image/data transfer
- Supabase application/data layer
- Plant-health monitoring and visualization

## Evidence boundary

The repository must not invent source code, database definitions, hardware wiring, flight parameters, AI models, or credentials that are not present in the available project resources.

Therefore:

- The frontend implementation is included because its source is available.
- The Supabase client integration is included because the application uses the Supabase JavaScript client.
- The sensor_data query is treated as an integration point, not as a verified live schema.
- The drone-images storage concept is documented as part of the known project integration context, but no unverified storage schema is fabricated.
- ESP32-CAM firmware and Pixhawk configuration are described at the integration level only unless their original source files are available.
- Plant-health analysis in the current application is explicitly rule-based demonstration logic. It must not be described as a machine-learning model.

## Completion definition

For this reconstruction, the repository is considered complete when all available resources have been organized, documented, and represented in the software without fabricating unavailable artifacts.

Additional original project files can be added later without changing this boundary.

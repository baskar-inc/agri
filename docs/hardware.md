# AgrIDrone Hardware Documentation

## Hardware Scope

The project documentation references:
- Drone platform
- Pixhawk flight controller
- ESP32-CAM
- OV2640 camera
- Environmental/field sensors

## Camera Workflow

The documented camera subsystem uses an ESP32-CAM / OV2640 configuration with a 640×480 VGA-class capture workflow.

## Pixhawk Integration

Pixhawk is part of the flight-control/trigger workflow. Exact wiring, PWM configuration, firmware behavior, and timing should be documented from the original hardware source files and test evidence rather than inferred.

## Verification Rule

Pin assignments, voltage requirements, wiring, flight parameters, and timing values should only be added after verification against the actual implementation.

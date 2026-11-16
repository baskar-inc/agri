# Hardware Integration

## System

**Design and Implementation of Drone Integrated Plant Health System**

## Hardware components represented by the available project resources

| Component | Role |
|---|---|
| Drone platform | Aerial field monitoring |
| Pixhawk | Flight-control platform |
| PWM interface | Camera trigger mechanism |
| ESP32-CAM | Camera/control device |
| OV2640 | Camera sensor |
| Ground/application layer | Receives and visualizes captured information |

## Capture workflow

The documented project flow is:

1. The drone performs the field flight.
2. Pixhawk provides flight-control coordination.
3. A PWM trigger is used for the camera capture event.
4. ESP32-CAM controls the OV2640 camera.
5. The captured image/data is transferred toward the application/backend layer.
6. The application presents plant-health monitoring information.

## Camera

The available project context specifies an OV2640 camera connected through ESP32-CAM and a 640×480 VGA capture configuration.

This repository does not fabricate camera firmware, pin mappings, electrical values, or flight parameters that are not available as source material.

## Pixhawk / PWM

Pixhawk and PWM are represented as an integration boundary in the application and architecture documentation.

The repository does not claim a particular Pixhawk firmware version, parameter set, PWM channel, pulse width, wiring pin, or autopilot configuration unless the original configuration files are provided.

## Hardware source files

Original embedded firmware, wiring diagrams, Pixhawk parameter files, and hardware test logs are not reconstructed from imagination. They should be copied into the repository only when the original resources are available.

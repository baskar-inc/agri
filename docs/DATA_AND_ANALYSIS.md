# Data and Plant-Health Analysis

## Data flow

The project application is designed around field monitoring information received from the drone/sensor side and made available to the application layer.

The known application integration points are:

- Supabase client: src/lib/supabase.js
- Known data query integration point: sensor_data
- Known image-storage integration context: drone-images

The repository deliberately does not invent a database schema for these resources.

## Current application behavior

The dashboard contains local demonstration sensor records so that the application can operate without a configured Supabase project.

The demonstration fields include:

- Field name
- Temperature
- Humidity
- Soil moisture
- Plant-health status
- Capture time

The current dashboard supports field selection and displays the corresponding values.

## Plant-health analysis

The current frontend implements **rule-based demonstration analysis**.

The displayed score and recommendation depend on the demonstration field status and soil-moisture threshold logic in the frontend.

This is not presented as:
- a trained machine-learning model,
- an AI service,
- a computer-vision model,
- or an agricultural prediction model.

## Supabase mode

When VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are available, the application initializes a Supabase client.

The refresh action attempts a read from sensor_data.

If the live schema is unavailable or the query fails, the interface remains usable and reports the integration state rather than fabricating live data.

## Images

The project context includes a drone-images storage concept. No unverified bucket policy, table schema, image metadata schema, or production storage configuration is created in this repository.

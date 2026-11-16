# Development Setup

## Requirements

Use a recent Node.js version compatible with the Vite version recorded in package.json.

## Install

~~~bash
npm install
~~~

## Run development server

~~~bash
npm run dev
~~~

## Production build

~~~bash
npm run build
~~~

## Lint

~~~bash
npm run lint
~~~

## Optional Supabase configuration

Create a local .env file using .env.example:

~~~env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
~~~

Never commit real credentials.

If the variables are empty, the application runs in demo mode using its local demonstration data.

## Repository structure

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

## Security

Do not commit:
- Supabase service-role keys
- private API keys
- local .env files
- credentials
- private hardware configuration

The public repository should contain only the safe configuration template.

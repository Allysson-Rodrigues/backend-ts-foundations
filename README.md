# Backend TypeScript Foundations

[![CI Status](https://github.com/Allysson-Rodrigues/backend-ts-foundations/actions/workflows/main.yml/badge.svg)](https://github.com/Allysson-Rodrigues/backend-ts-foundations/actions/workflows/main.yml)

Backend-first starter for scalable REST APIs with TypeScript, Express 5, native ESM, and a clean separation between delivery code and business rules.

## What this repository gives you

- Express 5 + TypeScript baseline ready for extension
- Clean Architecture-inspired folder split across `main` and `presentation`
- Built-in health endpoint at `GET /api/health`
- Vitest + Supertest coverage for the application surface
- Biome-based linting and formatting
- Docker build verification in CI

## Core stack

- Runtime: Node.js 24+
- Framework: Express 5
- Language: TypeScript
- Execution: `tsx`
- Quality: Biome, Vitest, Supertest

## Architecture snapshot

```text
.
├── src/
│   ├── main/          Composition root, route wiring, and adapters
│   ├── presentation/  HTTP controllers and protocols
│   ├── app.ts         Express bootstrap
│   └── server.ts      Runtime entry point
├── Dockerfile
├── biome.json
├── tsconfig.json
└── package.json
```

The current template keeps the application intentionally small: one health controller, one route adapter, and the bootstrap path needed to scale the project without coupling business rules to Express.

## Local setup

1. Install dependencies:

```bash
npm ci
```

2. Create a local environment file:

```env
PORT=3000
NODE_ENV=development
```

3. Start the development server:

```bash
npm run dev
```

4. Verify the API:

```bash
curl http://localhost:3000/api/health
```

## Environment contract

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | HTTP port used by `src/server.ts` |
| `NODE_ENV` | `development` | Runtime mode and local behavior |

## Quality gate

```bash
npm run lint
npm run test
npm run build
```

Available maintenance scripts:

- `npm run lint:fix`
- `npm run format`
- `npm run test:watch`

## CI and delivery

GitHub Actions runs on every push and pull request to `main`:

- lint with Biome
- automated tests with Vitest
- Docker image build verification

For deployment, `npm run build` emits `dist/server.js`, and the included `Dockerfile` supports container-based delivery when you want a reproducible runtime image.

## License

MIT

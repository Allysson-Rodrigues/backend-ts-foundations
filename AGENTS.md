# Backend TypeScript Foundations Governance

Project-local governance for the backend-ts-foundations repository.

## 1. Technical Standards
- Node.js >= 24, TypeScript, Express.
- Tooling: Biome (`npm run lint`, `npm run lint:fix`) and `tsc` (`npm run build`).
- Architecture: Clean, modular domain boundaries and presentation controllers.

## 2. Quality & Validation
- Zero linting warnings: enforce Biome rules before committing.
- Strict typing: no `any` types; define explicit interfaces and request/response types.
- Build verification: `npm run build` must succeed without errors.

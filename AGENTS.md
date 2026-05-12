# AGENTS.md
## Project Overview
E-commerce platform built with Next.js, Postgres, and Stripe.
## Build & Test
- Install: `pnpm install`
- Dev: `pnpm dev`
- Test: `pnpm test`
- Lint: `pnpm lint:fix`
## Code Standards
- Use TypeScript strict mode
- Prefer named exports over default exports
- API routes follow REST conventions in /src/api/
## Testing Requirements
- All PRs must include tests
- Use vitest for unit tests, playwright for e2e
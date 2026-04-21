# OpenSIN Developers Website

Developer portal for **developers.opensin.ai**.

## Positioning

- `docs.opensin.ai` = consumer-first documentation
- `developers.opensin.ai/docs` = developer docs, API, SDK, and integrations
- `my.opensin.ai` = managed/customer layer

## Development

```bash
bun ./scripts/build.mjs
```

## Deployment

Cloudflare Pages static site.

```bash
wrangler pages deploy dist --project-name website-developers-opensin-ai
```

## Notes

- This is an original OpenSIN design inspired by premium docs portals.
- It intentionally stays separate from `docs.opensin.ai`.

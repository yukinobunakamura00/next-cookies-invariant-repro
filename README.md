# next-cookies-invariant-repro

Minimal reproduction: `cookies()` throws an `InvariantError` in `next dev` with `cacheComponents` when a Server Action form is submitted before hydration (or with JavaScript disabled).

## Steps

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000/ with **JavaScript disabled** in the browser.
4. Click "go".

The POST returns 500 and the dev server logs:

```
⨯ Error [InvariantError]: Invariant: Received an underlying cookies object that does not match either `cookies` or `mutableCookies`. This is a bug in Next.js.
```

With `npm run build && npm run start`, or with `cacheComponents` removed from `next.config.mjs` in `next dev`, the same steps work (200).

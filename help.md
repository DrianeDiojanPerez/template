# `client:load` vs `client:only` in Astro

**`client:load`** — Server-renders the component, then hydrates it on the client when the page loads. Content is visible immediately.

```astro
<MyComponent client:load />
```

**`client:only`** — Skips SSR entirely. Renders only in the browser. Use when the component relies on browser APIs (`window`, `localStorage`) or doesn't support SSR. Requires the framework name as a string.

```astro
<MyComponent client:only="react" />
```

| | `client:load` | `client:only` |
| --- | --- | --- |
| Server-rendered | Yes | No |
| Visible before JS | Yes | No |
| Browser-only APIs | No | Yes |

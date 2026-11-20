# Bundle Mop demo: Acme Analytics

A small Next.js 16 app (App Router, Turbopack, npm) that shows
[**Bundle Mop**](https://github.com/yosuva-rv/bundle-mop) commenting on pull requests.

## See it in action

| Pull request | What it does | What Bundle Mop says |
|---|---|---|
| [#1 Show "last updated" on the home page](../../pull/1) | Adds `moment` to a client component on `/` | 🔺 +61 kB first-load, **❌ budget exceeded**, why it ships (import chain) and three fixes |
| [#2 Lazy-load the revenue chart](../../pull/2) | Wraps the recharts chart in `next/dynamic` | 🔻 first-load drops ~368 kB on `/dashboard`; recharts **moved to lazy** |

These PRs stay open as examples. Nothing here gets merged.

## How it's set up

Two files:

**[`.github/workflows/bundle-mop.yml`](.github/workflows/bundle-mop.yml)**

```yaml
on: pull_request
permissions:
  contents: read
  pull-requests: write
jobs:
  bundle-mop:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - uses: yosuva-rv/bundle-mop@v0
```

**[`bundle-mop.config.json`](bundle-mop.config.json)**: per-route budgets (first matching entry wins).

```json
{
  "budgets": [
    { "route": "/", "firstLoad": "600 kB" },
    { "route": "/blog/**", "firstLoad": "600 kB" },
    { "route": "/dashboard", "firstLoad": "1 MB" },
    { "route": "/**", "firstLoad": "650 kB" }
  ]
}
```

Sizes are minified client JS from `next analyze` (Next.js 16.4+). Every page includes about 577 kB of React and
Next.js runtime; `/dashboard` adds recharts.

## Run it locally

```sh
npm ci
npm run dev
```

Or try the CLI on your own branch:

```sh
npx next analyze --output --snapshot base && npx next analyze export --snapshot base > base.jsonl
# ...switch branch...
npx next analyze --output --snapshot pr && npx next analyze export --snapshot pr > pr.jsonl
npx bundle-mop diff base.jsonl pr.jsonl
```

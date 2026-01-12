# @judix/icon

React SVG icon library for the Judix design system. Icons are sourced from `lib/icons` and compiled into fully controllable React components with size, color, and stroke overrides.

## Installation

```bash
npm install @judix/icon
```

## Usage

```tsx
import { Icon, Heart } from '@judix/icon';

<Heart size={32} color="#FF4D80" strokeWidth={1.75} />
<Icon name="heart" color="rebeccapurple" />
```

## Publishing

1. Ensure you are signed in to npm with publish permissions.
2. Update the version in `package.json` and add release notes.
3. Run `npm run build` and verify `dist/` contents.
4. Publish with `npm publish --access public`.

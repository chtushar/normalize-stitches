# modern-normalize

This package is a CSS-in-JS implementation of [normalize.css](https://necolas.github.io/normalize.css/).

## Installation

To install the package with `npm` run the following command:

```bash
npm i modern-normalize
```

or to install the package with `yarn` run:

```bash
yarn add modern-normalize
```

## Usage

```typescript
import { global } from '@stitches/react';
import { normalize } from 'modern-normalize';

const globalStyles = global({
  ...normalize,
  // Other custom global styling
});

() => {
  globalStyles();
  return <div />;
};
```

import type {
  OmitKey,
  InternalCSS,
  TMedias,
  CSSPropertiesToTokenScale,
  DeclarationListWithRootAtRules,
} from '@stitches/core';
/**
 * Type for `definition` parameter in `global` function
 *
 * reference - https://github.com/modulz/stitches/blob/1fa120b8c29789d5ef464958bdb5e9e493b16fe8/packages/react/types/styled.d.ts#L276
 */
export type Definition =
  | OmitKey<
      Record<
        string,
        /*@ts-ignore */
        InternalCSS<{} & TMedias, {}, {}, CSSPropertiesToTokenScale>
      >,
      '@font-face' | '@import'
    >
  | DeclarationListWithRootAtRules;
/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
 * @example
 * ```ts
 * const globalStyles = global({
 *  ...normalize,
 *  // Other custom global styling
 * });
 *
 * () => {
 *  globalStyles();
 *  return <div />
 * }
 *
 * ```
 */

export const normalize = {
  /* Document
   ========================================================================== */
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  html: {
    lineHeight: 1.15, // 1
    textSizeAdjust: '100%', // 2
  },

  /* Sections
   ========================================================================== */
  /**
   * Remove the margin in all browsers.
   */
  body: {
    margin: 0,
  },

  /**
   * Render the `main` element consistently in IE.
   */
  main: {
    display: 'block',
  },

  /**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */
  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },

  /* Grouping content
   ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr: {
    boxSizing: 'content-box', // 1
    height: 0, // 1
    overflow: 'visible', // 2
  },

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  pre: {
    fontFamily: 'monospace', // 1
    fontSize: '1em', // 2
  },

  /* Text-level semantics
   ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */
  a: {
    backgroundColor: 'transparent',
  },

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  'abbr[title]': {
    borderBottom: 'none', // 1
    textDecoration: 'underline dotted', // 2
  },

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  'b, strong': {
    fontWeight: 'bolder',
  },

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  'code, kbd, samp': {
    fontFamily: 'monospace', // 1
    fontSize: '1em', // 2
  },

  /**
   * Add the correct font size in all browsers.
   */
  small: {
    fontSize: '80%',
  },

  /**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  /* Embedded content
   ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img: {
    borderStyle: 'none',
  },

  /* Forms
   ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit', // 1
    fontSize: '100%', // 1
    lineHeight: 1.15, // 1
    margin: 0, // 2
  },

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  'button,input': {
    overflow: 'visible',
  },

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  'button, select': {
    // 1
    textTransform: 'none',
  },

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  'button, [type="button"], [type="reset"], [type="submit"]': {
    appearance: 'button',
  },
} as Definition;

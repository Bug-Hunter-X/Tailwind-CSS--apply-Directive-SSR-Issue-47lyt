# Tailwind CSS @apply Directive SSR Issue

This repository demonstrates a bug where Tailwind CSS's `@apply` directive fails to apply styles during server-side rendering (SSR) in a Next.js application. The styles only appear after client-side hydration.

## Bug Description

When using the `@apply` directive within a component rendered on the server, the expected styles are missing upon initial render.  This is because the Tailwind JIT compiler hasn't injected the CSS classes yet.

## Solution

The solution involves ensuring that Tailwind's JIT compiler has processed all necessary CSS before the component is rendered on the server.  This typically involves configuring the framework appropriately to handle Tailwind's build process during SSR.
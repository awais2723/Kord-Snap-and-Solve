/**
 * The `Root` component in TypeScript React sets up the basic HTML structure with meta tags for a web
 * page related to a React Native Expo app called "Kord Snap & Solve".
 * @param {PropsWithChildren}  - The code you provided is a React component named `Root` that serves as
 * the root of your application. It takes in `children` as a prop, which represents the child
 * components that will be rendered within the `<body>` tag.
 */
import type { PropsWithChildren } from 'react';

const Root = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <title>Kord Snap & Solve</title>

      <link rel="canonical" href="https://yourdomain.com" />
      <link rel="image_src" href="https://yourdomain.com/og-image.jpg" />
      <meta name="title" content="Kord Snap & Solve" />
      <meta
        name="description"
        content="Kord Snap & Solve is a React Native Expo app that can easily solve mathematical questions in step by step, by uploading the image of the question to solve"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="the dev environment, yourdomain, developer, web, web developer, react, react-native, react native, expo"
      />
      <meta name="author" content="Kord Snap & Solve" />
      <meta name="publisher" content="Kord Snap & Solve" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:title" content="Kord Snap & Solve" />
      <meta
        property="og:description"
        content="Kord Snap & Solve is a React Native Expo app that can easily solve mathematical questions in step by step, by uploading the image of the question to solve"
      />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yourdomain.com" />
      <meta property="twitter:title" content="Kord Snap & Solve" />
      <meta
        property="twitter:description"
        content="Kord Snap & Solve is a React Native Expo app that can easily solve mathematical questions in step by step, by uploading the image of the question to solve"
      />
      <meta property="twitter:image" content="https://yourdomain.com/og-image.jpg" />
    </head>
    <body>{children}</body>
  </html>
);

export default Root;

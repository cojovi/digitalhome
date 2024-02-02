import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Canonical link for the entire site; consider setting this at the page level instead for accuracy */}
          <link rel="canonical" href="https://www.cojovi.com" />
          
          {/* Existing favicon and manifest links */}
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <!-- HTML Meta Tags -->
          <title>Cojovi Digital Webworx</title>
          <meta name="description" content="We are Your Digital Artisans">
      
          <!-- Facebook Meta Tags -->
          <meta property="og:url" content="https://www.cojovi.com">
          <meta property="og:type" content="website">
          <meta property="og:title" content="Cojovi Digital Webworx">
          <meta property="og:description" content="We are Your Digital Artisans">
          <!--
            You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/{site_text}/{title_text}/{image_url}/og.png
            Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
            For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images
          -->
          <meta property="og:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/cojovi.com/Cojovi%20Digital%20Webworx/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ffefe7a04-c1ae-4e84-b11e-7ca66c3a284a.jpg%3Ftoken%3D-iMBdkNhdYXpVqrMyiUoDqxuzWErHkrfX2hJgkGActY%26height%3D918%26width%3D1066%26expires%3D33242901395/og.png">
      
          <!-- Twitter Meta Tags -->
          <meta name="twitter:card" content="summary_large_image">
          <meta property="twitter:domain" content="cojovi.com">
          <meta property="twitter:url" content="https://www.cojovi.com">
          <meta name="twitter:title" content="Cojovi Digital Webworx">
          <meta name="twitter:description" content="We are Your Digital Artisans">
          <!--
            You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/{site_text}/{title_text}/{image_url}/og.png
            Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
            For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images
          -->
          <meta name="twitter:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/cojovi.com/Cojovi%20Digital%20Webworx/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ffefe7a04-c1ae-4e84-b11e-7ca66c3a284a.jpg%3Ftoken%3D-iMBdkNhdYXpVqrMyiUoDqxuzWErHkrfX2hJgkGActY%26height%3D918%26width%3D1066%26expires%3D33242901395/og.png">
      
          <!-- Meta Tags Generated via https://www.opengraph.xyz -->
          {/* Color mode script for Chakra UI */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

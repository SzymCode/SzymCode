import { ReactElement } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

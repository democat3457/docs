import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="bg-blue antialiased leading-tight">
        <Head />
        <body className="text-white leading-normal bg-gradient-r-green-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
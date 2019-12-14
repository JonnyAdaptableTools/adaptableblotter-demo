import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="ab--theme-light">
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          />
        </Head>
        <body className="">
          <Main key="main" />
          <NextScript />

          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

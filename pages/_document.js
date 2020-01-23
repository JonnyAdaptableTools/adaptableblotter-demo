import Document, { Html, Head, Main, NextScript } from 'next/document';

import '@adaptabletools/adaptable/index.css';

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
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
            rel="stylesheet"
          ></link>
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

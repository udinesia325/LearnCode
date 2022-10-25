import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Amaranth"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
                <script
                    src="https://kit.fontawesome.com/1d385cb44e.js"
                    crossOrigin="anonymous"
                    defer
                ></script>
                <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-fountain@2/tsparticles.preset.fountain.bundle.min.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

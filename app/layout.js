
import Footer from "./components/footer";
import Header from "./components/Header";
import "./globals.css";
// import Head from "next/head";

export const metadata = {
  title: "Lumina Creative",
  description: "Recreate in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Coiny&display=swap" rel="stylesheet" />

        {/* Lightbox CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.5/css/lightbox.css"
          integrity="sha512-DKdRaC0QGJ/kjx0U0TtJNCamKnN4l+wsMdION3GG0WVK6hIoJ1UPHRHeXNiGsXdrmq19JJxgIubb/Z7Og2qJww=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/style.css" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* External Scripts (you can defer them for optimization) */}
        <script src="/style.js" defer></script>

        {/* jQuery (deferred loading for optimization) */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>

        {/* Lightbox JS (deferred loading for optimization) */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.5/js/lightbox.min.js"
          integrity="sha512-KbRFbjA5bwNan6DvPl1ODUolvTTZ/vckssnFhka5cG80JVa5zSlRPCr055xSgU/q6oMIGhZWLhcbgIC0fyw3RQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
        <script src="/script.js" defer></script>
      </head>

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

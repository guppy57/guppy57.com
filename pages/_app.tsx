import "@/styles/globals.css";
import "@/styles/badges.css";
import Script from "next/script";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { DefaultSeo } from "next-seo";

const departureMono = localFont({
  src: [
    {
      path: "../public/fonts/DepartureMono/DepartureMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DepartureMono/DepartureMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DepartureMono/DepartureMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-departuremono",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/fonts/Satoshi-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://kreativeusa.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div className={`${satoshi.variable} ${departureMono.variable}`}>
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | Kreative"
        defaultTitle="Kreative"
        description="Radical starts here."
        canonical={canonicalUrl}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "icon",
            href: "/favicon-32x32.png",
            sizes: "32x32",
          },
          {
            rel: "icon",
            href: "/favicon-16x16.png",
            sizes: "16x16",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#ff5156",
          },
        ]}
        additionalMetaTags={[
          {
            name: "ms-application-TileColor",
            content: "#ff5156",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
        openGraph={{
          url: "https://kreativeusa.com/",
          title: "Kreative",
          description: "Radical starts here.",
          images: [
            {
              url: "/images/horizon-retro-logo.png",
              width: 700,
              height: 700,
              alt: "Kreative Retro Logo",
            },
          ],
        }}
      />

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga4" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <style jsx global>{`
        html {
          font-family: ${satoshi.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}

import type { Metadata } from "next";
import "@/ui/globals.css";
import { ubntu } from "@/ui/font";

import Lines from "@/components/lines";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
export const metadata: Metadata = {
  title: "shkar-portfolio",
  description: "shkar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubntu.className}`}>
        <Lines />
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

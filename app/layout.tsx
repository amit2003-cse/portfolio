"use client";

import "./globals.css";
import LeftCard from "@/components/layout/LeftCard";
import QuickNav from "@/components/layout/QuickNav";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { usePathname } from "next/navigation";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amit Kumar",
  "url": "https://yourportfolio.com",
  "jobTitle": "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChatPage = pathname === "/projects/ai-chatbot";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9SYWGXLF1D`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9SYWGXLF1D', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white w-full m-0 p-0 selection:bg-[#ff6b00] selection:text-white no-scrollbar">
        <SmoothScroll>
          <Toaster
            position="top-right"
            toastOptions={{
              className: "bg-[#1c1c1c] text-white border border-[#333] shadow-none"
            }}
          />
          {!isChatPage && <QuickNav />}

          <main className="flex flex-col lg:flex-row w-full max-w-[100vw] min-h-screen">
            {!isChatPage && (
              <aside className="w-full lg:w-[35%] xl:w-[30%] lg:sticky lg:top-0 lg:h-screen flex justify-center items-center pt-28 pb-10 lg:py-0 px-4 sm:px-6 lg:border-r border-neutral-800 shrink-0 z-10">
                <div className="w-full max-w-[340px] md:max-w-[380px]">
                  <LeftCard />
                </div>
              </aside>
            )}

            <section className={`${isChatPage ? "w-full" : "w-full lg:w-[65%] xl:w-[70%]"} pb-20 lg:pb-0`}>
              {children}
            </section>
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
import "./globals.css";
import LeftCard from "@/components/layout/LeftCard";
import QuickNav from "@/components/layout/QuickNav";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-white w-full m-0 p-0 selection:bg-[#ff6b00] selection:text-white">
        <SmoothScroll>
          <Toaster
            position="top-right"
            toastOptions={{
              className: "bg-[#1c1c1c] text-white border border-[#333] shadow-none"
            }}
          />
          {/* Navbar */}
          <QuickNav />

          {/* Main wrapper, natural document flow */}
          <main className="flex flex-col lg:flex-row w-full max-w-[100vw] min-h-screen">

            {/* LEFT SIDE (Profile Card - Sticky) */}
            <aside className="w-full lg:w-[35%] xl:w-[30%] lg:sticky lg:top-0 lg:h-screen flex justify-center items-center pt-28 pb-10 lg:py-0 px-4 sm:px-6 lg:border-r border-neutral-800 shrink-0 z-10">
              <div className="w-full max-w-[340px] md:max-w-[380px]">
                <LeftCard />
              </div>
            </aside>

            {/* RIGHT SIDE (Scrollable Content mapping to document flow) */}
            <section className="w-full lg:w-[65%] xl:w-[70%] pb-20 lg:pb-0">
              {children}
            </section>

          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
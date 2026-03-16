import "./globals.css";
import LeftCard from "@/components/layout/LeftCard";
import QuickNav from "@/components/layout/QuickNav";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* overflow-x-hidden add kiya taaki horizontal scrolling bilkul band ho jaye */}
      <body className="bg-[#151515] text-white overflow-x-hidden w-full m-0 p-0">
      <Toaster
    position="top-right"
    toastOptions={{
      style: {
        background: "#1c1c1c",
        color: "#fff",
        border: "1px solid #333",
      },
    }}
  />
        {/* Navbar */}
        <QuickNav />

        {/* Main wrapper ko w-full max-w-[100vw] diya hai */}
        <main className="flex flex-col lg:flex-row lg:h-screen w-full max-w-[100vw] overflow-hidden">

          {/* LEFT SIDE (Profile Card) */}
          {/* px-4 ki jagah thodi adjust ki hai mobile ke liye */}
          <aside className="w-full lg:w-[35%] xl:w-[30%] flex justify-center items-center pt-28 pb-10 lg:py-0 px-4 sm:px-6 lg:border-r border-neutral-800 shrink-0 lg:h-screen">
            {/* max-w-[340px] ensure karega ki chote phone par card screen se bahar na jaye */}
            <div className="w-full max-w-[340px] md:max-w-[380px]">
              <LeftCard />
            </div>
          </aside>

          {/* RIGHT SIDE (Scrollable Content) */}
          {/* Right side mein overflow-x-hidden aur overflow-y-auto lagaya hai */}
          <section className="w-full lg:w-[65%] xl:w-[70%] lg:h-screen overflow-x-hidden overflow-y-auto pb-20 lg:pb-0">
            {children}
          </section>

        </main>
      </body>
    </html>
  );
}
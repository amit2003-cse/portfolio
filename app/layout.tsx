import "./globals.css";
import LeftCard from "@/components/layout/LeftCard";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}
) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen overflow-hidden">
        <div className="w-[35%] flex items-center justify-center border-r border-neutral-800">
          <LeftCard />
        </div>
        <div className="w-[65%] overflow-y-scroll">
          {children}
        </div>
        </main>
      </body>
    </html>
  )
}
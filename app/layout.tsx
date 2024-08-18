import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${rubik.className} h-screen w-screen overflow-hidden select-none`}>
        <main className="bg-[#212328] h-full overflow-y-auto flex flex-col justify-between px-5 pt-6 pb-12 sm:p-6">
          {children}
        </main>
      </body>
    </html>
  );
}

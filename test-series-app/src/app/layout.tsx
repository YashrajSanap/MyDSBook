import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestSeries Pro - Advanced Competitive Exam Platform",
  description: "Modern test series platform for competitive exam preparation with AI-powered analytics and futuristic design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Mock user - in real app, this would come from authentication
  const mockUser = {
    name: "John Doe",
    role: "STUDENT"
  };

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950">
          <Navbar user={mockUser} />
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

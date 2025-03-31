import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js AI Chatbot with Infactory API",
  description: "Next.js AI Chatbot with Infactory API: Smarter NYC Taxi Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
     
      >
        {children}
      </body>
    </html>
  );
}

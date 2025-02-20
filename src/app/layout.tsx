import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import GithubLogo from '../../public/GitHub_Logo.png'
import GithubLogoWhite from '../../public/GitHub_Logo_White.png.png'

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dustin Alandzes",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} `}>
        <header>
          <Link href="/"><h1>Dustin Alandzes</h1></Link>
          <nav>
            <Link href="/biography">Biography</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/portfolio">Portfolio</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <a href={"https://github.com/DustinAlandzes"}>
            <Image src={GithubLogo} alt="Github Logo" id={"github-logo"} height={50}/>
          </a>
        </footer>
      </body>
    </html>
  );
}

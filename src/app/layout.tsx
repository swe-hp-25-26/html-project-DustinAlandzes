import type { Metadata } from "next";
import Image from "next/image";
import localFont from 'next/font/local';
import "./globals.css";
import Link from "next/link";
import GithubMarkLogo from '../../public/github-mark.png'
import GithubLogo from '../../public/GitHub_Logo.png'
import LinkedInLogo from '../../public/In-Blue-128@2x.png'

const playfairDisplay = localFont({
  src: '../../public/PlayfairDisplay-VariableFont_wght.ttf'
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
      <body className={`${playfairDisplay.className} `}>
        <header>
          <Link href="/" id={"logo-name"}>
            <h1>Dustin Alandzes 👋</h1>
          </Link>
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
            <Image src={GithubMarkLogo} alt="Github Logo" id={"github-logo"} height={50}/>
            <Image src={LinkedInLogo} alt="LinkedIn Logo" id={"linkedin-logo"} height={50}/>
          </a>
        </footer>
      </body>
    </html>
  );
}

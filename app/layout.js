import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/" >home</Link>
            </li>
            <li>
              <Link href="/posts" >post</Link>
            </li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}

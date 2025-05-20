import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { Sidebar, Header, Pagewrapper } from "../components";
const geist = Geist({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className} >
        <Sidebar></Sidebar>
        <Header></Header>
        <Pagewrapper>{children}</Pagewrapper>
      </body>
    </html>
  );
}

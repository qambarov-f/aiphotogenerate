import "@/styles/reset.css"
import "@/styles/variables.css"
import "@/styles/global.css";

import { mainFont } from "@/libs/fonts";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className="layout">
        {children}
        <Footer />
        <div className="overlay"></div>
      </body>
    </html>
  );
}

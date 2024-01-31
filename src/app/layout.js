import { Footer } from "@/client/layout/Footer";
import { Header } from "@/client/layout/Header";
import "@/styles/global.css";

export const metadata = {
  title: "ZinLab Mockup",
  description: "ZinLab Mockup Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

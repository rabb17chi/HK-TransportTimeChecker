import Footer from "../../components/page-footer/Footer";
import "./globals.css";

export const metadata = {
  title: "香港公共運輸時間查詢工具 | rabb17",
  description: "免費無廣查詢香港公共運輸時間的工具。港鐵/九巴",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

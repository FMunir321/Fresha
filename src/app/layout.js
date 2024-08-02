import { Inter } from "next/font/google";
import "./static/css/bootstrap.min.css";
import "./static/css/icons.min.css";
import "./static/css/app.min.css";
import "./static/css/toastr.min.css";
import MainNavbar from "./MainNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
          {children}
      </body>
    </html>
  );
}

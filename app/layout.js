import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 


export const metadata = {
  title: "Electronics, Cars, Fashion, Collectibles & More | eBayClone.com",
  description: "This is a recreation of eBay to gain more developer skills. Hope you enjoy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}

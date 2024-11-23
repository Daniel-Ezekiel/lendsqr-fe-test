import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import variables from "./sass/variables.module.scss";
import ServiceProvider from "./_components/ServiceProvider";
import { Work_Sans } from "next/font/google";
import AuthProvider from "./_components/AuthProvider";
import PrivateRoute from "./_components/PrivateRoute";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const avenirNextRegular = localFont({
  src: "./fonts/avenir-next/AvenirNextLTPro-Regular.woff",
  variable: "--font-avenir-next-regular",
  weight: "400",
});
const avenirNextBold = localFont({
  src: "./fonts/avenir-next/AvenirNextLTPro-Bold.woff",
  variable: "--font-avenir-next-bold",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Lendsqr Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <PrivateRoute>
        <AuthProvider>
          <ServiceProvider>
            <body
              className={`${workSans.className} ${avenirNextRegular.variable} ${avenirNextBold.variable} ${variables.body} `}
            >
              {children}
            </body>
          </ServiceProvider>
        </AuthProvider>
      </PrivateRoute>
    </html>
  );
}


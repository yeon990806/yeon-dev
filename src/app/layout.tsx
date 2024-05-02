import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import ClientRootConatiner from "@/components/ClientRootContainer";
import BlogFooter from "@/components/BlogFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "YeON.DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard bg-light-background dark:bg-dark-background">
        <ClientRootConatiner>
          <div className="max-w-3xl px-6 mx-auto lg:max-w-6xl lg:px-8">
            <BlogHeader />
              {children}
          </div>
          <BlogFooter />
        </ClientRootConatiner>
      </body>
    </html>
  );
}

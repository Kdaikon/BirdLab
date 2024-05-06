import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        bodyにinterを設定したのですべての子要素に適応される
        antialiased　は必要ではないが　フォントをスムーズにする
      */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const mainFont = localFont({
  src: '../../public/font/Hiragino Kaku Gothic Pro W3.otf',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '헬스 지니',
  description: '나에게 맞는 PT를 간편하게 매칭해주는 헬스케어 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-screen w-screen bg-[#f9f9f9]">
      <body
        className={twMerge(
          `${mainFont.className} ${inter.className}}`,
          'relative m-auto min-h-full w-[500px] bg-white'
        )}
      >
        {children}
      </body>
    </html>
  );
}

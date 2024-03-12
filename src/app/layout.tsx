import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';
import './globals.css';
import ReactQueryClientProvider from './ReactQueryClientProvider';

const mainFont = localFont({
  src: '../../public/font/Hiragino Kaku Gothic Pro W3.otf',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '헬스 지니',
  description: '나에게 맞는 PT를 간편하게 매칭해주는 헬스케어 플랫폼',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko" className="h-screen w-screen bg-[#f9f9f9]">
      <body
        className={twMerge(
          `${mainFont.className} ${inter.className}}`,
          'relative m-auto h-full min-h-full  min-w-[375px] max-w-[500px] bg-white '
        )}
      >
        <ReactQueryClientProvider>
          {children}
          <div id="modal-root" className=" z-40 " />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}

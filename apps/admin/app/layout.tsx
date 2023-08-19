import { Auth } from './auth';
import './global.css';
import { Inter } from 'next/font/google';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = true;

  return (
    <html lang="en" className={inter.className}>
      <body>{loggedIn ? children : <Auth />}</body>
    </html>
  );
}

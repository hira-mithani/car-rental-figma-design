import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Car Rental - Find your perfect ride',
  description: 'Rent your dream car with ease. Wide selection of vehicles for all your needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

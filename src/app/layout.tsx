import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem é você?',
  description: 'Um site feito exclusivamente para meu grande amor!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
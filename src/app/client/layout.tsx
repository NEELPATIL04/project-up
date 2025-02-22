// app/layout.tsx
import type { Metadata } from 'next';
import Sidebar from './clientcomponets/Sidebar';
import Header from './clientcomponets/header';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"suppressHydrationWarning>
      <body>
        <div className="flex h-screen bg-[#0b0c23]">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
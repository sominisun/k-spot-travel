import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import type { Metadata } from 'next';
import { theme } from '@/theme';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'K-SPOT Travel | 한류 콘텐츠 촬영지 투어',
  description: '솔로지옥, 오징어게임, 흑백요리사 등 한류 콘텐츠 촬영지를 방문하는 특별한 여행 패키지',
  keywords: ['한류', 'K-드라마', 'Netflix', '솔로지옥', '오징어게임', '흑백요리사', '한국 여행', '촬영지 투어'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Notifications position="top-right" />
          <Header />
          <main style={{ minHeight: 'calc(100vh - 70px)' }}>
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}

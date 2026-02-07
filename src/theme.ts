import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

// K-Content Travel - Clean White Theme
const primaryBlue: MantineColorsTuple = [
    '#e6f3ff',
    '#cce7ff',
    '#99cfff',
    '#66b7ff',
    '#339eff',
    '#0086ff',
    '#006bcc',
    '#005099',
    '#003566',
    '#001a33',
];

const coralAccent: MantineColorsTuple = [
    '#fff0ed',
    '#ffe1db',
    '#ffc3b7',
    '#ffa593',
    '#ff876f',
    '#ff6b4a',
    '#cc563b',
    '#99402c',
    '#662b1d',
    '#33150f',
];

export const theme = createTheme({
    primaryColor: 'primary',
    colors: {
        primary: primaryBlue,
        coral: coralAccent,
    },
    fontFamily: '"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
    headings: {
        fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
        fontWeight: '700',
    },
    radius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
    },
    shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
        md: '0 4px 12px rgba(0, 0, 0, 0.08)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.10)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.12)',
    },
    other: {
        maxWidth: '1200px',
        transition: 'all 0.2s ease',
    },
});

// Design tokens export
export const tokens = {
    colors: {
        background: '#ffffff',
        surface: '#f8f9fa',
        surfaceHover: '#f1f3f5',
        border: '#e9ecef',
        textPrimary: '#212529',
        textSecondary: '#495057',
        textMuted: '#868e96',
        primary: '#0086ff',
        coral: '#ff6b4a',
        success: '#12b886',
        warning: '#fab005',
    },
    spacing: {
        section: '80px',
        container: '24px',
    },
};

import React, { Children, ReactNode } from 'react';
import { DarkModeProvider, useDarkMode } from '../ThemeProvider';
import { Theme } from '@radix-ui/themes';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <Theme appearance={isDarkMode ? 'dark' : 'light'}>
            {children}
        </Theme>
    );
};

export default Layout;
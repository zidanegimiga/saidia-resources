import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton, Tooltip } from '@radix-ui/themes';
import Head from 'next/head';
import { useDarkMode } from "@/components/ThemeProvider";

export const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <Tooltip className="radix-themes-custom-fonts" content={isDarkMode ? "Switch to light mode" : "Switch to Dark mode"}>
            <IconButton
                size="4"
                variant="ghost"
                color="gray"
                onClick={toggleDarkMode}
            >
                {
                    isDarkMode ? (
                        <SunIcon
                            width="24"
                            height="24"
                        />
                    ) : (
                        <MoonIcon
                            width="24"
                            height="24"
                        />
                    )
                }

            </IconButton>
        </Tooltip>
    );
};
'use client';

import { LucideMoon, LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import { Button } from '../ui/button';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			<LucideMoon className="size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
			<LucideSun className="absolute size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />

			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};

export { ThemeSwitcher };

import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { homePath, ticketsPath } from '@/paths';
import { buttonVariants } from './ui/button';

const Header = () => {
	return (
		<nav className="bg-background/95 supports-backdrop-filter:bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
			<div>
				<Link
					href={homePath()}
					className={buttonVariants({ variant: 'ghost' })}
				>
					<LucideKanban className="size-5" />
					<h1 className="text-lg font-semibold">NextTickets</h1>
				</Link>
			</div>
			<div>
				<Link
					href={ticketsPath()}
					className={buttonVariants({ variant: 'default' })}
				>
					Tickets
				</Link>
			</div>
		</nav>
	);
};

export { Header };

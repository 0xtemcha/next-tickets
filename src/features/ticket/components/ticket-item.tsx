import { LucideArrowUpRightFromSquare } from 'lucide-react';
import Link from 'next/link';
import React, { cloneElement } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ticketPath } from '@/paths';
import { TICKET_ICONS } from '../constants';
import type { Ticket } from '../types';

type TicketItemProps = {
	ticket: Ticket;
	isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
	const detailButton = (
		<Button variant="outline" size="icon" asChild>
			<Link href={ticketPath(ticket.id)}>
				<LucideArrowUpRightFromSquare className="size-4" />
			</Link>
		</Button>
	);
	const statusIcon = TICKET_ICONS[ticket.status];

	return (
		<div
			className={cn('flex w-full gap-x-1', {
				'max-w-[580px]': isDetail,
				'max-w-[420px]': !isDetail,
			})}
		>
			<Card key={ticket.id} className="w-full">
				<CardHeader>
					<CardTitle className="flex items-center gap-x-2">
						<span>{cloneElement(statusIcon, { className: 'size-4' })}</span>
						<h3 className="truncate">{ticket.title}</h3>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<span
						className={cn('whitespace-break-spaces', {
							'line-clamp-3': !isDetail,
						})}
					>
						{ticket.content}
					</span>
				</CardContent>
			</Card>
			{isDetail ? null : (
				<div className="flex flex-col gap-y-1">{detailButton}</div>
			)}
		</div>
	);
};

export { TicketItem };

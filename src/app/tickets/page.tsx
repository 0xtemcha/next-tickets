import {
	LucideCircleCheckBig,
	LucideSquarePen,
	LucideStickyNote,
} from 'lucide-react';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TICKET_ICONS = {
	OPEN: <LucideStickyNote />,
	IN_PROGRESS: <LucideSquarePen />,
	DONE: <LucideCircleCheckBig />,
};

const TicketsPage = () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
				<p className="text-muted-foreground text-sm">
					All your tickets at one place
				</p>
			</div>

			<div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
				{initialTickets.map((ticket) => (
					<Card key={ticket.id} className="w-full max-w-[420px]">
						<CardHeader>
							<CardTitle className="flex items-center gap-x-2">
								<span>{TICKET_ICONS[ticket.status]}</span>
								<h3 className="truncate">{ticket.title}</h3>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<span className="line-clamp-3 whitespace-break-spaces">
								{ticket.content}
							</span>
						</CardContent>
						<CardFooter>
							<Link href={ticketPath(ticket.id)} className="text-sm underline">
								View
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default TicketsPage;

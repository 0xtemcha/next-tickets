import { LucideLoaderCircle } from 'lucide-react';

const Spinner = () => {
	return (
		<div
			role="status"
			className="flex flex-1 flex-col items-center justify-center self-center"
		>
			<LucideLoaderCircle className="size-16 animate-spin" />
		</div>
	);
};

export { Spinner };

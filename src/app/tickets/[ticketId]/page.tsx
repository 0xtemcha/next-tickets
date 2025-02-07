const TicketPage = async ({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) => {
  const { ticketId } = await params;

  return <div>My Ticket: {ticketId}</div>;
};

export default TicketPage;

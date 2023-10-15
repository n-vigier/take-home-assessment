export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className='flex flex-col gap-8'>{children}</section>;
}

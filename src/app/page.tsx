import { data } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h2>Please find links to the different questions below:</h2>
      {data.map((_, i) => (
        <Link key={i} href={'/questions/' + (i + 1)} className='block'>
          Question {i + 1}
        </Link>
      ))}
    </section>
  );
}

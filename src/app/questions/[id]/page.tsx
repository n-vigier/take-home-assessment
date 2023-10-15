import { data } from '@/lib/data';
import Link from 'next/link';
import Question from './Question';
import Reply from './Reply';

type PageProps = {
  params: {
    id: string;
  };
};

export default function QuestionPage({ params }: PageProps) {
  const id = +params.id;
  const { Question: question, Reply: reply } = data[id - 1];

  return (
    <>
      <h2 className='mb-0'>Question {params.id}</h2>
      <Question>{question}</Question>
      <Reply>{reply}</Reply>
      <div className='flex w-full justify-between'>
        {id > 1 && <Link href={'/questions/' + (id - 1)}>Previous</Link>}
        {id < data.length && (
          <Link className='ml-auto' href={'/questions/' + (id + 1)}>
            Next
          </Link>
        )}
      </div>
    </>
  );
}

import { PropsWithChildren } from 'react';

export default function Question({ children }: PropsWithChildren) {
  return (
    <blockquote>
      {children}
    </blockquote>
  );
}

import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const participant = await prisma.participant.findUnique({
    where: {
      id: parseInt(params.id)
    },
  })
  if (!participant) {
    notFound()
  }

  return (
    <main className='px-7 pt-24 text-center'>
      <h1 className='text-5xl font-semibold mb-7'>{participant.name}</h1>
      <p className='max-w-[700px] mx-auto'>{participant.number}</p>
    </main>
  )
}
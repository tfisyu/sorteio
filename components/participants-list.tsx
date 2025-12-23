import prisma from '@/lib/db';
import { Button } from 'antd';
import Link from 'next/link';
import { DeleteButton } from './delete';


export default async function ParticipantsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const participants = await prisma.participant.findMany();

  return (
    <table className='table table-zebra m-auto mt-4'>
      <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
        <tr>
          <th className='py-3 px-6 text-xl'>id</th>
          <th className='py-3 px-6 text-xl'>nome</th>
          <th className='py-3 px-6 text-xl'>ação</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant) => (
          <tr key={participant.id} className='bg-white border-b'>
            <td className='py-3 px-6 text-2xl text-black'>{participant.id}</td>
            <td className='py-3 px-6 text-2xl text-black'>{participant.name}</td>
            <td className='flex flex-row justify-center items-center gap-1 py-3 text-2xl text-black'>
              <Button className='mx-2'>
                <Link href={`/participants/${participant.id}`}>
                  visualizar
                </Link>
              </Button>
              <DeleteButton id={participant.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
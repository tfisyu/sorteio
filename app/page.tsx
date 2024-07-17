import ParticipantsCard from '@/components/card';
import prisma from '@/lib/db';
import { Col, Row } from 'antd';
import { Suspense } from 'react';

export interface participantProps {
  name: string,
  number: string,
}

export default async function Home() {

  await new Promise((resolve) => setTimeout(resolve, 1000))
  const posts = await prisma.participant.findMany()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-4xl md:text-5xl'>tabela de participantes</h1>
      <Suspense fallback='pera ai'>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {posts.map((post) => (
            <Col xl={8} key={post.id} style={{ padding: '8px' }}>
              <ParticipantsCard
                name={post.name}
                number={post.number}
              />
            </Col>
          ))}
        </Row>
      </Suspense>
    </main>
  );
}

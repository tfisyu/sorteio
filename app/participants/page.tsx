import ParticipantsList from '@/components/participants-list'
import { Button } from 'antd'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default async function Participants() {
  return (
    <main className='text-center pt-16 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>todos os participantes</h1>
      <Button style={{ backgroundColor: '#fca5a5', border: 'none', color: 'white' }} size='large'>
        <Link href='add-participant'>adicionar participante</Link>
      </Button>

      <Suspense fallback='pera ai'>
        <ParticipantsList />
      </Suspense>
    </main>
  )
}

'use client'

import { participantProps } from '@/app/page';
import { Card } from 'antd';

export default function ParticipantsCard({ name, number }: participantProps) {
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <Card title={name} >
      <Card.Grid style={gridStyle} hoverable={false}>
        {number}
      </Card.Grid>
    </Card>
  )
}
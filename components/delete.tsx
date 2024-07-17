import { deleteParticipant } from '@/actions/actions'
import { FaTrash } from 'react-icons/fa6'

export const DeleteButton = ({ id }: { id: number }) => {

  const deleteWithId = deleteParticipant.bind(null, id)

  return (
    <form action={deleteWithId}>
      <button>
        <FaTrash />
      </button>
    </form>
  )
}
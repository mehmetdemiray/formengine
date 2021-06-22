import { FC } from 'react'
import { useDrop } from 'react-dnd'

export const Dustbin: FC = () => {
  const [{ canDrop, isOver}, drop] = useDrop(() => ({
    accept: 'grid',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      bune: monitor.getDropResult(),
    }),
  }))

  const isActive = isOver && canDrop

  return (
    <div ref={drop} className="dustbin">
      {isActive ? 'Bırak' : 'Grid yükleyerek başlayabilirsiniz'}
    </div>
  )
}

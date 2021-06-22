import React from 'react'
import { useDrag } from 'react-dnd'

type Props = {
  title: string
}

interface DropResult {
  name: string
}

export const SideBlock:React.FC<Props> = ({title}) => {
  const [, drag] = useDrag(() => ({
    type: 'box',
    item: { title },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        alert(`You dropped ${item.title} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div ref={drag} role="box" className="side-block">
      {title}
    </div>
  )
}

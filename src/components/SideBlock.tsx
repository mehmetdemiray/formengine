import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateForm } from '../redux/actions';

type Props = {
  title: string,
  type: string
}

interface DropResult {
  name: string
}

export const SideBlock:React.FC<Props> = ({title, type}) => {
  const dispatch = useDispatch();
  const [, drag] = useDrag(() => ({
    type: type,
    item: { title },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        alert(`You dropped ${item.title} into ${dropResult.name}!`)
        dispatch(updateForm({
          Key: 1,
          Name: title,
          Type: type
        }))
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div ref={drag} className="side-block">
      {title}
    </div>
  )
}

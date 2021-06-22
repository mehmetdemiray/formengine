import { FC, memo } from 'react'
import { Layout } from '../../layout';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Dustbin } from './dustbin'
import { Box } from './box'

export const GeneratorPage = () => {
	return (
		<Layout>
			<DndProvider backend={HTML5Backend}>
				<Container />
			</DndProvider>
		</Layout>
	);
};

const Container: FC = memo(function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
    </div>
  )
})

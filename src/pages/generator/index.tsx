import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from '../../layout';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Dustbin } from './dustbin'
import { FormState } from '../../redux/formReducer';

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
	const FormData = useSelector<FormState, FormState["form"]>((state) => state.form)
  return (
    <div className="dustbin-outer">
			{FormData.map((form) => 
				form.Name + "/"
			)}
      <Dustbin />
    </div>
  )
})

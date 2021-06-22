import { Link } from 'react-router-dom';
import { SideBlock } from '../components/SideBlock';
import Logo from './../assets/img/apsengine.svg';
import Wheel from './../assets/img/wheel.svg';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const SidebarLeft = () => {
	return (
		<div className="sidebar-left">
			<Link to="/" className="logo">
				<img src={Logo} alt="React Logo" height={36} />
				<img className="_abs" src={Wheel} alt="wheel" height={16} />
			</Link>
			<div className="sidebar-left_inline">
			<DndProvider backend={HTML5Backend}>
				<SideBlock title="Grid" />
				<SideBlock title="Form" />
				<SideBlock title="Input" />
				<SideBlock title="Textarea" />
				<SideBlock title="Select" />
				<SideBlock title="Button" />
				<SideBlock title="Radio" />
			</DndProvider>
			</div>
		</div>
	);
};

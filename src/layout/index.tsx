import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SidebarLeft } from "./SidebarLeft";
import { SidebarRight } from "./SidebarRight";

type Props = {
	children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({children}) => {
	return (
		<div id="page">
			<SidebarLeft />
			<div className="container-fluid">
				<Header />
				<div className="container-inline">
					<Content>{children}</Content>
					<SidebarRight />
				</div>
				<Footer />
			</div>
		</div>
	);
};

import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<Link to="/">Generator</Link>
			<Link to="/form-test">Form Test</Link>
			<Link to="/changelog">Changelog</Link>
		</header>
	);
};

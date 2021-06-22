import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import { FormPage } from './pages/form';
import { GeneratorPage } from './pages/generator';
import { ChangelogPage } from './pages/changelog';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={GeneratorPage} /> {/*}Generator Page{*/}
        <Route path="/form-test" exact component={FormPage} /> {/*}Forms Page{*/}
				<Route path="/changelog" exact component={ChangelogPage} /> {/*}Forms Page{*/}
			</Switch>
		</Router>
	);
}

export default App;

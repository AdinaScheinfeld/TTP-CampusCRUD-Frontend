import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, CampusPage, AddCampus } from './components/index';

const HomePageComponent = () => (<HomePage />);

const CampusPageComponent = () => (<CampusPage />);

const AddCampusComponent = () => (<AddCampus />);

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' render={ HomePageComponent } />
        <Route exact path='/CampusPage' render={ CampusPageComponent } />
        <Route exact path='/AddCampus' render={ AddCampusComponent }/>
      </Switch>
    </Router>
  );
}

export default App;

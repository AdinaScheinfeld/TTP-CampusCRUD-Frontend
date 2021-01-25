import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, CampusPage, AddCampus, StudentsPage } from './components/index';

const HomePageComponent = () => (<HomePage />);

const CampusPageComponent = () => (<CampusPage />);
const AddCampusComponent = () => (<AddCampus />);

const StudentsPageComponent =() => (<StudentsPage />);

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' render={ HomePageComponent } />
        <Route exact path='/CampusPage' render={ CampusPageComponent } />
        <Route exact path='/StudentsPage' render={ StudentsPageComponent } />
        <Route exact path='/AddCampus' render={ AddCampusComponent }/>
      </Switch>
    </Router>
  );
}

export default App;

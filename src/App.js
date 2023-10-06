import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import HeaderOrganism from './components/organisms/HeaderOrganism';


function App() {

  return (
    <Router>
      <div className="container">
        <HeaderOrganism title="Student Portal" />
      </div>
    </Router>
  );
}

export default App;


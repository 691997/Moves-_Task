import Login from './login';
import Nav from './nav';
import Home from './home';
import ShowMovie from './show_movie';
import Register from './Register';
import "./inputs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fav from './fav_page';
import { BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Nav />
      <Route path="/favoret" component={Fav} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/showmovi/:id" component={ShowMovie} exact/> 
    </Router >
  );
}

export default App;

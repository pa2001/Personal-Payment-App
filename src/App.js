import './App.css';
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Error from './pages/Error';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Services}></Route>
        <Route component={Error}></Route>
      <Home/>
      </Switch> 
    </div>
  );
}

export default App;

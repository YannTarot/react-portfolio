import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
// import  { Project1, Project2, Project3, Project4, Project5 } from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


function App() {
  return (
<>

  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/competences" component={Knowledges} />
      <Route path="/portfolio" component={Portfolio} />
      {/* <Route path="/projet-2" component={Project2} />
      <Route path="/projet-3" component={Project3} />
      <Route path="/projet-4" component={Project4} />
      <Route path="/projet-5" component={Project5} /> */}
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
</>
  );
}

export default App;

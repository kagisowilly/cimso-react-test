import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookingUnits from "./BookingUnits";
import UnitTypes from "./UnitTypes";
import Sidebar from "./Sidebar";
import NotFound from './NotFound';

function App() {
  return (
    <Router >
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="App dashboard">
          <header className="App-header">
          <Switch>
            <Route exact path="/">
               <UnitTypes />
            </Route>
           <Route path="/bookingunits">
            <BookingUnits />
           </Route>            
           <Route path="*">
            <NotFound />
           </Route>            
          </Switch>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;

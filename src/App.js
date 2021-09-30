import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Categoty from "./components/Category/Categoty";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import NotFound from "./components/NotFound/NotFound";
import Restautant from "./components/Restaurant/Restautant";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/restautant'>
                        <Restautant />
                    </Route>
                    <Route path='/category'>
                        <Categoty />
                    </Route>
                    <Route path='/meal/:mealId'>
                        <FoodDetails />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

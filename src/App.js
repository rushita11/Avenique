import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./Container/About";
import Home from "./Container/Home";
import Product from "./Container/Product";
import Contact from "./Container/Contact";
import { createStore } from "redux";
function App() {
          const store =  configureStore();
  return (
    <>
      < Header />
      <Switch >
      <Route exact path={"/"} component={Home}/>
      <Route  path={"/about"} component={About}/>
      <Route path={"/product"} component={Product}/>
      <Route path={"/contact"} component={Contact}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

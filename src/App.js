import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./Container/About";
import Home from "./Container/Home";
import Product from "./Container/Product";
function App() {
  return (
    <>
      < Header />
      <Switch >
      <Route exact path={"/"} component={Home}/>
      <Route  path={"/about"} component={About}/>
      <Route path={"/product"} component={Product}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserInfo } from "./store/actions/authAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("t")) dispatch(fetchUserInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

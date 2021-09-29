import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Checkout from "./views/Checkout";
import { fetchUserInfo } from "./store/actions/authAction";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("t")) dispatch(fetchUserInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/signup" component={Signup} redirectPath="/" />
        <AuthRoute path="/signin" component={Signin} redirectPath="/" />
        <PrivateRoute
          path="/checkout/:id"
          component={Checkout}
          redirectPath="/signin"
        />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

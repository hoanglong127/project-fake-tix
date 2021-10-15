import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Loading from "./components/Loading";
import { fetchUserInfo } from "./store/actions/authAction";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";

const Home = lazy(() => import("./views/Home"));
const Detail = lazy(() => import("./views/Detail"));
const Signin = lazy(() => import("./views/Signin"));
const Signup = lazy(() => import("./views/Signup"));
const Checkout = lazy(() => import("./views/Checkout"));
const Profile = lazy(() => import("./views/Profile"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("t")) dispatch(fetchUserInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <AuthRoute path="/signup" component={Signup} redirectPath="/" />
          <AuthRoute path="/signin" component={Signin} redirectPath="/" />
          <PrivateRoute
            path="/checkout/:id"
            component={Checkout}
            redirectPath="/signin"
          />
          <PrivateRoute
            path="/profile"
            component={Profile}
            redirectPath="/signin"
          />
          <Route path="/detail/:id" component={Detail} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

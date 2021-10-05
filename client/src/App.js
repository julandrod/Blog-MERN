import { useSelector } from "react-redux";
import { selectUserState } from "./store/userSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  HomePage,
  RegisterPage,
  PostsPage,
  LoginPage,
  ContactPage,
  SinglePostPage,
  AboutPage,
  WritePage,
} from "./pages";

function App() {
  const { userInfo } = useSelector(selectUserState);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/register">
          {!userInfo ? <RegisterPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!userInfo ? <LoginPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/posts">
          <PostsPage />
        </Route>
        <Route exact path="/posts/:id">
          <SinglePostPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/write">
          {userInfo ? <WritePage /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

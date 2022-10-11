import "./App.css";
import Header from "./components/Header/Header";

import Post from "./components/formPost/Post";
import AboutUser from "./components/aboutUser/AboutUser";
import DoubleCard from "./components/UI/DoubleCard";
import Activities from "./components/activities/Activities";
import MainRoute from "./pages/MainRoute";
import { Route, Switch, Redirect } from "react-router-dom";
import WhatsNew from "./pages/WhatsNew";
import Layout from "./components/Layout/layout";
import Replies from "./pages/Replies";
import { useSelector } from "react-redux";
function App() {
  const posts = useSelector(state => state.post.posts)
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <MainRoute />
        </Route>

        <Route path="/home/whats-new" exact>
          <WhatsNew />
        </Route>
      <Route  path='/home/replies/:twibId'>
        <Replies data={posts}/>
      </Route>
      </Switch>
      </Layout>
     
    </div>
  );
}

export default App;

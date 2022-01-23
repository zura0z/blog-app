import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import ManagePostPage from "./Pages/ManagePostPage/ManagePostPage";
import PostPage from "./Pages/PostPage/PostPage";
import PostsPage from "./Pages/PostsPage/PostsPage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          path={["/", "/posts", "/posts?search=:query"]}
          exact
          component={PostsPage}
        />
        <Route
          path="/post/:action(add|edit)/:id?"
          exact
          component={ManagePostPage}
        />
        <Route path="/post/:id" exact component={PostPage} />
      </Switch>
    </>
  );
};

export default App;

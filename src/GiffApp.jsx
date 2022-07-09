import { useContext, useEffect } from "react";
import Home from "./pages/Home";
import { GiphyContext } from "./context/GiphyContext";
import { Switch, Route } from "wouter";
import pages from "./pages/pages";

const GiffApp = () => {
  const { searchCategory } = useContext(GiphyContext);

  useEffect(() => {
    searchCategory();
  }, []);

  return (
    <Switch>
      {pages.map((page, index) => {
        return (
          <Route key={index} path={page.path} component={page.component} />
        );
      })}
    </Switch>
  );
};

export default GiffApp;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Stocklist from "./components/Stocklist";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import Login from "./components/Login";
import Media from "react-media";
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      {loading ? (
        <Loading>
          <PuffLoader color="#b2b2ff" loading={loading} size={70} />
        </Loading>
      ) : (
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <AppBody>
                <Header />
                <Media query="(min-width: 100px)" render={() => <Sidebar />} />

                <Switch>
                  <Route path="/Watchlist">
                    <Watchlist />
                  </Route>

                  <Route path="/Stocklist">
                    <Stocklist />
                  </Route>

                  <Route path="/Orders">
                    <Home />
                  </Route>

                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </AppBody>
            </>
          )}
        </Router>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--main-color1);
  display: grid;
  place-items: center;
  border: 1px black solid;
`;

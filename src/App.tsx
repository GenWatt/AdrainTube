import React, { useState, useEffect } from "react";
import Videos from "./components/Video/Videos";
import Settings from "./components/Settings/Settings";
import PlayVideo from "./components/PlayVideo/PlayVideo";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";

import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/Themes";
import GlobalStyle from "./themes/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./duck/allReducers";
import { ISettings } from "./duck/types/settingsTypes";
import allActions from "./duck/allActions";

const App = (): JSX.Element => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const { searchResult, settings } = useSelector((state: RootState) => state);
  const { errors } = searchResult;
  const { darkMode } = settings.settings;

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const userSettings = localStorage.getItem("userSettings");
    if (userSettings) {
      const parsedSettings: ISettings = JSON.parse(userSettings);

      dispatch(allActions.settingsActions.setSettings(parsedSettings));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <section className="container">
        <AnimatePresence>{errors.error.error && <Error />}</AnimatePresence>
        <Header setShowSettings={setShowSettings} showSettings={showSettings} />
        <AnimatePresence>{showSettings && <Settings />}</AnimatePresence>
        <Switch location={location}>
          <Route component={PlayVideo} path="/:videoId" />
          <Route component={Videos} path="/" />
          <Redirect to="/" />
        </Switch>
      </section>
    </ThemeProvider>
  );
};

export default App;

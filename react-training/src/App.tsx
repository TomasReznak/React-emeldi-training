import React from "react";
import Home from "./view/page/Home";
import Header from "./view/components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store/configure-store";
import HookForm from "./view/page/HookForm";
import Hooks from "./view/page/Hooks";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path={'/hooks'} element={<Hooks/>}/>
              <Route path={'/hookform'} element={<HookForm/>}/>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

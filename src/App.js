import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Header } from "./layouts/Header";
import { Sidebar } from "./pages/Sidebar";
import { Feed } from "./pages/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />

        <Feed />

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

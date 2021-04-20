import React from 'react';

// Components
import { Header } from "./components/Layouts/Header"
import { Content } from './components/Layouts/Content';

export const App = () => {
  return (
    <div className="App">
      <h1>React App</h1>
      <Header/>
      <Content/>
    </div>
  );
}

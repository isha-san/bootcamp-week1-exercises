
import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Weather from 'containers/Weather.js';
import TodoList from 'components/TodoList.js';


function App() {
  <BrowserRouter>
  <Switch>
    <Route path="/todos">
      <TodoList />
    </Route>
  </Switch>
  <Switch>
    <Route path="/weather">
      <Weather />
    </Route>
  </Switch>
</BrowserRouter>
}

export default App;

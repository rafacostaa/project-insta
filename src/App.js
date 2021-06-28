import Card from "./components/Card/Card";
import Toolbar from "./components/Toolbar/Toolbar";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Toolbar />
        <div className="container-card">
          <Card />
        </div>
      </div>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import store from "./redux/store";
import RouterFile from "./components/router/router";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterFile />
    </div>
    </Provider>
  );
}

export default App;

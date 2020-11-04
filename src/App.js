import { Provider } from "react-redux";
import "./App.scss";
import store from "./store";
import Navigation from "./navigations";
import { toast } from "react-toastify";

toast.configure({
  position: "top-right"
});

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

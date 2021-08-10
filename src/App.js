import { Provider } from "react-redux";
import "./App.css";
import Body from "./containers/Body/Body";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <div className="col-md-4">
            <div className="TodoApp">
              <Header />
              <Body />
            </div>
              <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

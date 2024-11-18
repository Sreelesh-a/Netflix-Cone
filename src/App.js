import Body from "./components/Body";
import { Provider } from "react-redux";
// import {store} from "./utils/appStore";
import { persistor, store } from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <div className="bg-black">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <Body />
      </PersistGate>
      </Provider>
      
    </div>
  );
}

export default App;

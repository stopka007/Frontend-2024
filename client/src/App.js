import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Detail from "./Detail/Detail";
import UserProvider from "./Users/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Detail />
      </UserProvider>
    </div>
  );
}

export default App;

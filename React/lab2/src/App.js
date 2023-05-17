import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Routing/Users";
import Header from "./Components/Routing/Header";
import UserDetails from "./Components/Routing/UserDetails";
import Profile from "./Components/Routing/Profile";
import Error from "./Components/Routing/Error";

function App() {
  return (
    <div>
      <div className="allComp">
        <BrowserRouter>
          <div className="header">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

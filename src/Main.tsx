import "./App.css";
import UserList from "./layout/UserList";

const Main = () => {

  return (
    <div className="main">
      <div className="container">
        <h1 className="title-heading">Onboarding Tracker</h1>
          <UserList/>
      </div>
    </div>
  );
};

export default Main;

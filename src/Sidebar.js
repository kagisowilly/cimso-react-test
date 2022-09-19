import { Link } from "react-router-dom";

const  Sidebar= () => {
    return (
      <div className="sidebar-content">
        <div className="sidebar-div">
          <div className="title text-center">
            <h1>NAVBAR</h1>
          </div>
          <div className="menu-items">
            <Link className="side-btn" to="/">
              Unit Types
            </Link>
            <Link className="side-btn" to="/bookingunits">
              Booking Units
            </Link>
          </div>
        </div>
      </div>
    );
}
 
export default Sidebar;
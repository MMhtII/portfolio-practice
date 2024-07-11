import "./topbar.scss";

import Mail from "@mui/icons-material/Mail";
import { Person } from "@mui/icons-material";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          {/* item container */}
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 554 90 87</span>
          </div>
          {/* item container */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Mohammad Safarov@ gmail.com</span>
          </div>

         
        </div>
        <div className="right">this is rgith</div>
      </div>
    </div>
  );
}

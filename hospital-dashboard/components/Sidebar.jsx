import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Hospital Menu</h2>

      <ul>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/patients">
            Patients
          </Link>
        </li>

        <li>
          <Link to="/doctors">
            Doctors
          </Link>
        </li>

      </ul>
    </div>
  );
}

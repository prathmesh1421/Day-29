import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPatients } from "../redux/slices/patientSlices";

export default function Patients() {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(
    (state) => state.patients
  );

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <div className="card">
      <h2>Patients</h2>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              Name
            </th>

            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              Age
            </th>
          </tr>
        </thead>

        <tbody>
          {list.slice(0, 8).map((patient, index) => (
            <tr key={patient.id || index}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {patient.name}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {20 + index}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { Alert, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import AlertAccordion from "./AlertAccordion";
import ProgressBar from "./Progressbar";

const UserDetails = () => {
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    let fetchErrors = async () => {
      await fetch("http://127.0.0.1:8000/health_status/ME4KC202FF8008973")
        .then((response) => {
          if (response.ok) return response.json();
          else if (response.status === 404) {
            return {};
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .then((responsejson) => {
          setErrors(responsejson);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchErrors();
  }, []);

  return (
    <Paper elevation={6} className="container" sx={{ minHeight: 430 }}>
      {errors.length !== 0 ? (
        <>
          <ProgressBar percent={errors.length}></ProgressBar>
          <Paper elevation={1} sx={{ maxHeight: 200, overflow: "auto" }}>
            {errors.map((val) => {
              return (
                <AlertAccordion
                  key={val.id}
                  message={val.message}
                  threat={val.threat}
                />
              );
            })}
          </Paper>
        </>
      ) : (
        <>
          <ProgressBar percent={0} />
          <Alert variant="outlined">All Systems Operational</Alert>
        </>
      )}
    </Paper>
  );
};
export default UserDetails;

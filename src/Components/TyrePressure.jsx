import { Paper, Typography } from "@mui/material";
import ProgressBarLinear from "./Progress";
import PressureIcon from "@mui/icons-material/Speed";


const TyrePressure = (props) => {
  let color = "success";
  if (props.value < 25) {
    color = "error";
  } else if (props.value < 32) {
    color = "warning";
  }

  return (
    <Paper elevation={1}>
      <Typography variant="h6" component="h6" sx={{ paddingLeft: "15px" }}>
        <PressureIcon
          sx={{
            fontSize: "2rem",
            color: "#F5D779",
            position: "relative",
            top: "0.5rem",
          }}
        />{" "}
        {props.value + "psi"}
      </Typography>

      <ProgressBarLinear color={color} percent={props.percent} />

      <Typography variant="body2" className="parameter-label">
        {"Tyre " + props.number}{" "}
      </Typography>

    </Paper>
  );
};
export default TyrePressure;

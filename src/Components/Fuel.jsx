import { Paper, Typography } from "@mui/material";
import ProgressBarLinear from "./Progress";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

const Fuel = (props) => {
  return (
    <Paper elevation={1}>
      <Typography variant="h6" component="h6" sx={{ paddingLeft: "15px" }}>
        <LocalGasStationIcon
          sx={{
            fontSize: "2rem",
            color: "#04C998",
            position: "relative",
            top: "0.5rem",
          }}
        />{" "}
        {props.fuel}L
      </Typography>
      <ProgressBarLinear percent={props.percentage} color="success" />
      <Typography variant="body2" className="parameter-label">
        Fuel Level
      </Typography>
    </Paper>
  );
};
export default Fuel;

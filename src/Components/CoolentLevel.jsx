import { Paper, Typography } from "@mui/material";
import ProgressBarLinear from "./Progress";
import CoolentIcon from "@mui/icons-material/Opacity";


const CoolentLevel = (props) => {
  return (
    <Paper elevation={1}>
      <Typography variant="h6" component="h6" sx={{ paddingLeft: "15px" }}>
        <CoolentIcon
          sx={{
            fontSize: "2rem",
            color: "#66EBEB",
            position: "relative",
            top: "0.5rem",
          }}
        />{" "}
        12L
      </Typography>
      <ProgressBarLinear percent={70} color="secondary" />
      <Typography variant="body2" className="parameter-label">
        Coolent Level
      </Typography>
    </Paper>
  );
};
export default CoolentLevel;

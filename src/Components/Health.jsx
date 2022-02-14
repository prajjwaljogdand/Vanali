import { Paper } from "@mui/material";
import AlertAccordion from "./AlertAccordion";
import ProgressBar from "./Progressbar";

const UserDetails = (props) => {
  return (
    <Paper
      elevation={6}
      className="container"
      sx={{ minHeight: 430 }}
    >
      <ProgressBar percent="40"></ProgressBar>
      <Paper
        elevation={1}
        sx={{  maxHeight: 200, overflow: "auto" }}
      >
        <AlertAccordion />
        <AlertAccordion />
      </Paper>
    </Paper>
  );
};
export default UserDetails;

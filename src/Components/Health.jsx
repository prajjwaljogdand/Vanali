import { Paper } from "@mui/material";
import AlertAccordion from "./AlertAccordion";
import ProgressBar from "./Progressbar";

const UserDetails = (props) => {
  return (
    <Paper
      elevation={6}
      className="container"
      sx={{ maxWidth: 400, minHeight: 430 }}
    >
      <ProgressBar percent="40"></ProgressBar>
      <Paper
        elevation={1}
        sx={{ maxWidth: 400, maxHeight: 200, overflow: "auto" }}
      >
        <AlertAccordion />
        <AlertAccordion />
      </Paper>
    </Paper>
  );
};
export default UserDetails;

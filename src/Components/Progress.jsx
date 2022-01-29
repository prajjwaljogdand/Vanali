import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', mr: 1 }}>
        <LinearProgress color={props.color} sx={{marginLeft: 2, width : '100%'}} variant="determinate" {...props} />
      </div>
      <Box sx={{ minWidth: 35, position : 'relative', top : '19px' , left : '-15px'}}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBarLinear (props) {
 

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel color={props.color} value={props.percent} />
    </Box>
  );
}

const ProgressBar = (props) => {
  const percentage = 629;

  let color, color2;
  let health = "Issues";

  if (props.percent === 0) {
    color = "#01DEA7";
    color2 = "#00A3FF";
  } else {
    color2 = "#C82E0D";
    color = "#F5D779";
  }

  return (
    <>
      <div className="progress">
        <li data-name={health} data-percent={props.percent}>
          <svg viewBox="-10 -10 220 220">
            <g fill="none" stroke-width="20" transform="translate(100,100)">
              <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
              <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
              <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
              <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
              <path
                d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                stroke="url(#cl5)"
              />
              <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
            </g>
          </svg>
          <svg viewBox="-10 -10 220 220">
            <path
              d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
              stroke-dashoffset={percentage}
            ></path>
          </svg>
        </li>
      </div>

      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="cl1"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stop-color={color2} />
            <stop offset="100%" stop-color={color} />
          </linearGradient>
          <linearGradient
            id="cl2"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stop-color={color} />
            <stop offset="100%" stop-color={color} />
          </linearGradient>
          <linearGradient
            id="cl3"
            gradientUnits="objectBoundingBox"
            x1="1"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stop-color={color} />
            <stop offset="100%" stop-color={color} />
          </linearGradient>
          <linearGradient
            id="cl4"
            gradientUnits="objectBoundingBox"
            x1="1"
            y1="1"
            x2="0"
            y2="0"
          >
            <stop stop-color={color} />
            <stop offset="100%" stop-color={color2} />
          </linearGradient>
          <linearGradient
            id="cl5"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="1"
            x2="0"
            y2="0"
          >
            <stop stop-color={color2} />
            <stop offset="100%" stop-color={color2} />
          </linearGradient>
          <linearGradient
            id="cl6"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop stop-color={color2} />
            <stop offset="100%" stop-color={color2} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
export default ProgressBar;

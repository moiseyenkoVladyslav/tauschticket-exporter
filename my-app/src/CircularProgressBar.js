import Button from "@mui/material/Button";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useState } from "react";
function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function TriggerProgressBar() {
  const [downloading, setDownloading] = useState(false);

  const buttonToggle = document.getElementsByClassName("button-toggle");
  function handleClick() {
    setDownloading(true);

    setTimeout(() => {
      console.log(`Timeout worked`);
      setDownloading(false);
    }, 3000);

    // if (index === false) {
    //   setIndex(true);
    //   console.log("Setted to true");
    // } else {
    //   setIndex(false);
    //   setTimeout(() => {
    //     console.log(`Timeout worked`);
    //     setIndex(true);
    //   }, 3000);
    //   console.log("Setted to false");
    // }
  }
  return (
    <div className="parcing-animation">
      {/* <Button
        className={`button-toggle` + (index === false ? " display-none" : "")}
        onClick={handleClick}
      >
        Start Parcing
      </Button> */}
      <Button className="button-toggle" onClick={handleClick} type="submit">
        Start parcing
      </Button>
      <div className="parcing-animation_cirle">
        {downloading && <CircularIndeterminate />}
      </div>
    </div>
  );
}

export default TriggerProgressBar;

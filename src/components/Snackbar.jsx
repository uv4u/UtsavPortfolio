import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";

import { Alert } from "@mui/material";

// const makeToast = () => {
//   setState(true);
// };

export default function SnackbarCmp({ state, setState, message, severity }) {
  const handleClose = () => {
    setState(false);
  };

  return (
    <Snackbar
      open={state}
      onClose={handleClose}
      TransitionComponent={Fade}
      autoHideDuration={3000}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

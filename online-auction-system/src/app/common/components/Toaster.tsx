import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface ToasterProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

Alert.displayName = "Alert";

const Toaster: React.FC<ToasterProps> = ({ message, open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;

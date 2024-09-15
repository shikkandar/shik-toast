import { useContext } from "react";
import "./Toast.css";
import { ToastContext } from "../context/ToastContext";

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  position: Exclude<
    `${VerticalPosition}-${HorizontalPosition}`,
    "center-center"
  >;
};

export const Toast = ({ position }: ToastProps) => {
  const { errorMessage,successMessage,warningMessage } = useContext(ToastContext) || {};

  return (
    <>
      {errorMessage && (
        <div className={`${position} toast-error`}>
          {errorMessage}
          <div className="error-line"></div>
        </div>
      )}
      {successMessage && (
        <div className={`${position} toast-success`}>
          {successMessage}
          <div className="success-line"></div>
        </div>
      )}
      {warningMessage && (
        <div className={`${position} toast-warning`}>
          {warningMessage}
          <div className="warning-line"></div>
        </div>
      )}
    </>
  );
};

import { useContext, useState } from "react";
import { ToastContext } from "./context/ToastContext";
import { Toast } from "./templateLiterals/Tost";
import { CustomInput } from "./html/Input";


type ToastPosition = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "center-left" | "center-right";

export const Container2 = () => {
  const toast = useContext(ToastContext);
  const [toastMessage, setToastMessage] = useState("Welcome Shik-Toast");
  const [toastType, setToastType] = useState("error");
  const [toastPosition, setToastPosition] = useState<ToastPosition>("top-center");

  const handleClick = () => {
    if (toastType === "error") {
      toast?.error(toastMessage);
    } else if (toastType === "success") {
      toast?.success(toastMessage);
    } else if (toastType === "warning") {
      toast?.warning(toastMessage);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const position: ToastPosition[] = [
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center",
    "center-left",
    "center-right",
  ];

  return (
    <div>
      <Toast position={toastPosition} />
      <form onSubmit={handleSubmit} className="form">
        <CustomInput
          placeholder="Toast Message"
          value={toastMessage}
          onChange={(e) => setToastMessage(e.target.value)}
        />
        <select
          value={toastType}
          onChange={(e) => setToastType(e.target.value)}
        >
          <option value="error">Error</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
        </select>

        <select
          value={toastPosition}
          onChange={(e) => setToastPosition(e.target.value as ToastPosition)}
        >
          {position.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleClick}>
          Click Toast
        </button>
      </form>
    </div>
  );
};

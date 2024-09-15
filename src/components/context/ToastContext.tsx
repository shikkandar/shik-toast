import { createContext, useState, ReactNode, FC } from "react";


type ToastType = 'error' | 'success' | 'warning';
type ToastMessage = string | null;

type ToastContextType = {
  error: (message: string) => void;
  success: (message: string) => void;
  warning: (message: string) => void;
  successMessage: ToastMessage;
  errorMessage: ToastMessage;
  warningMessage: ToastMessage;
};

type ToastContextProviderProps = {
  children: ReactNode;
};

export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastContextProvider: FC<ToastContextProviderProps> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<ToastMessage>(null);
  const [successMessage, setSuccessMessage] = useState<ToastMessage>(null);
  const [warningMessage, setWarningMessage] = useState<ToastMessage>(null);

  const showToast = (type: ToastType, message: string) => {
    if (type === 'error') setErrorMessage(message);
    if (type === 'success') setSuccessMessage(message);
    if (type === 'warning') setWarningMessage(message);

    setTimeout(() => {
      if (type === 'error') setErrorMessage(null);
      if (type === 'success') setSuccessMessage(null);
      if (type === 'warning') setWarningMessage(null);
    }, 1000);
  };

  const error = (message: string) => showToast('error', message);
  const success = (message: string) => showToast('success', message);
  const warning = (message: string) => showToast('warning', message);

  return (
    <ToastContext.Provider
      value={{
        error,
        warning,
        success,
        errorMessage,
        warningMessage,
        successMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

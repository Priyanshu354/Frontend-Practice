import { createContext, useContext, useState } from "react";
import Toast from "./Toast";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState([]);

  const addToast = (message, type = "info", position = "top-left") => {
    const id = Date.now();
    setToast((prev) => [{ id, message, type, position }, ...prev]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToast((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Top Left */}
      <div className="fixed top-10 left-10 p-4 z-50">
        {toast
          .filter((t) => t.position === "top-left")
          .map((t) => (
            <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
          ))}
      </div>

      {/* Top Right */}
      <div className="fixed top-10 right-10 p-4 z-50">
        {toast
          .filter((t) => t.position === "top-right")
          .map((t) => (
            <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
          ))}
      </div>

      {/* Bottom Left */}
      <div className="fixed bottom-10 left-10 p-4 z-50">
        {toast
          .filter((t) => t.position === "bottom-left")
          .map((t) => (
            <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
          ))}
      </div>

      {/* Bottom Right */}
      <div className="fixed bottom-10 right-10 p-4 z-50">
        {toast
          .filter((t) => t.position === "bottom-right")
          .map((t) => (
            <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
          ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};

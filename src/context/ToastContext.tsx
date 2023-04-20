import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface TostProviderProps {
  children: React.ReactNode;
}
export const TostProvider = ({ children }: TostProviderProps) => {
  return (
    <div>
      {children}
      <ToastContainer
        icon={false}
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        theme="colored"
        transition={Slide}
        pauseOnFocusLoss={false}
      />
    </div>
  );
};

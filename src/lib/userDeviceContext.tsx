import { createContext, useContext } from "react";
import { useWidthSize } from "./useDeviceWidth";

interface contextProps {
  isMobile: boolean;
}

const CheckUserWidth = createContext<contextProps>({ isMobile: true });

export const CheckUserWidth_Provider = ({ children }: { children: any }) => {
  const { isMobile } = useWidthSize();
  return (
    <CheckUserWidth.Provider
      value={{
        isMobile: isMobile,
      }}
    >
      {children}
    </CheckUserWidth.Provider>
  );
};

export const useCheckUserWidth = () => {
  return useContext(CheckUserWidth);
};

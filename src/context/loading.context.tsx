import LoadingPage from "@/components/loading-page";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

import * as React from "react";

type FCC<P = {}> = FC<PropsWithChildren<P>>;

export type LoadingPageContextType = {
  onClose(): void;
  onOpen(): void;
};
export const LoadingPageContext = createContext<LoadingPageContextType>({
  onClose: () => {},
  onOpen: () => {},
});

const LoadingPageProvider: FCC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return (
    <LoadingPageContext.Provider
      value={{
        onClose: onClose,
        onOpen: onOpen,
      }}
    >
      <LoadingPage isOpen={isOpen} onClose={onClose} />
      {children}
    </LoadingPageContext.Provider>
  );
};
export default LoadingPageProvider;

export const useLoadingPageContext = () => useContext(LoadingPageContext);

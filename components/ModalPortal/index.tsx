import { ReactNode, useContext, FC } from "react";
import { createPortal } from "react-dom";
import { ModalWindowContext } from "../../contexes/ModalWindow";

export type ModalPortalProps = {
  children: ReactNode;
};

export const ModalPortal: FC<ModalPortalProps> = ({ children }) => {
  const { containerRef, isOpen } = useContext(ModalWindowContext);

  if (!isOpen) {
    return null;
  }

  return createPortal(children, containerRef?.current);
};

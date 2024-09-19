"use client";

import "./styles.scss";

export type TaskModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: TaskModalProps) => {
  return (
    <>
      <div className="overlay" />
      <div className="task-modal">
        {children}
      </div>
    </>
  );
};

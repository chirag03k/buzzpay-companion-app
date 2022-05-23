import { FC, ReactNode } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-bluewood rounded-3xl p-6">{children}</div>
);

import { FC, ReactNode } from "react";

export const VerticalRhythmContainer: FC<{ children: ReactNode }> = ({
  children,
}) => <div className="mt-6">{children}</div>;

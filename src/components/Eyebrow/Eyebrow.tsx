/**
 * Lifted from react userApp
 */

import { FC } from "react";

export const Eyebrow: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <div
    className={`text-2xs mb-2 font-bold uppercase tracking-widest ${
      className || ""
    }`}
  >
    {text}
  </div>
);

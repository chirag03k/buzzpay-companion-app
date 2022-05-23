import React, { FC } from "react";
/**
 * From Userapp
 */
export const Nav: FC<{
  leftButton?: React.ReactElement;
  rightButton?: React.ReactElement;
}> = ({ leftButton = <></>, rightButton = <></> }) => (
  <div className="text-dolly flex items-center justify-between py-4 px-6 font-black">
    <div className="flex h-6 w-6 items-center justify-center">{leftButton}</div>
    <div className="flex items-center">
      <img
        src="/assets/icons/BuzzPay-logo.png"
        alt="BuzzPay Logo"
        className="h-6 w-6"
        loading="eager"
      />
      <div className="ml-2">BuzzPay</div>
    </div>
    <div className="flex h-6 w-6 items-center justify-center">
      {rightButton}
    </div>
  </div>
);

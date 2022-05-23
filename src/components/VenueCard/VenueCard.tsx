/**
 * Lifted from react userApp
 */

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { venueState } from "../../states/atoms";
import { Card } from "../Card";
import { Eyebrow } from "../Eyebrow";

export const VenueCard: FC = () => {
  const { name, logoImageUrl } = useRecoilValue(venueState);

  return (
    <Card>
      <div className="flex items-center">
        <div className="grow pr-4">
          <Eyebrow text="VENUE" />
          <h2>{name}</h2>
        </div>
        <img src={logoImageUrl} alt="MANSION ON RUSH Logo" className="w-14" />
      </div>
    </Card>
  );
};

import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { Nav } from "../components/Nav";
import { VenueCard } from "../components/VenueCard";
import { VerticalRhythmContainer } from "../components/VerticalRhythmContainer";
import { venueState } from "../states/atoms";

export const Standard: FC<{ body: React.ReactElement }> = ({ body }) => {
  const venue = useRecoilValue(venueState);
  return (
    <>
      <div className="w-full p-4 bg-outer-space">
        <main
          role="main"
          className="w-full flex flex-col content-center justify-center"
        >
          <div className="w-full sm:w-1/2 lg:w-1/2 rounded-xl m-auto">
            <div className="bg-outer-space fixed max-w-5xl top-0 z-30 w-full bg-opacity-40 backdrop-blur-md backdrop-filter">
              <Nav />
            </div>

            <VerticalRhythmContainer>
              <div className="text-white pt-16">
                <VenueCard />
              </div>
            </VerticalRhythmContainer>

            <VerticalRhythmContainer>{body}</VerticalRhythmContainer>

            {/*Footer*/}
            <div className="w-full content-center text-center justify-center text-white bg-outer-space py-6">
              <p className="content-center">Copyright BuzzPay Inc. 2022</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

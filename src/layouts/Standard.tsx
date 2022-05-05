import React, {FC} from 'react';

/**
 * This is not the same as Standard in the buzzpay-master app
 * Rather, this is the standard layout for the companion app,
 * meant for viewing on a larger screen to audit orders
 */

export const Standard: FC<{body: React.ReactElement;}> = ({body}) => {
    return (
        <>
        <div className="container">

            <div className="row pt-3">

                {/* Venue Name */}
                <div className="col-12 text-center">
                    <h1>Test Bar 1</h1>
                </div>

                
            </div>

            <div className="row">
                {body}
            </div>

        </div>
        </>
    );
}
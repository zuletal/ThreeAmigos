import React from "react";
const Train = ({
    height,
    width,
    frontWindow,
    sideWindows,
    headlights,
    track,
    main1,
    main2,
    stroke,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height || "500"}
            width={width || "500"}
            viewBox="0 0 500 500"
            stroke={stroke || "none"}>
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop
                        offset="40%"
                        style={{
                            stopColor: main1 || "black",
                            stopOpacity: "1",
                        }}
                    />
                    <stop
                        offset="100%"
                        style={{ stopColor: main2 || "black", stopOpacity: "1" }}
                    />
                </linearGradient>
            </defs>
            <g transform="matrix(1.65,0,0,1.977,-1209,-61)">
                <g>
                    <path
                        fill="url(#grad1)"
                        d="m1009 214h-231c-11 0-24-17-24-28 0-19 1-38 1-56 3-21 11-40 19-59 2-4 5-8 10-8h83c8 3 16 6 19 15 24 59 72 87 126 97v36c0 1-2 3-3 3z"
                    />
                    <path
                        d="m770 114h105c3 0 4-6 2-9-3-10-8-30-13-30h-81c-5 0-10 20-15 30-1 4 0 9 2 9z"
                        fill={frontWindow || "#fff"}
                    />
                </g>
                <g fill={headlights || "#ffff00"}>
                    <path
                        id="lamp"
                        d="m787 164c0 6-4 10-9 10s-10-4-10-10c0-5 5-9 10-9s9 4 9 9z"
                    />
                    <path
                        transform="translate(80)"
                        d="m787 164c0 6-4 10-9 10s-10-4-10-10c0-5 5-9 10-9s9 4 9 9z"
                    />
                </g>
                {/* side windows */}
                <g fill={sideWindows || "#fff"} fill-rule="oddeven">
                    <path d="m913 136v35l-16-8c-1-14-2-29-2-44 6 5 13 13 18 17z" />
                    <path d="m937 155l1 27-16-7v-31c7 6 10 7 15 11z" />
                    <path d="m945 160v24c5 2 10 3 15 4v-22l-15-6z" />
                    <path d="m966 169v21c4 1 8 2 12 2v-20l-12-3z" />
                    <path d="m984 174v19c3 1 7 1 10 1v-18l-10-2z" />
                    <path d="m999 177v18l8 1v-18l-8-1z" />
                </g>
                {/* track */}
                <path
                    fill={track || "black"}
                    d="m754 229h20v-10h30v10h44v-10h164v10c-46 1-93 3-118 14h-140v-14z"
                />
            </g>
        </svg>
    );
};
export default Train;

import React from "react";

export const Spinner = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <svg
        xmlSpace="preserve"
        viewBox="0 0 100 100"
        y="0"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        id="圖層_1"
        version="1.1"
        width="200"
        height="200"
        style={{
          margin: "initial",
          display: "block",
          shapeRendering: "auto",
        }}
        preserveAspectRatio="xMidYMid"
      >
        <g
          className="ldl-scale"
          style={{
            transformOrigin: "50% 50%",
            animation: "breath 1.2s ease-in-out infinite",
          }}
        >
          <g className="ldl-ani">
            <g className="ldl-layer">
              <g className="ldl-ani">
                <path
                  d="M50 44.429v32.13"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="5"
                  stroke="#333"
                  fill="none"
                  style={{ strokeWidth: 5, stroke: "rgb(122, 79, 163)" }}
                ></path>
              </g>
            </g>
            <g className="ldl-layer">
              <g className="ldl-ani">
                <g>
                  <g className="ldl-layer">
                    <g className="ldl-ani">
                      <path
                        fill="#849b87"
                        d="M50 94.907a6 6 0 0 1-6-6V69.814a6 6 0 0 1 12 0v19.093a6 6 0 0 1-6 6z"
                        style={{ strokeWidth: 1, fill: "rgb(99, 75, 122)" }}
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g className="ldl-layer">
              <circle
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeWidth="5"
                stroke="#333"
                fill="#a0c8d7"
                r="24.008"
                cy="32.1"
                cx="50"
                style={{
                  strokeWidth: 5,
                  fill: "rgb(207, 163, 229)",
                  stroke: "rgb(122, 79, 163)",
                }}
              ></circle>
            </g>
            <g className="ldl-layer">
              <path
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="3.893"
                stroke="#fff"
                fill="none"
                d="M41.4 18.7a16.95 16.95 0 0 1 9.1-2.632"
                style={{ strokeWidth: "3.893", stroke: "rgb(255, 255, 255)" }}
              ></path>
            </g>
            <g className="ldl-layer">
              <path
                strokeMiterlimit="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="3.893"
                stroke="#fff"
                fill="none"
                d="M35.346 25.317c.312-.607.66-1.193 1.041-1.755"
                style={{ strokeWidth: "3.893", stroke: "rgb(255, 255, 255)" }}
              ></path>
            </g>
            <metadata xmlns:d="https://loading.io/stock/"></metadata>
          </g>
        </g>
      </svg>
      <style>
        {`
          @keyframes breath {
            0% {
              transform: rotate(331deg) scale(0.8);
            }
            50% {
              transform: rotate(331deg) scale(0.85);
            }
            100% {
              transform: rotate(331deg) scale(0.8);
            }
          }
        `}
      </style>
    </div>
  );
};

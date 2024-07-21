import React from "react";

const HexagonRow: React.FC = () => {
  const hexagonWidth = 67;
  const hexagonHeight = 78;

  return (
    <svg
      width={hexagonWidth * 5 + 1}
      height={hexagonHeight}
      viewBox={`0 0 ${hexagonWidth * 5 + 1} ${hexagonHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {[0, 1, 2, 3, 4].map((index) => (
          <path
            key={index}
            d={`M${hexagonWidth / 2} 0L${hexagonWidth} ${hexagonHeight / 4}V${(3 * hexagonHeight) / 4}L${
              hexagonWidth / 2
            } ${hexagonHeight}L0 ${(3 * hexagonHeight) / 4}V${hexagonHeight / 4}Z`}
            fill={index % 2 === 0 ? "#FFD700" : "#000000"}
            transform={`translate(${index * hexagonWidth})`}
          />
        ))}
      </g>
    </svg>
  );
};

export default HexagonRow;

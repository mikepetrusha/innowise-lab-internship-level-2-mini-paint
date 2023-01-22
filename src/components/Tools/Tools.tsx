import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import PenIcon from "../../asserts/PenIcon";
import LineIcon from "../../asserts/LineIcon";
import RectangleIcon from "../../asserts/RectangleIcon";
import CircleIcon from "../../asserts/CircleIcon";
import ColorPickIcon from "../../asserts/ColorPickIcon";
import SizeIcon from "../../asserts/SizeIcon";
import { ITools } from "./ITools";
import "./Tools.css";

export default function Tools({
  color,
  width,
  setColor,
  setWidth,
  setTool,
}: ITools) {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const handleSetWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value);
  };

  const handleSetPen = () => {
    setTool("pen");
    setActiveButton("pen");
  };

  const handleSetLine = () => {
    setTool("line");
    setActiveButton("line");
  };

  const handleSetCircle = () => {
    setTool("circle");
    setActiveButton("circle");
  };

  const handleSetRectangle = () => {
    setTool("rectangle");
    setActiveButton("rectangle");
  };

  return (
    <div className="tools">
      <ul className="tool-list">
        <li>
          <button className="tool-item tooltip" type="submit">
            <input
              className="pen-width tooltip-item"
              type="range"
              value={width}
              onChange={handleSetWidth}
              min="5"
              max="50"
              step="5"
            />
            <SizeIcon width="2em" height="2em" />
          </button>
        </li>
        <li>
          <button className="tool-item tooltip" type="submit">
            <HexColorPicker
              className="tooltip-item"
              color={color}
              onChange={setColor}
            />
            <ColorPickIcon width="2em" height="2em" />
          </button>
        </li>
        <li>
          <button
            onClick={handleSetPen}
            className={`tool-item ${activeButton === "pen" ? "active" : ""}`}
            type="submit"
          >
            <PenIcon width="2em" height="2em" />
          </button>
        </li>
        <li>
          <button
            onClick={handleSetLine}
            className={`tool-item ${activeButton === "line" ? "active" : ""}`}
            type="submit"
          >
            <LineIcon width="2em" height="2em" />
          </button>
        </li>
        <li>
          <button
            onClick={handleSetRectangle}
            className={`tool-item ${
              activeButton === "rectangle" ? "active" : ""
            }`}
            type="submit"
          >
            <RectangleIcon width="2em" height="2em" />
          </button>
        </li>
        <li>
          <button
            onClick={handleSetCircle}
            className={`tool-item ${activeButton === "circle" ? "active" : ""}`}
            type="submit"
          >
            <CircleIcon width="2em" height="2em" />
          </button>
        </li>
      </ul>
    </div>
  );
}

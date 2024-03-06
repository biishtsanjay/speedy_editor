"use client";
import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import { imageDownload } from "../utils";
import { IoMdDownload } from "react-icons/io";

const Editor = () => {
  const ref = useRef(null);

  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(26);
  const [color, setColor] = useState("#000000");
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);

  const styles = {
    position: "relative",
    display: image ? "inline-block" : "null",
    maxWidth: "40rem",
    maxHeight: "40rem",
  };

  const textStyle = {
    position: "absolute",
    top: `${positionY}%`,
    left: `${positionX}%`,
    fontSize: `${fontSize}px`,
    color: color,
    fontWeight: "bold",
  };

  const handleImageUpload = (e) => setImage(e.target.files[0]);

  const downloadImage = () => {
    imageDownload(ref);
  };

  return (
    <div className="flex justify-around align-middle mt-[2rem] ml-[1rem] md:flex">
      <div className="flex flex-col text-center">
        {!image ? (
          <Image
            alt="user_dummy_photo"
            width="400"
            height="400"
            src="https://via.placeholder.com/400"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <div ref={ref} style={styles}>
            <img
              src={URL.createObjectURL(image)}
              alt="user_dummy_photo"
              // width="0"
              // height="0"
              // sizes="100vw"
              className="w-full h-auto"
            />
            <div style={textStyle}>{text}</div>
          </div>
        )}
        <div>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageUpload}
            className="m-[1rem] file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-secondary" onClick={downloadImage}>
          Download
          <IoMdDownload className="h-5 w-5" />
        </button>
      </div>
      <div className="w-[400px]">
        <div className="flex justify-between p-4 items-center">
          <label htmlFor="text">Text:</label>
          <input
            className="input input-bordered input-primary max-w-xs "
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-4 items-center">
          <label htmlFor="fontSize">Font Size:</label>
          <input
            className="input input-bordered input-primary max-w-xs "
            id="fontSize"
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-4 items-center">
          <label htmlFor="color">Color:</label>
          <input
            className="input input-bordered input-primary max-w-xs w-[220px] "
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-4 items-center">
          <label htmlFor="positionX">Position X (%):</label>
          <input
            className="input input-bordered input-primary max-w-xs "
            id="positionX"
            type="number"
            value={positionX}
            onChange={(e) => setPositionX(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-4 items-center">
          <label htmlFor="positionY">Position Y (%):</label>
          <input
            className="input input-bordered input-primary max-w-xs"
            id="positionY"
            type="number"
            value={positionY}
            onChange={(e) => setPositionY(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;

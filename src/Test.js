import React, { useState } from "react";

function Test() {
  const [images, setImages] = useState([]);
  const handleMultipleImages = (evnt) => {
    console.log(images);
    const selectedFiles = Array.from(evnt.target.files);
    setImages((prevImages) => [
      ...prevImages,
      ...selectedFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  return (
    <div className="Test">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleMultipleImages} multiple />
      <div className="flex">
        {images.map((url, index) => {
          return (
            <div key={index} className="col-sm-1">
              <div className="card">
                <img src={url} className="w-[200px] h-[200px] " alt="test" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Test;

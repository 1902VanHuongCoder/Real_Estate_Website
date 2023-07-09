import React from "react";
import { useUploadFile } from "dex-react-file-upload";
const UploadFile = () => {
  const { handleChange, fileData, handleOnDrop } = useUploadFile({
    handleError(props) {
      console.log(props);
    },
    multiple: true,
    maxFile: 4,
    maxfileSize: 1500,
  });

  console.log(fileData);
  return (
    <div>
      <h1>Up load your image</h1>

      <div
        data-type="file4"
        onDrop={handleOnDrop}
        onDragOver={(event) => event.preventDefault()}
        style={{ border: "1px solid black", width: "500px", height: "500px" }}
      >
        {fileData?.file4 ? (
          <div>
            {fileData.file4.map((item, i) => {
              return (
                <div key={i}>
                  <img
                    src={item.blob}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div data-type="file4">
            <label>Choose your file or drag and drop here</label>
            <input type="file" name="file4" onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;

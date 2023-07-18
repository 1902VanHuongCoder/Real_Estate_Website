import React, { useState } from "react";
import { useUploadFile } from "dex-react-file-upload";
import { storage } from "../../firebase_setup/firebase";
import { AiFillFileAdd } from "react-icons/ai";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const UploadImage = ({ setUrl }) => {
  const { handleChange, fileData, handleOnDrop } = useUploadFile({
    handleError(props) {
      console.log(props);
    },
    multiple: true,
    maxFile: 4,
    maxfileSize: 1500,
  });

  const [image, setImage] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      // check if file isn't empty, will set image for image state
      setImage(e.target.files[0]);
    }
  };


  const upload = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `/products/${image.name}`); // create reference to storage in products folder
    const uploadTask = uploadBytesResumable(storageRef, image); // upload image to storage

    uploadTask.on(
      //keep tracking upload process to display nescessary informations
      "state_changed",
      (snapshot) => {
        // return percent of completed upload
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(percent);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setUrl(url);
        });
      }
    );
  };
  return (
    <div>
      <label>6. Upload your image: </label>
      <button onClick={upload}>Upload</button>

      <div
        data-type="file4"
        onDrop={handleOnDrop}
        onDragOver={(event) => event.preventDefault()}
        className="w-full border-dashed border-2 border-slate-500 mt-5 h-fit p-3"
      >
        {fileData?.file4 ? (
          <div className="flex p-4 gap-4">
            {fileData.file4.map((item, i) => {
              return (
                <div key={i} className="border border-solid border-slate-600 w-fit flex flex-col items-center justify-center p-2">
                  <img
                    src={item.blob}
                    width={100}
                    height={100}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div data-type="file4" className="flex items-center justify-center min-h-[200px]">
            <label className="flex items-center justify-center gap-2 flex-col">
              {" "}
              <div className="flex items-center justify-center gap-2">
              <span>
                <AiFillFileAdd className="text-2xl"/>
              </span>
              <span> Drag and drop here</span>
              </div>
              <p data-type="file4">
              <input name="file4" type="file" onChange={handleChange} />
              </p>
    
            </label>
          </div>
        )}
        {fileData?.file4 && (
            <p
              data-type="file4"
            >
              <input name="file4" type="file" onChange={handleChange} />
              Select Image or drag and drop image here!
            </p>
          )}
      </div>
    </div>
  );
};

export default UploadImage;

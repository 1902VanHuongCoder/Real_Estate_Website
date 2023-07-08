import React, { useState } from "react";
import { storage } from "../../firebase_setup/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const UploadImage = ({ setUrl }) => {
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
      <label>
        Upload your image: <input type="file" onChange={handleImage} />
      </label>
      <button onClick={upload}>Upload</button>
    </div>
  );
};

export default UploadImage;

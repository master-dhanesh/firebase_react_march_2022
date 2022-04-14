import React, { useEffect, useState } from "react";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "./firebase";

const App = () => {
  const UploadAvatar = (e) => {
    const imagename =
      Date.now() + "." + e.target.files[0].name.split(".").at(-1);
    const storageRef = ref(storage, imagename);
    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        console.log(url);
      });
    });
  };

  const ShowImages = () => {
    const listRef = ref(storage);
    listAll(listRef).then((res) => {
      res.items.forEach((itemRef) => {
        // console.log(itemRef);
        getDownloadURL(itemRef).then((url) => {
          console.log(url);
        });
      });
    });
  };

  const DeleteImages = () => {
    const listRef = ref(storage);
    listAll(listRef).then((res) => {
      res.items.forEach((itemRef) => {
        deleteObject(itemRef).then(() => {
          console.log("deleted");
        });
      });
    });
  };

  const UploadFile = (e) => {};

  return (
    <div className="container mt-5">
      <form onSubmit={UploadFile}>
        <h3>Upload avatar</h3>
        <input
          name="avatar"
          onChange={UploadAvatar}
          type="file"
          placeholder="Upload"
        />{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <button onClick={ShowImages}>Show All Images</button>
      <button onClick={DeleteImages}>Delete All Images</button>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { saveImage, postImage } from '../../../api/Api';

const AddImage = () => {
  const [selectedFile, setSelectedFile] = useState({});

  const onChangeHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const onClickHandler = async () => {
    const data = new FormData();
    data.append('file', selectedFile);
    const image = {
      name: selectedFile.name
    };
    try {
      await saveImage(data);
      await postImage(image);
    } catch (error) {
      alert("Erreur du post de l'image");
    }
  };

  return (
    <div className="App">
      <form>
        <label>Upload Your File </label>
        <input
          type="file"
          name="file"
          onChange={onChangeHandler}
          multiple="true"
        />
      </form>
      <button
        type="button"
        className="btn btn-success btn-block"
        onClick={onClickHandler}
      >
        Upload
      </button>
    </div>
  );
};

export default AddImage;

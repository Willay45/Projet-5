import React, { useState, useEffect } from 'react';
import { getTag, postProduct, saveProduct } from '../../../api/Api';

const AddProduct = () => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [tags, setTags] = useState([]);
  const [idTags] = useState([]);

  const onChangeHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const createProduct = async event => {
    event.preventDefault();
    const data = new FormData();
    data.append('file', selectedFile);
    const product = {
      name,
      quantity,
      description,
      url: selectedFile.name
    };
    try {
      await saveProduct(data);
      await postProduct(product, idTags);
    } catch (error) {
      alert('Error du post');
    }
  };

  useEffect(() => {
    (async () => {
      setTags(await getTag());
    })();
  }, []);

  return (
    <div>
      <form onSubmit={createProduct}>
        <label htmlFor="name">Nom</label>
        <input
          type="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="quantity">Quantiter</label>
        <input
          type="number"
          value={quantity}
          onChange={event => setQuantity(event.target.value)}
        />

        <label>Upload Your File </label>
        <input
          type="file"
          name="file"
          onChange={onChangeHandler}
          multiple="true"
        />

        <label htmlFor="text">Description</label>
        <textarea
          name="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        {tags
          ? tags.map(tag => (
              <span>
                <label htmlFor="tag">{tag.name}</label>
                <input
                  type="checkbox"
                  value={tag.id}
                  onClick={event => idTags.push(event.target.value)}
                />
              </span>
            ))
          : null}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;

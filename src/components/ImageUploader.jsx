import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  layouts,
  buttons,
  basicInputs,
  useInput,
} from "../styles/themeHandler";
import styled from "styled-components";

function ImageUploader({ callback = "", initialOBJ = "" }) {
  const description = useInput();
  const date = useInput();
  const [ImageName, setImageName] = useState();
  const FurtherCiting = useInput();
  const originalUrl = useInput();



  const handleChange = (e) => {
    let data = new FormData();
    data.append("image", e.target.files[0]);
    axios
      .post(window.apiUrl+"single", data)
      .then((res) => {
        setImageName(res.data.filename);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () =>
  {
    if (callback = '')
    {
      const ThisJSON ={
        ImageName: ImageName,
        description: description.value,
        originalUrl: originalUrl,
        Date: date ,
        FurtherCiting: FurtherCiting,
      }

    }

  }

  return (
    <ImageUploaderContainer>
      <h1> Image Uploader</h1>
      <div className="seperator"></div>
      <label>upload your Image</label>
      <basicInputs.TextNumber
        type="file"
        accept=".png .jpg .jpeg"
        name="image"
        onChange={handleChange}
        />
      <label>If possible enter an Image Url</label>
      <basicInputs.TextNumber
        value={originalUrl.value}
        onChange={originalUrl.onChange}
      />
      <label>Enter the Date you researched the Image</label>
      <basicInputs.TextNumber value={date.value} onChange={date.onChange} />
      <label>Enter further Citing information</label>
      <basicInputs.TextNumber
        value={FurtherCiting.value}
        onChange={FurtherCiting.onChange}
      />
      <label>Give a title to your Image</label>
      <div className="seperator"></div>
      <label>Enter a Description</label>

      <basicInputs.TextNumber
        value={description.value}
        onChange={description.onChange}
      />
    </ImageUploaderContainer>
  );
}

export default ImageUploader;

const ImageUploaderContainer = styled(layouts.ContainerSolid)`
flex-wrap: wrap;
input{
  width: 45%;
  break-after: always;
}
`;

import React from "react";
import Cropper from "react-easy-crop";

function Crop({ obj }) {
  const { image, onCropComplete, zoom, crop, setCrop, setZoom } = obj;
  return (
    <div className={"crop-container"}>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        cropShape="round"
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
}

export default Crop;

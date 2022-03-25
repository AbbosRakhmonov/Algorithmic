import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import Cropper from "react-easy-crop";

function ImgModal({
  newImage,
  zoom,
  onCropComplete,
  setCrop,
  crop,
  setZoom,
  imgModalVisible,
  toggleModal,
  handleClickSave,
}) {
  return (
    <Modal isOpen={imgModalVisible} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Your new image</ModalHeader>
      <ModalBody style={{ height: 300 }}>
        <Cropper
          image={newImage}
          crop={crop}
          zoom={zoom}
          cropShape="round"
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={handleClickSave}>
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default ImgModal;

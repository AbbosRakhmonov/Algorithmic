import React, { useState, useCallback } from "react";
import { Input, Label } from "reactstrap";
import "./for_profile.scss";
import { IoCamera } from "react-icons/io5";
import { useSelector } from "react-redux";
import getCroppedImg from "../../getCroppedImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgModal from "../../ImgModal";

function Profile() {
  const { given_name, unique_name, image } = useSelector(
    (state) => state.login.user
  );
  const [newImage, setNewImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imgModalVisible, setImgModalVisible] = useState(false);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (
      e.target.files.length > 0 &&
      file.type.includes("image") &&
      file.size < 3145728
    ) {
      const image = e.target.files[0];
      const url = URL.createObjectURL(image);
      setNewImage(url);
      setImgModalVisible(true);
    } else {
      toast.warn(`Please select image and size must be less than 3 mb`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickSave = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        newImage,
        croppedAreaPixels,
        given_name
      );
      setCroppedImageUrl(croppedImage);
    } catch (e) {
      console.error(e);
    }
    toggleModal();
  });

  const toggleModal = () => {
    setImgModalVisible(!imgModalVisible);
    setCroppedImageUrl(null);
  };

  const { isLoading } = useSelector((state) => state.login);
  return (
    <div className="col-md-12 s-modal-header-bordered">
      <div className={"row profile-container"}>
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center ps-0 py-0">
          <Input
            type="file"
            id={"userImage"}
            onChange={onChangeImage}
            onClick={(e) => (e.target.value = null)}
            accept="image/jpeg, image/png"
          />
          <Label className={"image-container m-0"} for={"userImage"}>
            {!isLoading && image ? (
              <img width={90} height={90} src={image} alt={given_name} />
            ) : (
              <div className="spinner-border text-default" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            <span className="overlay text-center">
              <IoCamera className={"icon"} />
              <p>Edit</p>
            </span>
          </Label>
        </div>
        <div className="col-md-8 py-0 pe-0 d-flex justify-content-center flex-column">
          <h3 className={"fullname"}>{given_name}</h3>
          <p className={"username"}>{unique_name}</p>
        </div>
        {newImage && (
          <ImgModal
            newImage={newImage}
            crop={crop}
            setCrop={setCrop}
            onCropComplete={onCropComplete}
            setZoom={setZoom}
            zoom={zoom}
            imgModalVisible={imgModalVisible}
            toggleModal={toggleModal}
            handleClickSave={handleClickSave}
          />
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Profile;

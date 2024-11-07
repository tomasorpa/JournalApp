import { ImageListItem, ImageList, Dialog } from "@mui/material";
import { useState } from "react";

export const ImageGallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOnClickImage = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleOnCloseImage = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <ImageList sx={{ width: "100%", height: 400 }} cols={2} rowHeight={160}>
        {images.map((image) => (
          <ImageListItem
            key={image}
            onClick={() => handleOnClickImage(image)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="Note Image"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog open={open} onClose={handleOnCloseImage} maxWidth="md">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Full view"
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </Dialog>
    </>
  );
};

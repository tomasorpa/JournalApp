export const fileUpload = async (file) => {
  if (!file) throw new Error("File does not exist");

  const url = "https://api.cloudinary.com/v1_1/de6w3xtrg/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "journalApp");
  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error("Image(s) was nos able to upload");
    const data = await res.json();
    //secure.url is the url of the image that we can put in the backend
    console.log(data.secure_url);
    return data.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};

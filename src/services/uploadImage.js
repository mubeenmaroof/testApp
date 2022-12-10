import { firebase } from "./firebaseConfig";

async function uploadImage(imguri) {
  try {
    const imgBlob = await makeBlob(imguri);

    const userStorageRef = firebase.storage().ref("users/");
    userStorageRef.child("dummyImage").put(imgBlob);
    //.then((response) => {
    //  alert(response);
    //})
    //.catch((error) => {
    //  alert(error);
    //});
  } catch (error) {
    console.log(error);
  }
}
const makeBlob = async (img) => {
  const blobInmaking = await fetch(img);
  const thwBlob = await blobInmaking.blob();
  return thwBlob;
};

export { uploadImage };

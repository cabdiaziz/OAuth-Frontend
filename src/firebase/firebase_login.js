import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";

const provider = new GoogleAuthProvider();

export const loginFirebase = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("token:==", token);
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log("user =", user);
      console.log("accessToken ===", user.accessToken);
    })
    .catch((error) => {
      console.log("error:==", error);
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

import { auth, db, provider, storage } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./actions"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";




// 1- premier logic sign user  in API :
export function signInAPI(){
    return(dispatch) =>{
      signInWithPopup(auth,provider).then((payload) => {
        dispatch(actions.setUser(payload.user))
      }).catch((error) => alert(error.message))// hathi methode eli 3an tari9eha na3mlou login bel google
    };
};

// function if user changed in redux
export function getUserAuth(){
  return(dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}

// if user signOut
export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}


// save deatailes in database :
export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(actions.setLoading(true));
    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadRef = uploadBytesResumable(storageRef, payload.image);
      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          alert(error);
        },
        // save link image in data base (fireStore )
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((downloadURl) => {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              comments: 0,
              video: payload.video,
              description: payload.description,
              shareImg: downloadURl,
            });
          });
          dispatch(actions.setLoading(false));// arete uploading image
        }
      );
    } else if (payload.video) {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(actions.setLoading(false));
    } else {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(actions.setLoading(false));
    }
  };
}


// get Articles by database ( fireStore ) & display in component main.jsx
export function getArticlesAPI() {
  return (dispatch) => {
    let payload;
    const collRef = collection(db, "articles");
    const orderedRef = query(collRef, orderBy("actor.date", "desc"));
    onSnapshot(orderedRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(actions.getArticles(payload));
    });
  };
}
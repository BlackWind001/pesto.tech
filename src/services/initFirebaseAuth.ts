import { getAuth } from "firebase/auth";
import firebaseAppStore from "../stores/firebaseAppStore";
import { FirebaseApp } from "firebase/app";
import firebaseAuthStore from "../stores/firebaseAuthStore";

export default function initFirebaseAuth () {
    const app = <FirebaseApp>firebaseAppStore.firebaseApp;
    const auth = getAuth(app);

    firebaseAuthStore.setFirebaseAuth(auth);

    return auth;
}

import { FirebaseApp } from "firebase/app";

class FirebaseAppStore {
    firebaseApp: (FirebaseApp | null);

    constructor () {
        this.firebaseApp = null;
    }

    setFirebaseApp (obj: FirebaseApp) {
        this.firebaseApp = obj;
    }

}

export default new FirebaseAppStore();

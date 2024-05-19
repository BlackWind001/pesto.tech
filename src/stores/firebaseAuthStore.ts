import { Auth } from "firebase/auth";

class FirebaseAuthStore {
    firebaseAuth: (Auth | null);

    constructor () {
        this.firebaseAuth = null;
    }

    setFirebaseAuth (obj: Auth) {
        this.firebaseAuth = obj;
    }

}

export default new FirebaseAuthStore();

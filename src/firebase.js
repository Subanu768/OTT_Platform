import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "netflix-clone-653a2.firebaseapp.com",
  projectId: "netflix-clone-653a2",
  storageBucket: "netflix-clone-653a2.firebasestorage.app",
  messagingSenderId: "436494556903",
  appId: "1:436494556903:web:991ab6180e4c2aaa580c42",
  measurementId: "G-Z9D3BTJDP4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch(error)  {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const  logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout}
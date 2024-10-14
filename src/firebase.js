import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD28cnvsZkZCCA6-wrFp_X4GuwWBS0VLLI",
  authDomain: "sumanthnagireddi-resources.firebaseapp.com",
  projectId: "sumanthnagireddi-resources",
  storageBucket: "sumanthnagireddi-resources.appspot.com",
  messagingSenderId: "685065184731",
  appId: "1:685065184731:web:44977cc180f4e8e2d833fe",
  measurementId: "G-E5ZVN19NSB"
};

const app = initializeApp(firebaseConfig);

export default app
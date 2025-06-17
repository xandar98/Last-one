import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkvf7CxaWpQpNobDsvH7365n3pGPcgk3Y",
  authDomain: "telecalender-84cd4.firebaseapp.com",
  projectId: "telecalender-84cd4",
  storageBucket: "telecalender-84cd4.appspot.com",
  messagingSenderId: "415227978525",
  appId: "1:415227978525:web:1ac172064cfd498a66f7f4",
  measurementId: "G-XB0CMZKPKG",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

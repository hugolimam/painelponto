import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDkgvwd4ObTIJFkJGwntkac77-PRAoNN_s",
  authDomain: "resolve-ponto-eletronico.firebaseapp.com",
  databaseURL: "https://resolve-ponto-eletronico.firebaseio.com",
  projectId: "resolve-ponto-eletronico",
  storageBucket: "resolve-ponto-eletronico.appspot.com",
  messagingSenderId: "813166767899",
  appId: "1:813166767899:web:5379487ae7818d6982edbe",
  measurementId: "G-HBZYJM4FQN"
};
// Initialize Firebase
export const app = firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

async function signAnonymously() {
  await auth.signInAnonymously();
}

export async function initApp() {
  await signAnonymously();
}

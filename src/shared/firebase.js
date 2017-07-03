import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAP1E8PqGv85m5yE-egnQ-ByZJi8qoR17I",
  authDomain: "fir-react-chat-demo.firebaseapp.com",
  databaseURL: "https://fir-react-chat-demo.firebaseio.com",
  projectId: "fir-react-chat-demo",
  storageBucket: "fir-react-chat-demo.appspot.com",
  messagingSenderId: "42255489944"
};
firebase.initializeApp(config);

export default firebase;
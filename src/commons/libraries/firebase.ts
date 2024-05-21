import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Firestore SDK 추가

const firebaseConfig = {
  apiKey: 'AIzaSyAtbrFegXYdg0_aUX1caoPaD9G796Aq3as',
  authDomain: 'codekat-firebase.firebaseapp.com',
  projectId: 'codekat-firebase',
  storageBucket: 'codekat-firebase.appspot.com',
  messagingSenderId: '492159683210',
  appId: '1:492159683210:web:d29623687afd037070bb73',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Firestore 인스턴스 생성

export { firebaseApp, db }; // Firebase와 Firestore 인스턴스를 내보냅니다.

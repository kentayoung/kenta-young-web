
import { initializeApp } from 'firebase/app';

var firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_SENDER_ID,
	appId: import.meta.env.VITE_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);

export default firebase;

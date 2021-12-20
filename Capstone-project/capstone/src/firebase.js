import { initializeApp } from 'firebase/app';
import { getAuth } from  'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCoXOpzd-AflHArCtsQ-_wWxADvcu9lMLM',
	authDomain: 'capstone-b224e.firebaseapp.com',
	projectId: 'capstone-b224e',
	storageBucket: 'capstone-b224e.appspot.com',
	messagingSenderId: '1066875996389',
	appId: '1:1066875996389:web:4d8f98990179ad3222ec0c',
	measurementId: 'G-CK4SFGJ2HD',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

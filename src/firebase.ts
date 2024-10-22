// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyCSXNcB--aF5REHmaldAhI9MHgQZgccw0A",

  authDomain: "portfolio-1a3d2.firebaseapp.com",

  projectId: "portfolio-1a3d2",

  storageBucket: "portfolio-1a3d2.appspot.com",

  messagingSenderId: "248130925944",

  appId: "1:248130925944:web:e5117999dc6a28494c048d",

  measurementId: "G-54VRXEBL4T"

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const functions = getFunctions(app)

if (import.meta.env.MODE === 'development') {
    connectDatabaseEmulator(database, 'localhost', 9000);
    connectStorageEmulator(storage, 'localhost', 9199);
    connectFunctionsEmulator(functions, 'localhost', 5001);
}

export { database, /*analytics,*/ storage, functions };

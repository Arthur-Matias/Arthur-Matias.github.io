// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyDxPWSpn-t71JvqjMldBrN1bVuDJcqwovs",
  
    authDomain: "blog-fa837.firebaseapp.com",
  
    databaseURL: "https://blog-fa837-default-rtdb.firebaseio.com",
  
    projectId: "blog-fa837",
  
    storageBucket: "blog-fa837.appspot.com",
  
    messagingSenderId: "150129514022",
  
    appId: "1:150129514022:web:a90f18adb0deeff67bf8e7",
  
    measurementId: "G-0BQYEGGDW6"
  
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

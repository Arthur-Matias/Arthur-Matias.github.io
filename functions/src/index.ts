/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import { developmentConfig, productionConfig } from './config';
import * as functions from 'firebase-functions';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config(); 

const nodeConfig = functions.config().node || {};
const nodeEnv = nodeConfig.env || process.env.NODE_ENV || 'development';

const baseConfig = nodeEnv === 'production'
  ? productionConfig
  : developmentConfig;

const apiUrl = baseConfig.apiUrl;

// Example of using apiUrl in your function
export const myFunction = functions.https.onRequest((request, response) => {
  response.send(`API URL is: ${apiUrl}`);
});

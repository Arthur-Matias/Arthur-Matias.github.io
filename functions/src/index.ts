/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { developmentConfig, productionConfig } from './config';
require('dotenv').config();
// Start writing functions
// https://firebase.google.com/docs/functions/typescript



const functions = require('firebase-functions');

// Access your environment variable
const nodeEnv = functions.config().node.env || process.env.NODE_ENV || 'development';

const baseConfig = nodeEnv === 'production'
? productionConfig
: developmentConfig;

const apiUrl = baseConfig.apiUrl;

console.log('Current Environment:', apiUrl);

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

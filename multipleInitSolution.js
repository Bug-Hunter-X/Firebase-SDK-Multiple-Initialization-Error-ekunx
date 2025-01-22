To prevent multiple initializations, check if Firebase has already been initialized before calling `firebase.initializeApp()`. A singleton pattern is also a good solution.

```javascript
// Solution using a singleton pattern
let firebaseApp = null;

function initializeFirebase(config) {
  if (!firebaseApp) {
    firebaseApp = firebase.initializeApp(config);
  }
  return firebaseApp;
}

// Get the initialized app instance
const app = initializeFirebase(firebaseConfig);

// Use the app instance
// ...
```

```javascript
// Solution using conditional initialization
let isInitialized = false;

function initializeFirebase(config) {
  if (!isInitialized) {
    firebase.initializeApp(config);
    isInitialized = true;
  }
}

// Initialize Firebase
initializeFirebase(firebaseConfig);
// ...rest of your code
```
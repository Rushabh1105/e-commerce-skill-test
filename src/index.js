// Import required components
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing styles
import './index.css';
// Importing App Component
import App from './App';
// Importing toast container
import { ToastContainer } from 'react-toastify';
// Import toast styling
import 'react-toastify/dist/ReactToastify.css';
// Import redux modules
import { Provider } from 'react-redux';
// Import redux store
import { store, persistor } from './Redux/Store';
// Import persist gate for app persistancy
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provide the store */}
    <Provider store={store} >
      {/* Provide the persistant storage */}
      <PersistGate persistor={persistor} loading={null}>
        {/* Toast container */}
        <ToastContainer />
        {/* App component */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Import your App component
import Home from './components/Home'; // Import your Home component
import ThankYouPage from './components/ThankYouPage'; // Import ThankYouPage component (optional)
import { Cart } from './components/Cart';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
 // Import Cart component (optional)

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Render Home component for the root path
  },
  {
    path: '/thank-you',
    element: <ThankYouPage />, // Render ThankYouPage component for the /thank-you path
  },
  {
    path: '/cart',
    element: <Cart />, // Render Cart component for the /cart path
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore} >
    <RouterProvider router={appRouter}>
      <App /> {/* Wrap your App component with RouterProvider */}
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
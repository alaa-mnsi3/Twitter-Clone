import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import { Provider } from 'react-redux';
import store,{persistor} from './store'
import {PersistGate} from "redux-persist/integration/react"
i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:["en","ar"],
    // fallbackLng: "en",
    detection:{
      order: ['cookie','htmlTag','path', 'subdomain'],
      caches: ['cookie'],
    },
    backend:{
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react:{ useSuspense : false },
  });

  const loadingMarkup = (
    <div>
      <h3>Loading..</h3>
    </div>
  )


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);



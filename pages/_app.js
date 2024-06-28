// import '../styles/globals.css';
// import { useEffect } from 'react';
// import useThemeStore from '../store/themeStore';

// function MyApp({ Component, pageProps }) {
//   const { theme } = useThemeStore();

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   return <Component {...pageProps} />;
// }

// export default MyApp;

// pages/_app.js

import '../styles/globals.css';
import { useEffect } from 'react';
import useThemeStore from '../store/themeStore';

function MyApp({ Component, pageProps }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <Component {...pageProps} />;
}

export default MyApp;

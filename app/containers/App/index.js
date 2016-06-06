/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Footer from 'components/Footer';
import FirebaseLogo from './images/firebase-logo.png';
import ReactBoilerplateLogo from './images/react-boilerplate-logo.png';
import ReactRouterLogo from './images/react-router-logo.png';
import ReduxLogo from './images/redux-logo.png';
import A from 'components/A';

import styles from './styles.css';

function App(props) {
  return (
    <div className={styles.wrapper}>
      <A className={styles.logoWrapper} href="https://firebase.google.com" target="_blank">
        <Img className={styles.logo} src={FirebaseLogo} alt="Firebase - Logo" />
      </A>
      <A className={styles.logoWrapper} href="https://github.com/reactjs/react-router" target="_blank">
        <Img className={styles.logo} src={ReactRouterLogo} alt="react-router - Logo" />
      </A>
      <A className={styles.logoWrapper} href="https://github.com/reactjs/redux" target="_blank">
        <Img className={styles.logo} src={ReduxLogo} alt="react-boilerplate - Logo" />
      </A>
      <A className={styles.logoWrapper} href="http://www.reactboilerplate.com/" target="_blank">
        <Img className={styles.logo} src={ReactBoilerplateLogo} alt="react-boilerplate - Logo" />
      </A>
      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

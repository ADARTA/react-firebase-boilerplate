/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Button from 'components/Button';

import styles from './styles.css';

export class HomePage extends React.Component {
  /**
   * when the component mounts
   */
  componentDidMount() {}

  /**
   * consider changing this to https://facebook.github.io/react/docs/shallow-compare.html
   */
  shouldComponentUpdate = shouldPureComponentUpdate;

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/features'
   */
  openFeaturesPage = () => {
    this.openRoute('/features');
  };
  /**
   * Changed route to '/ghsearch'
   */
  openGHSearchPage = () => {
    this.openRoute('/ghsearch');
  };

  render() {
    return (
      <article>
        <div>
          <section className={`${styles.textSection} ${styles.centered}`}>
            <H1>React-Redux project Using Firebase</H1>
            <p>A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</p>
          </section>
          <section className={styles.textSection}>
            <H2>Choose a page to view!</H2>
            <Button handleRoute={this.openGHSearchPage}>GitHub Search</Button>
            <Button handleRoute={this.openFeaturesPage}>Features</Button>
          </section>
        </div>
      </article>
      );
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(HomePage);

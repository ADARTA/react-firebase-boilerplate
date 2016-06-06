/**
 * Test the GHSearchPage
 */

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { GHSearchPage } from '../index';
import RepoListItem from 'containers/RepoListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';

describe('<GHSearchPage />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <GHSearchPage loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <GHSearchPage
        loading={false}
        error={{ message: 'Loading failed!' }}
      />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Something went wrong, please try again!')
      ).toBeGreaterThan(-1);
  });

  it('should render the repositories if loading was successful', () => {
    const repos = [{
      owner: {
        login: 'talves',
      },
      html_url: 'https://github.com/adarta/react-firebase-boilerplate',
      name: 'react-firebase-boilerplate',
      open_issues_count: 20,
      full_name: 'adarta/react-firebase-boilerplate',
    }];
    const renderedComponent = shallow(
      <GHSearchPage
        repos={repos}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={repos} component={RepoListItem} />)).toEqual(true);
  });

  it('should link to /features', () => {
    const openRouteSpy = expect.createSpy();

    // Spy on the openRoute method of the GHSearchPage
    const openRoute = (dest) => {
      if (dest === '/features') {
        openRouteSpy();
      }
    };

    const renderedComponent = mount(
      <GHSearchPage loading changeRoute={openRoute} />
    );
    const button = renderedComponent.find('button').at(0);
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });

  it('should link to /', () => {
    const openRouteSpy = expect.createSpy();

    // Spy on the openRoute method of the GHSearchPage
    const openRoute = (dest) => {
      if (dest === '/') {
        openRouteSpy();
      }
    };

    const renderedComponent = mount(
      <GHSearchPage loading changeRoute={openRoute} />
    );
    const button = renderedComponent.find('button').at(1);
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });
});

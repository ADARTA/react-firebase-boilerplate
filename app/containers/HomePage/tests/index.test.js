import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { HomePage } from '../index';
import H1 from 'components/H1';

describe('<HomePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(<H1>React-Redux project Using Firebase</H1>)).toEqual(true);
  });

  it('should link to "/ghsearch"', () => {
    const openRouteSpy = expect.createSpy();

    // Spy on the openRoute method of the HomePage
    const openRoute = (dest) => {
      if (dest === '/ghsearch') {
        openRouteSpy();
      }
    };

    const renderedComponent = mount(
      <HomePage changeRoute={openRoute} />
    );
    const button = renderedComponent.find('button').at(0);
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });

  it('should link to "/features"', () => {
    const openRouteSpy = expect.createSpy();

    // Spy on the openRoute method of the HomePage
    const openRoute = (dest) => {
      if (dest === '/features') {
        openRouteSpy();
      }
    };

    const renderedComponent = mount(
      <HomePage changeRoute={openRoute} />
    );
    const button = renderedComponent.find('button').at(1);
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });
});

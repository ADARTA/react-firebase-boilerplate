import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../index';
import A from 'components/A';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <p>This project is licensed under the MIT license.</p>
    )).toEqual(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <p>Made with love by <A href="https://twitter.com/3_Alves">Tony Alves</A>.</p>
    )).toEqual(true);
  });
});

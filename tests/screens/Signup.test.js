import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../../screens/signup';

describe('<Signup />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Signup />).toJSON();
        expect(tree).toMatchSnapshot();
      });
  });
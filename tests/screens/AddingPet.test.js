import React from 'react';
import renderer from 'react-test-renderer';
import AddingPet from '../../screens/AddingPet';

describe('<AddingPet />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<AddingPet />).toJSON();
        expect(tree).toMatchSnapshot();
      });
  });
import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});
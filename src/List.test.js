import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List 
      header="First list"
      cards = {[
        {id: 1, title: 'First card', content: 'Lorem ipsum'},
        {id: 2, title: 'Second card', content: 'Lorem ipsum bla bla'}
      ]}

  />, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import '@babel/polyfill';
import { render, waitForElement } from 'react-testing-library';
import HelloWord from '../src/component/HelloWord/HelloWord';

test('test <HelloWord />', async () => {
  const { getByText, } = render(<HelloWord word="I am hero!" />);

  await waitForElement(() => getByText(/hello Satoshi/i));
});

import React from 'react';
import '@babel/polyfill';
import { render, waitForElement } from 'react-testing-library';
import HelloWord from '../src/component/HelloWord/HelloWord';

test('test <HelloWord />', async () => {
  const { getByText, getByTestId, } = render(<HelloWord word="I am hero!" />);

  // queryAPI https://testing-library.com/docs/dom-testing-library/api-queries
  console.log(getByTestId('dontClickMe').value);
  const h1 = await waitForElement(() => getByText('Hello! I am hero!'));
  expect(h1.className).toBe('first_h1');
});

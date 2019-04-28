import React from 'react';
import '@babel/polyfill';
import { render, waitForElement } from 'react-testing-library';
import HelloWord from '../src/component/HelloWord/HelloWord';

test('test <HelloWord />', async () => {
  const { container, getByText, } = render(<HelloWord word="I am hero!" />);

  // queryAPI https://testing-library.com/docs/dom-testing-library/api-queries
  console.log(container.querySelector('div h1'));
  await waitForElement(() => getByText('Hello! I am hero!'));
});

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from '../src/component/CounterWithRedux/Counter';
import reducer from '../src/reducer/Counter';

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('test <Counter />', () => {
  afterEach(cleanup);

  test('直接使用 reducer 做測試', () => {
    const { getByText, getByTestId, } = renderWithRedux(<Counter />);

    // +1
    fireEvent.click(getByText('點我加 1'));
    expect(getByTestId('display_count').textContent).toBe('點了1下');
  });

  test('預設 reducer 的初始值，從 2 開始', () => {
    const initialState = {
      count: 2,
    };
    const { getByText, getByTestId, } = renderWithRedux(<Counter />, { initialState, });

    // +1
    fireEvent.click(getByText('點我加 1'));
    expect(getByTestId('display_count').textContent).toBe('點了3下');
  });

  test('直接預設 store ，保管的 state 從 -3 開始', () => {
    const store = createStore(reducer, {
      count: -3,
    });

    const { getByText, getByTestId, } = renderWithRedux(<Counter />, { store, });
    // +2
    fireEvent.click(getByText('點我加 2'));
    expect(getByTestId('display_count').textContent).toBe('點了-1下');
  });
});

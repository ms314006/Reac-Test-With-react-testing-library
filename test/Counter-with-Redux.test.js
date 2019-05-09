import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from '../src/component/Counter/Counter';
import reducer from '../src/reducer/Counter';

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('test <Counter />', () => {
  afterEach(cleanup);

  test('確認 <Counter /> 是否正常 render', () => {
    const { getByTestId, } = renderWithRedux(<Counter />);
    expect(getByTestId('display_count').textContent).toBe('點了0下');
  });

  test('確認按鈕加上的數量正不正確', () => {
    const { container, getByTestId, } = renderWithRedux(<Counter />);

    fireEvent.click(container.querySelectorAll('[class="add_button"]')[0]);
    expect(getByTestId('display_count').textContent).toBe('點了1下');

    fireEvent.click(container.querySelectorAll('[class="add_button"]')[1]);
    expect(getByTestId('display_count').textContent).toBe('點了3下');
  });

  test('預設 reducer 的初始值，從 2 開始', () => {
    const initialState = {
      count: 2,
    };
    const { container, getByTestId, } = renderWithRedux(<Counter />, { initialState, });

    // +1
    fireEvent.click(container.querySelectorAll('[class="add_button"]')[0]);
    expect(getByTestId('display_count').textContent).toBe('點了3下');
  });

  test('直接預設 store ，保管的 state 從 -3 開始', () => {
    const store = createStore(() => ({
      count: -3,
    }));

    const { container, getByTestId, } = renderWithRedux(<Counter />, { store, });

    // +2
    fireEvent.click(container.querySelectorAll('[class="add_button"]')[1]);
    expect(getByTestId('display_count').textContent).toBe('點了-1下');
  });
});

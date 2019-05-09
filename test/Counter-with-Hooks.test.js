import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from '../src/component/CounterWithHooks/Counter';

describe('Test <Counter />', () => {
  // 每次測試後將 render 的 DOM 清空
  afterEach(cleanup);
  test('測試是否正常 render ', () => {
    // render 畫面
    const { getByTestId, getByText, container, } = render(<Counter />);

    // 下方三個方法都可以找到顯示計數的 <span />
    expect(getByTestId('display_count').textContent).toBe('點了0下');
    expect(getByText('點了0下').textContent).toBe('點了0下');
    expect(container.querySelector('span').innerHTML).toBe('點了0下');
  });

  test('測試點擊功能是否正常', () => {
    // render 畫面
    const { getByText, getByTestId, } = render(<Counter />);

    // 首先找到 +1 button
    let addButton = getByText('點我加 1');
    fireEvent.click(addButton);
    expect(getByTestId('display_count').textContent).toBe('點了1下');

    // 接著找到 +2 button
    addButton = getByText('點我加 2');
    fireEvent.click(addButton);
    expect(getByTestId('display_count').textContent).toBe('點了3下');
  });
});

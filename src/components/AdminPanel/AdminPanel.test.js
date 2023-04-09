import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AdminPanel from './AdminPanel';

describe('Проверка взаимодействия с инпутами', () => {
  test('Проверка чекбоксов', () => {
    render(
      <BrowserRouter>
        <AdminPanel />
      </BrowserRouter>
    );

    const inputcheckboxEl = screen.getByTestId('checkbox-input-bodyCare');
    expect(inputcheckboxEl).not.toBeChecked();
    userEvent.click(inputcheckboxEl);
    expect(inputcheckboxEl).toBeChecked();
  });
});

import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Проверка элементов на странице', () => {
  test('Поиск существующего элемента по плэйсхолдеру', () => {
    render(<App />);
    const el = screen.getByText(/корзина/i);
    expect(el).toBeInTheDocument();
  });
  test('Поиск несуществующего элемента по плэйсхолдеру', () => {
    render(<App />);
    const el = screen.queryByText(/cart/i);
    expect(el).toBeNull();
  });
  test('Проверка цвета кнопки "Показать"', () => {
    render(<App />);
    const el = screen.getByTestId('show-btn');
    expect(el).toHaveStyle({ backgroundColor: 'rgb(255, 200, 94)' });
  });
  test('Проверка добавления класса бургерному меню', () => {
    render(<App />);
    const btnEl = screen.getByTestId('burger-btn');
    const burgerEl = screen.queryByTestId('burger');
    expect(burgerEl).not.toHaveClass('header__burger_open');
    fireEvent.click(btnEl);
    expect(burgerEl).toHaveClass('header__burger_open');
  });
});

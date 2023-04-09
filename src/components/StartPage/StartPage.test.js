import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App/App';
import StartPage from './StartPage';

describe('Проверка перехода по ссылке', () => {
  test('Ссылка на страницу "Каталог"', () => {
    render(
      <BrowserRouter>
        <StartPage />
        <App />
      </BrowserRouter>
    );
    const linkEl = screen.getByTestId('start-link');
    userEvent.click(linkEl);
    expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
  });
});

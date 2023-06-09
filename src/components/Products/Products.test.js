import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Products from './Products';

const data = [
  {
    id: 'd0ae2979-d687-4f2c-a27c-c415af2e4461',
    url: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6329736243.jpg',
    title:
      'Матирующие салфетки для лица (100 шт.) для всех типов кожи с зеленым чаем',
    unit: 'weight',
    size: '40',
    barcode: '978023837962',
    vendor: 'MAYCREATE',
    brand: 'MAYCREATE',
    description:
      'Матирующие салфетки для лица MAYCREATE для моментального удаления жирного блеска в течение дня. Придают эстетический вид, освежают кожу, не нарушая макияж. Приложите салфетку к лицу, и она моментально начнет впитывает излишки жира. 100 супертонких салфеток. Элегантный дизайн картонного футляраМоментально удаляют жирный блеск. Матируют и освежают в течении дня. Сохраняют безупречное состояние макияжа. Cалфетки для лица: Способ примениня салфеток: слегка прижмите изделие к лицу. Не вытирайте салфеткой лицо, а только промокните.',
    price: '1020',
    flags: ['Бумажная продукция', 'Уход за лицом', 'Гигиеническая продукция'],
  },
  {
    id: 'bc872a81-2929-4474-a638-34190cf9fc93',
    url: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6576914125.jpg',
    title: 'Квартет солей для ванны с лавандой',
    unit: 'weight',
    size: '300',
    barcode: '978020137126',
    vendor: 'Dr.Nona',
    brand: 'Dr.Nona',
    description:
      'Соль для ванны Мёртвое море у вас дома! Квартет солей для ванн Dr. Nona, на основе Гало Комплекса, дарит ощущение погружения в Мёртвое море и обеспечивают комплексный уход для тела и души. Богатые минералами и эфирными маслами, соли смягчают и успокаивают кожу, способствуют общей релаксации и улучшают настроение!',
    price: '1270',
    flags: ['Уход за телом'],
  },
];

describe('Проверка списка товаров', () => {
  test('Отображение товаров на странице', () => {
    render(
      <BrowserRouter>
        <Products products={data} />
      </BrowserRouter>
    );

    expect(screen.getByText(/978023837962/i)).toBeInTheDocument();
    expect(
      screen.getByText(/квартет солей для ванны с лавандой/i)
    ).toBeInTheDocument();
  });
});

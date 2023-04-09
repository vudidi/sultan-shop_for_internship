import {
  getProductsMaxPrice,
  getProductsMinPrice,
  getProductCountForVendor,
} from './getProductsData';

const products = [
  {
    id: '8023440b-7982-4d39-873f-2d71fa3062e4',
    vendor: 'BioMio',
    price: '500',
  },
  {
    id: '3c2b2810-5947-4a14-84e9-8e28d744c60f',
    vendor: 'Mia Erbe',
    price: '1400',
  },
  {
    id: '587613da-c5c1-48d5-b77d-a6ac44468de9',
    vendor: 'LADOR',
    price: '200',
  },
  {
    id: '587613da-c5c1-48d5-b77d-a6ac44468de1',
    vendor: 'LADOR',
    price: '1000',
  },
];

describe('Проверка получения данных товаров', () => {
  test('Получить максимальную цену товара', () => {
    expect(getProductsMaxPrice(products)).toBe(1400);
  });

  test('Получить минимальную цену товара', () => {
    expect(getProductsMinPrice(products)).toBe(200);
  });

  test('Проверка получения  вендоров на пустом массиве', () => {
    expect(getProductCountForVendor([])).not.toBeUndefined();
  });
});

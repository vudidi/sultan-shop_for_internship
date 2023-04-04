import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './_AdminPanel.scss';

function AdminPanel() {
  const addForm = document.querySelector('.add-form');
  const typeCheckboxes = document.querySelectorAll('.checkbox-add');
  const typeRadio = document.querySelectorAll('.radio-add');
  const vendorInput = document.querySelector('.add__vendor');
  const brandInput = document.querySelector('.add__brand');
  const titleInput = document.querySelector('.add__title');
  const barcodeInput = document.querySelector('.add__barcode');
  const sizeInput = document.querySelector('.add__size');
  const priceInput = document.querySelector('.add__price');
  const urlInput = document.querySelector('.add__url');
  const descriptionInput = document.querySelector('.add__description');

  const updatePopup = document.querySelector('.admin__product-update');
  const updateForm = document.querySelector('.update-form');
  const typeUpdateCheckboxes = document.querySelectorAll('.checkbox-update');
  const typeUpdateRadio = document.querySelectorAll('.radio-update');
  const vendorUpdateInput = document.querySelector('.update__vendor');
  const brandUpdateInput = document.querySelector('.update__brand');
  const titleUpdateInput = document.querySelector('.update__title');
  const barcodeUpdateInput = document.querySelector('.update__barcode');
  const sizeUpdateInput = document.querySelector('.update__size');
  const priceUpdateInput = document.querySelector('.update__price');
  const urlUpdateInput = document.querySelector('.update__url');
  const descriptionUpdateInput = document.querySelector('.update__description');

  const [products, setProducts] = React.useState([]);
  const [currentProduct, setCurrentProduct] = React.useState({});
  const [isProductListEmpty, setProductListEmpty] = React.useState(false);

  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem('products'));

    if (localProducts) {
      setProducts(localProducts);
    } else {
      setProductListEmpty(true);
    }
  }, []);

  function resetCheckboxError() {
    document.querySelector('.add-checkbox__error').style.display = 'none';
    document.querySelector('.update-checkbox__error').style.display = 'none';
  }

  function addProductData(product) {
    product.vendor = vendorInput.value;
    product.brand = brandInput.value;
    product.title = titleInput.value;
    product.barcode = barcodeInput.value;
    product.size = sizeInput.value;
    product.price = priceInput.value;
    product.url = urlInput.value;
    product.description = descriptionInput.value;
  }

  function updateProductData(product) {
    product.vendor = vendorUpdateInput.value;
    product.brand = brandUpdateInput.value;
    product.title = titleUpdateInput.value;
    product.barcode = barcodeUpdateInput.value;
    product.size = sizeUpdateInput.value;
    product.price = priceUpdateInput.value;
    product.url = urlUpdateInput.value;
    product.description = descriptionUpdateInput.value;
  }

  function addLocalProduct(data) {
    const localProducts = JSON.parse(localStorage.getItem('products'));
    if (!localProducts) {
      localStorage.setItem('products', JSON.stringify(data));
      setProducts(data);
    } else {
      localProducts.forEach((el) => {
        data.push(el);
      });
      localStorage.setItem('products', JSON.stringify(data));
      setProducts(data);
    }
  }

  function submitProductAddForm(e) {
    e.preventDefault();
    const productData = {
      id: uuidv4(),
      vendor: '',
      brand: '',
      title: '',
      barcode: '',
      unit: '',
      size: '',
      price: '',
      url: '',
      flags: [],
      description: '',
    };

    let radioSelected = false;
    let checkboxSelected = false;

    typeCheckboxes.forEach((el) => {
      if (el.checked) {
        checkboxSelected = true;
        productData.flags.push(el.value);
      }
    });
    typeRadio.forEach((el) => {
      if (el.checked) {
        radioSelected = true;
        productData.unit = el.value;
      }
    });

    if (!checkboxSelected && !radioSelected) {
      document.querySelector('.add-radio__error').style.display = 'block';
      document.querySelector('.add-checkbox__error').style.display = 'block';
    } else if (!checkboxSelected) {
      document.querySelector('.add-checkbox__error').style.display = 'block';
    } else if (!radioSelected) {
      document.querySelector('.add-radio__error').style.display = 'block';
    } else if (checkboxSelected && radioSelected) {
      const products = [];
      addProductData(productData);
      products.push(productData);
      addLocalProduct(products);
      setProducts(products);
      setProductListEmpty(false);

      localStorage.removeItem('cart');
      localStorage.removeItem('cartCount');
      localStorage.removeItem('cartPrice');

      typeCheckboxes.forEach((el) => {
        el.removeAttribute('checked');
      });
      typeRadio.forEach((el) => {
        el.removeAttribute('checked');
      });
      addForm.reset();
    }
  }

  function deleteLocalProduct(e) {
    const attrId = e.target
      .closest('.admin__product-item')
      .getAttribute('listid');

    const localProducts = JSON.parse(localStorage.getItem('products'));
    const updatedLocalList = [];
    localProducts.forEach((el) => {
      if (attrId !== el.id) {
        updatedLocalList.push(el);
      }
    });
    localStorage.setItem('products', JSON.stringify(updatedLocalList));
    setProducts(updatedLocalList);
  }

  function openUpdatePopup(e) {
    const attrId = e.target
      .closest('.admin__product-item')
      .getAttribute('listid');

    updatePopup.classList.add('admin__product-update_opened');

    const localProducts = JSON.parse(localStorage.getItem('products'));
    const currentUpdateProduct = localProducts.find((el) => attrId === el.id);

    setCurrentProduct(currentUpdateProduct);

    typeUpdateCheckboxes.forEach((el) => {
      if (currentUpdateProduct.flags.includes(el.value)) {
        el.setAttribute('checked', true);
      }
    });
    typeUpdateRadio.forEach((el) => {
      if (currentUpdateProduct.unit === el.value) {
        el.setAttribute('checked', true);
      }
    });
  }

  function submitProductUpdateForm(e) {
    const localProducts = JSON.parse(localStorage.getItem('products'));
    const attrId = e.target.closest('.admin__form').getAttribute('listid');
    const currentProduct = localProducts.find((el) => attrId === el.id);

    e.preventDefault();
    const productData = {
      id: currentProduct.id,
      vendor: '',
      brand: '',
      title: '',
      barcode: '',
      unit: '',
      size: '',
      price: '',
      url: '',
      flags: [],
      description: '',
    };

    let radioSelected = false;
    let checkboxSelected = false;

    typeUpdateCheckboxes.forEach((el) => {
      if (el.checked) {
        checkboxSelected = true;
        productData.flags.push(el.value);
      }
    });
    typeUpdateRadio.forEach((el) => {
      if (el.checked) {
        radioSelected = true;
        productData.unit = el.value;
      }
    });

    if (!checkboxSelected && !radioSelected) {
      document.querySelector('.update-radio__error').style.display = 'block';
      document.querySelector('.update-checkbox__error').style.display = 'block';
    } else if (!checkboxSelected) {
      document.querySelector('.update-checkbox__error').style.display = 'block';
    } else if (!radioSelected) {
      document.querySelector('.update-radio__error').style.display = 'block';
    } else if (checkboxSelected && radioSelected) {
      const updatedProducts = [];
      updateProductData(productData);
      const localProducts = JSON.parse(localStorage.getItem('products'));
      localProducts.forEach((el) => {
        if (el.id === currentProduct.id) {
          updatedProducts.push(productData);
        } else {
          updatedProducts.push(el);
        }
      });

      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);

      typeUpdateCheckboxes.forEach((el) => {
        el.removeAttribute('checked');
      });
      typeUpdateRadio.forEach((el) => {
        el.removeAttribute('checked');
      });
      closeUpdatePopup();
    }
  }

  function closeUpdatePopup() {
    typeUpdateCheckboxes.forEach((el) => {
      el.removeAttribute('checked');
    });
    typeUpdateRadio.forEach((el) => {
      el.removeAttribute('checked');
    });
    updatePopup.classList.remove('admin__product-update_opened');
    document.querySelector('.update-checkbox__error').style.display = 'none';
    updateForm.reset();
  }

  return (
    <section className="admin">
      <div className="admin__product-add">
        <h2 className="admin__form-title">Добавить товар</h2>{' '}
        <form onSubmit={submitProductAddForm} className="admin__form add-form">
          <div className="admin__form-input">
            {' '}
            <label htmlFor="vendor">Производитель </label>
            <input
              type="text"
              className="admin__input add__vendor"
              id="vendor"
              minLength="2"
              maxLength="20"
              autoComplete="off"
              required
            />
          </div>
          <div className="admin__form-input">
            {' '}
            <label htmlFor="brand">Бренд </label>
            <input
              type="text"
              className="admin__input add__brand"
              id="brand"
              minLength="2"
              maxLength="20"
              autoComplete="off"
              required
            />
          </div>
          <div className="admin__form-input">
            {' '}
            <label htmlFor="title">Название товара </label>
            <input
              type="text"
              className="admin__input add__title"
              id="title"
              minLength="2"
              maxLength="60"
              autoComplete="off"
              required
            />
          </div>
          <div className="admin__form-input">
            {' '}
            <label htmlFor="barcode">Штрихкод </label>
            <input
              type="text"
              className="admin__input add__barcode"
              id="barcode"
              minLength="2"
              maxLength="20"
              autoComplete="off"
              required
            />
          </div>
          <fieldset className="admin__form-fieldset admin__form-fieldset_type_radio">
            {' '}
            <span className="admin__form-fieldset-title">Тип размера </span>
            <div>
              <input
                onChange={() =>
                  (document.querySelector('.add-radio__error').style.display =
                    'none')
                }
                type="radio"
                id="volume"
                name="unit"
                value="volume"
                className="radio-add"
              />
              <label htmlFor="volume">Объем</label>
              <input
                onChange={() =>
                  (document.querySelector('.add-radio__error').style.display =
                    'none')
                }
                type="radio"
                id="weight"
                name="unit"
                value="weight"
                className="radio-add"
              />
              <label htmlFor="weight">Вес</label>
            </div>
            <span className="admin__input-error add-radio__error">
              Выберите опцию
            </span>
          </fieldset>
          <div className="admin__form-input">
            <label htmlFor="size">Размер </label>
            <input
              type="number"
              className="admin__input add__size"
              id="size"
              min="0"
              max="100000"
              autoComplete="off"
              required
            />
          </div>
          <div className="admin__form-input">
            <label htmlFor="price">Цена </label>
            <input
              type="number"
              className="admin__input add__price"
              id="price"
              min="1"
              max="1000000"
              autoComplete="off"
              required
            />
          </div>
          <div className="admin__form-input">
            <label htmlFor="url">Ссылка на изображение </label>
            <input
              type="url"
              className="admin__input add__url"
              id="url"
              minLength="2"
              maxLength="200"
              autoComplete="off"
              required
            />
          </div>
          <fieldset className="admin__form-fieldset admin__form-fieldset_type_checkbox">
            <span className="admin__form-fieldset-title">Тип товара </span>
            <div>
              {' '}
              <label htmlFor="bodyCare">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="bodyCare"
                  name="type"
                  value="Уход за телом"
                  className="checkbox-add"
                />
                Уход за телом
              </label>
              <label htmlFor="handCare">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="handCare"
                  name="unit"
                  value="Уход за руками"
                  className="checkbox-add"
                />
                Уход за руками
              </label>
              <label htmlFor="footCare">
                {' '}
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="footCare"
                  name="unit"
                  value="Уход за ногами"
                  className="checkbox-add"
                />
                Уход за ногами
              </label>
              <label htmlFor="faceCare">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="faceCare"
                  name="unit"
                  value="Уход за лицом"
                  className="checkbox-add"
                />
                Уход за лицом
              </label>
              <label htmlFor="hairCare">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="hairCare"
                  name="unit"
                  value="Уход за волосами"
                  className="checkbox-add"
                />
                Уход за волосами
              </label>
              <label htmlFor="tanning">
                {' '}
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="tanning"
                  name="unit"
                  value="Средства для загара"
                  className="checkbox-add"
                />
                Средства для загара
              </label>
              <label htmlFor="shaving">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="shaving"
                  name="unit"
                  value="Средства для бритья"
                  className="checkbox-add"
                />
                Средства для бритья
              </label>
              <label htmlFor="gifts">
                {' '}
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="gifts"
                  name="unit"
                  value="Подарочные наборы"
                  className="checkbox-add"
                />
                Подарочные наборы
              </label>
              <label htmlFor="hygiene">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="hygiene"
                  name="unit"
                  value="Гигиеническая продукция"
                  className="checkbox-add"
                />
                Гигиеническая продукция
              </label>
              <label htmlFor="mouthCare">
                {' '}
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="mouthCare"
                  name="unit"
                  value="Гигиена полости рта"
                  className="checkbox-add"
                />
                Гигиена полости рта
              </label>
              <label htmlFor="papers">
                <input
                  onChange={resetCheckboxError}
                  type="checkbox"
                  id="papers"
                  name="unit"
                  value="Бумажная продукция"
                  className="checkbox-add"
                />
                Бумажная продукция
              </label>
            </div>
            <span className="admin__input-error add-checkbox__error">
              Выберите опцию
            </span>
          </fieldset>
          <div className="admin__form-input">
            <label htmlFor="description">Описание </label>
            <textarea
              rows="5"
              cols="33"
              className="admin__input add__description"
              minLength="2"
              maxLength="500"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <button className="admin__form-button">Добавить</button>
        </form>
      </div>

      <div className="admin__product-update">
        <div className="admin__product-update-container">
          <h2 className="admin__form-title">Редактировать товар</h2>{' '}
          <form
            listid={currentProduct.id}
            onSubmit={submitProductUpdateForm}
            className="admin__form update-form"
          >
            <div
              onClick={closeUpdatePopup}
              className="admin__product-update-close"
            ></div>
            <div className="admin__form-input">
              {' '}
              <label htmlFor="vendor">Производитель </label>
              <input
                type="text"
                className="admin__input update__vendor"
                id="vendor"
                minLength="2"
                maxLength="20"
                autoComplete="off"
                defaultValue={currentProduct.vendor || ''}
                required
              />
            </div>
            <div className="admin__form-input">
              {' '}
              <label htmlFor="brand">Бренд </label>
              <input
                type="text"
                className="admin__input update__brand"
                id="brand"
                minLength="2"
                maxLength="20"
                autoComplete="off"
                defaultValue={currentProduct.brand || ''}
                required
              />
            </div>
            <div className="admin__form-input">
              {' '}
              <label htmlFor="title">Название товара </label>
              <input
                type="text"
                className="admin__input update__title"
                id="title"
                minLength="2"
                maxLength="60"
                autoComplete="off"
                defaultValue={currentProduct.title || ''}
                required
              />
            </div>
            <div className="admin__form-input">
              {' '}
              <label htmlFor="barcode">Штрихкод </label>
              <input
                type="text"
                className="admin__input update__barcode"
                id="barcode"
                minLength="2"
                maxLength="20"
                autoComplete="off"
                defaultValue={currentProduct.barcode || ''}
                required
              />
            </div>
            <fieldset className="admin__form-fieldset admin__form-fieldset_type_radio">
              {' '}
              <span className="admin__form-fieldset-title">Тип размера </span>
              <div>
                <input
                  onChange={() =>
                    (document.querySelector(
                      '.update-radio__error'
                    ).style.display = 'none')
                  }
                  type="radio"
                  id="volume"
                  name="unit"
                  value="volume"
                  className="radio-update"
                />
                <label htmlFor="volume">Объем</label>
                <input
                  onChange={() =>
                    (document.querySelector(
                      '.update-radio__error'
                    ).style.display = 'none')
                  }
                  type="radio"
                  id="weight"
                  name="unit"
                  value="weight"
                  className="radio-update"
                />
                <label htmlFor="weight">Вес</label>
              </div>
              <span className="admin__input-error update-radio__error">
                Выберите опцию
              </span>
            </fieldset>
            <div className="admin__form-input">
              <label htmlFor="size">Размер </label>
              <input
                type="number"
                className="admin__input update__size"
                id="size"
                min="0"
                max="100000"
                autoComplete="off"
                defaultValue={currentProduct.size || ''}
                required
              />
            </div>
            <div className="admin__form-input">
              <label htmlFor="price">Цена </label>
              <input
                type="number"
                className="admin__input update__price"
                id="price"
                min="1"
                max="1000000"
                autoComplete="off"
                defaultValue={currentProduct.price || ''}
                required
              />
            </div>
            <div className="admin__form-input">
              <label htmlFor="url">Ссылка на изображение </label>
              <input
                type="url"
                className="admin__input update__url"
                id="url"
                minLength="2"
                maxLength="200"
                autoComplete="off"
                defaultValue={currentProduct.url || ''}
                required
              />
            </div>
            <fieldset className="admin__form-fieldset admin__form-fieldset_type_checkbox">
              <span className="admin__form-fieldset-title">Тип товара </span>
              <div>
                {' '}
                <label htmlFor="bodyCare">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="bodyCare"
                    name="type"
                    value="Уход за телом"
                    className="checkbox-update"
                  />
                  Уход за телом
                </label>
                <label htmlFor="handCare">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="handCare"
                    name="unit"
                    value="Уход за руками"
                    className="checkbox-update"
                  />
                  Уход за руками
                </label>
                <label htmlFor="footCare">
                  {' '}
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="footCare"
                    name="unit"
                    value="Уход за ногами"
                    className="checkbox-update"
                  />
                  Уход за ногами
                </label>
                <label htmlFor="faceCare">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="faceCare"
                    name="unit"
                    value="Уход за лицом"
                    className="checkbox-update"
                  />
                  Уход за лицом
                </label>
                <label htmlFor="hairCare">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="hairCare"
                    name="unit"
                    value="Уход за волосами"
                    className="checkbox-update"
                  />
                  Уход за волосами
                </label>
                <label htmlFor="tanning">
                  {' '}
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="tanning"
                    name="unit"
                    value="Средства для загара"
                    className="checkbox-update"
                  />
                  Средства для загара
                </label>
                <label htmlFor="shaving">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="shaving"
                    name="unit"
                    value="Средства для бритья"
                    className="checkbox-update"
                  />
                  Средства для бритья
                </label>
                <label htmlFor="gifts">
                  {' '}
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="gifts"
                    name="unit"
                    value="Подарочные наборы"
                    className="checkbox-update"
                  />
                  Подарочные наборы
                </label>
                <label htmlFor="hygiene">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="hygiene"
                    name="unit"
                    value="Гигиеническая продукция"
                    className="checkbox-update"
                  />
                  Гигиеническая продукция
                </label>
                <label htmlFor="mouthCare">
                  {' '}
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="mouthCare"
                    name="unit"
                    value="Гигиена полости рта"
                    className="checkbox-update"
                  />
                  Гигиена полости рта
                </label>
                <label htmlFor="papers">
                  <input
                    onChange={resetCheckboxError}
                    type="checkbox"
                    id="papers"
                    name="unit"
                    value="Бумажная продукция"
                    className="checkbox-update"
                  />
                  Бумажная продукция
                </label>
              </div>
              <span className="admin__input-error update-checkbox__error">
                Выберите опцию
              </span>
            </fieldset>
            <div className="admin__form-input">
              <label htmlFor="description">Описание </label>
              <textarea
                rows="5"
                cols="33"
                className="admin__input update__description"
                minLength="2"
                maxLength="500"
                autoComplete="off"
                defaultValue={currentProduct.description || ''}
                required
              ></textarea>
            </div>

            <button className="admin__form-button">Редактировать</button>
          </form>
        </div>
      </div>

      <h2 className="admin__list-title">Список товаров</h2>
      <div
        className={`admin__empty-list ${
          isProductListEmpty && 'admin__empty-list_visible'
        }`}
      ></div>

      <ul className="admin__product-items">
        {products.map((product) => {
          return (
            <li
              className="admin__product-item"
              listid={product.id}
              key={product.id}
            >
              <img
                className="admin__product-item-img"
                src={product.url}
                alt={product.title}
              />
              <div className="admin__product-container">
                <div className="admin__product-parameter">
                  <span>Производитель&#58;&#160;</span>
                  {product.vendor}
                </div>
                <div className="admin__product-parameter">
                  <span>Бренд&#58;&#160;</span>
                  {product.brand}
                </div>
                <div className="admin__product-parameter">
                  <span>Название&#58;&#160;</span>
                  {product.title}
                </div>
                <div className="admin__product-parameter">
                  <span>Штрихкод&#58;&#160;</span>
                  {product.barcode}
                </div>

                <div className="admin__product-parameter">
                  <span>Тип&#58;&#160;</span>
                  {product.unit}
                </div>
                <div className="admin__product-parameter">
                  <span>Размер&#58;&#160;</span>
                  {product.size}
                </div>
                <div className="admin__product-parameter">
                  <span>Цена&#58;&#160;</span>
                  {product.price}
                </div>

                <div className="admin__product-parameter">
                  <span>Ссылка на изображение&#58;&#160;</span>
                  {product.url}
                </div>
                <div className="admin__product-parameter">
                  <span>Тип&#58;&#160;</span>
                  {product.flags.join(', ')}
                </div>
                <div className="admin__product-parameter">
                  <span>Описание&#58;&#160;</span>
                  {product.description}
                </div>

                <div className="admin__buttons">
                  <button
                    onClick={openUpdatePopup}
                    className="admin__button admin__update"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={deleteLocalProduct}
                    className="admin__button admin__delete"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default AdminPanel;

import React from 'react';
import { Link } from 'react-router-dom';
import './_StartPage.scss';

function StartPage() {
  return (
    <div className="start-page">
      <h1 className="start-page-title">
        Главная страница в разработке
        <br /> Перейдите в <Link to="/">Каталог</Link>
      </h1>
      <div className="start-page-img"></div>
    </div>
  );
}

export default StartPage;

import React from 'react';
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './_Breadcrumbs.scss';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;

  function breadcrumbTitle() {
    console.log(pathname);
    if (pathname.includes('product')) {
      return 'Товар';
    } else if (pathname.includes('cart')) {
      return 'Корзина';
    }
  }

  const pathnames = pathname.split('/').filter((x) => x);

  return (
    !pathname.includes('sultan-shop_for_internship') && (
      <MUIBreadcrumbs
        className="breadcrumbsCustomStyle"
        aria-label="breadcrumb"
      >
        {pathnames.length > 0 ? (
          <Link onClick={() => history.push('/')}>
            <p className="breadcrumbs breadcrumbs_active">Каталог</p>
          </Link>
        ) : (
          <Typography className="breadcrumbs">
            Каталог <span>Косметика и гигиена</span>
          </Typography>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography className="breadcrumbs-next" key={name}>
              {breadcrumbTitle()}
            </Typography>
          ) : (
            <Link key={name} onClick={() => history.push(routeTo)}>
              {name}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    )
  );
};

export default withRouter(Breadcrumbs);

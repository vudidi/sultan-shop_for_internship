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
    if (pathname.includes('product')) {
      return props.productTitle;
    } else if (pathname.includes('cart')) {
      return 'Корзина';
    }
  }

  function getPathnames() {
    if (!pathname.includes('product')) {
      return pathname.split('/').filter((x) => x);
    } else {
      return [pathname];
    }
  }
  const pathnames = getPathnames();

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
              {breadcrumbTitle()}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    )
  );
};

export default withRouter(Breadcrumbs);

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, Link as RouterLink } from 'react-router-dom';

export default function ActiveLastBreadcrumb() {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);

  let breadcrumbPath = "";
  console.log(pathname);

  return (
    <div role="presentation" style={{marginTop:'100px'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Home
        </Link>

        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span key={breadcrumbPath}>{name}</span>
          ) : (
            <Link underline="hover" color="inherit" component={RouterLink} to={breadcrumbPath} key={breadcrumbPath}>
              {name}
            </Link>
          );
          
        })}
      </Breadcrumbs>
    </div>
  );
}

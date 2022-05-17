import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo__container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav__links__container'>
          <Link className='nav__link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav__link' to='/signIn'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import './Page404.scss';

const Page404 = () => {
  return (
    <div>
      <Link to='/'>To start page</Link>
      <p className='text-404'>Error 404</p>
      <p className='text-error'>Page not found</p>
    </div>
  );
};

export default memo(Page404);
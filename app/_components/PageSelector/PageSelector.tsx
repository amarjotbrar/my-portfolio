'use client';
//modules
import React from 'react'
import classNames from 'classnames/bind'
import Link from 'next/link';

//styles
import style from './PageSelector.module.scss'

const cx = classNames.bind(style);

const PageSelector = () => {
  return (
      <div className={cx('page-selector-container')}>
          <Link className={cx('page-link')} href={'/'}>Home</Link>
          <Link className={cx('page-link')} href={'/about'}>About</Link>
    </div>
  )
}

export default PageSelector
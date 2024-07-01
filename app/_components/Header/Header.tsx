//modules
import React from 'react'
import classNames from "classnames/bind";

//typings
import { HeaderProps } from './types';

//components
import PageSelector from '../PageSelector/PageSelector';

//styles
import style from "./Header.module.scss";

const cx = classNames.bind(style);

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
      <>
      <div className={cx('header-container')}>
        <div className={cx('header-start')}>
          <h4 className={cx('page-title')}>{title}</h4>
        </div>
        <div className={cx('header-middle')}>
          <PageSelector/>
        </div>
        <div className={cx('header-end')}></div>
      </div>
      </>
  )
}

export default Header
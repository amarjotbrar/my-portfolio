//modules
import React from 'react'
import classNames from "classnames/bind";

//typings
import { HeaderProps } from './types';

//styles
import style from "./Header.module.scss";

const cx = classNames.bind(style);

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
      <>
      <nav className={cx('header-container')}>
        <h4 className={cx('page-title')}>{title}</h4>
      </nav>
      </>
  )
}

export default Header
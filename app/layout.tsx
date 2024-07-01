//modules
import React from 'react';
import classNames from 'classnames/bind';

//components
import Header from './_components/Header/Header';

//typings
import { RootLayoutProps } from "./typings";

//styles
import style from './golobalStyles.module.scss'

const cx = classNames.bind(style);

const RootLayout = (props: RootLayoutProps) => {
    const { children } = props;
    return (
        <html>
            <body className={cx('body')}>
                <Header title="pageTitle" />
                <div className={cx('body-content')}>{children}</div>
            </body>
        </html>
    )
}

export default RootLayout;
//modules
import React from 'react';
import { Metadata } from 'next'
import classNames from 'classnames/bind';

//components
import Header from './_components/Header/Header';
import PageSelector from './_components/PageSelector/PageSelector';

//assets
import ProfilePhoto from './../public/whitebgprofile.jpg';

//typings
import { RootLayoutProps } from "./typings";

//styles
import style from './golobalStyles.module.scss'

const cx = classNames.bind(style);

 
export const metadata: Metadata = {
    title: 'Amarjot',
    description: "This website showcases my professional journey, skills, and projects. It serves as a platform to highlight my work, including detailed case studies, coding projects, and creative endeavors. Explore my portfolio to see how I turn ideas into reality, solve complex problems, and continuously innovate in the tech world. Whether you're a potential employer, collaborator, or just curious about my work, you'll find a comprehensive overview of my capabilities and accomplishments here.",
    openGraph: {
        images: [`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/whitebgprofile.jpg`],
        title: "Amarjot Singh - Portfolio",
        description: 'This website showcases my professional journey, skills, and projects of Amarjot Singh.'
    }
}

const RootLayout = (props: RootLayoutProps) => {
    const { children } = props;
    return (
        <html>
            <body className={cx('body')}>
                <Header title="pageTitle" />
                <div className={cx('body-content')}>
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout;
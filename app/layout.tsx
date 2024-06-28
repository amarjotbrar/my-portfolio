import React from 'react';
import { RootLayoutProps } from "./typings";

const RootLayout = (props: RootLayoutProps) => {
    const { children } = props;
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;
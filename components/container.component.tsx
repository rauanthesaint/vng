import clsx from 'clsx';
import { ReactNode } from 'react';

const Container = ({
    children,
    classname,
}: {
    children: ReactNode;
    classname?: string;
}) => {
    return (
        <div className={clsx('container-width h-full', classname)}>
            {children}
        </div>
    );
};

export default Container;

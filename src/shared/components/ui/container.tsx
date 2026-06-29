import { type ReactNode } from "react";

interface Props {
    children : ReactNode
}

export const Container = ({ children } : Props ) => {
    return (
        <div className="mx-auto px-8">
            {children}
        </div>
    );
};

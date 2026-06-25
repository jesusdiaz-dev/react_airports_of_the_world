import { type ReactNode } from "react";

interface Props {
    children : ReactNode
}

export const Container = ({ children } : Props ) => {
    return (
        <div className="mx-auto max-w-5xl px-6">
            {children}
        </div>
    );
};

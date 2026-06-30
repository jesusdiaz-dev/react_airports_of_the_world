import type { User } from "@core/auth/models/auth.model"

interface TitleProps {
    user: User | null
}

export const AdminTitle = ( props : TitleProps)=>{
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Admin Page
            </h1>
            {props.user && (
                <p className="mt-1 text-sm text-muted-foreground">
                    Welcome back, <span className="font-medium text-foreground">{props.user.fullName}</span>
                </p>
            )}
            <hr className="mt-8"/>
        </div>
    )
}
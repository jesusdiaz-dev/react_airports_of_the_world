import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="w-full bg-background">
            <Separator />
            <div className="mx-auto flex h-14 items-center justify-center px-6">
                <p className="text-sm text-muted-foreground">
                    &copy; 2024 Airports App. All rights reserved. Delivered by Jesus Diaz
                </p>
            </div>
        </footer>
    )
}

export default Footer;
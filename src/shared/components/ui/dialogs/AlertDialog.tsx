import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

interface Props {
    title: string;
    text: string;
    confirmText?: string;
    isLoading?: boolean;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    onClose?: () => void; // fallback cuando el usuario cierra el diálogo sin confirmar
}

const CustomAlertDialog = ({
        title,
        text,
        confirmText = "Ok",
        open,
        onOpenChange,
        onConfirm,
        onClose,
        isLoading = false,
    }: Props) => {

    const handleOpenChange = (nextOpen: boolean) => {
        // Si se cierra (Esc, click afuera, etc.) sin pasar por onConfirm
        if (!nextOpen) {
            onClose?.();
        }
        onOpenChange(nextOpen);
    };

    return (
        <AlertDialog open={open} onOpenChange={handleOpenChange}>
            <AlertDialogContent className="sm:max-w-sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{text}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={(e) => {
                            e.preventDefault(); // evita el auto-close para poder manejar isLoading
                            onConfirm();
                        }}
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : confirmText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default CustomAlertDialog;
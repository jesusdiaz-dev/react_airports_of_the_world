import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

interface Props {
    title: string,
    text: string,
    cancelText?: string
    confirmText?: string
    isLoading?: boolean,
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
}

const ConfirmDialog = ({ 
        title,
        text,
        cancelText = "Cancel",
        confirmText = "Confirm",
        open,
        onOpenChange,
        onConfirm,
        isLoading = false,
    }: Props) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="sm:max-w-sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{text}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel >
                        {cancelText}
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={(e) => {
                            e.preventDefault(); // Prevents auto-closing so you can handle loading states
                            onConfirm();
                        }}
                        disabled={isLoading}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                        {isLoading ? "Processing..." : confirmText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default ConfirmDialog;
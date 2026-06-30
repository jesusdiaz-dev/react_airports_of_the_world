import React, { forwardRef } from 'react';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { FieldError as HookFormFieldError } from 'react-hook-form';

// Extend the native HTML Input attributes so your custom component 
// accepts standard props like 'type', 'placeholder', 'disabled', etc.
interface FormInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: HookFormFieldError;
    description?: string;
}

export const FormInputField = forwardRef<HTMLInputElement, FormInputFieldProps>(
    ({ label, error, description, type = "text", ...props }, ref) => {
        return (
            <FieldSet>
                <FieldGroup>
                    <Field>
                        <FieldLabel>{label}</FieldLabel>
                        <Input 
                            type={type} 
                            ref={ref} // Crucial for react-hook-form to focus on error
                            {...props} 
                        />
                        {description && (
                            <FieldDescription>{description}</FieldDescription>
                        )}
                        {error?.message && (
                            <FieldError>{error.message}</FieldError>
                        )}
                    </Field>
                </FieldGroup>
            </FieldSet>
        );
    }
);

FormInputField.displayName = "FormInputField";
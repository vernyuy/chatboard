/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Message } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MessageUpdateFormInputValues = {
    message?: string;
    createdOn?: number;
    messageType?: string;
    messageStatus?: string;
};
export declare type MessageUpdateFormValidationValues = {
    message?: ValidationFunction<string>;
    createdOn?: ValidationFunction<number>;
    messageType?: ValidationFunction<string>;
    messageStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessageUpdateFormOverridesProps = {
    MessageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    messageType?: PrimitiveOverrideProps<SelectFieldProps>;
    messageStatus?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MessageUpdateFormProps = React.PropsWithChildren<{
    overrides?: MessageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    message?: Message;
    onSubmit?: (fields: MessageUpdateFormInputValues) => MessageUpdateFormInputValues;
    onSuccess?: (fields: MessageUpdateFormInputValues) => void;
    onError?: (fields: MessageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessageUpdateFormInputValues) => MessageUpdateFormInputValues;
    onValidate?: MessageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MessageUpdateForm(props: MessageUpdateFormProps): React.ReactElement;

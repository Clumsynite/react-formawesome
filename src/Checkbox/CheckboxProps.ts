import * as React from "react";
import * as PropTypes from "prop-types";

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    values: [any, any];

    errorClassName?: string;
    activeClassName?: string;

    nativeRef?: (instance?: HTMLInputElement) => void;
}

export const CheckboxPropTypes: Partial<PropTypes.ValidationMap<CheckboxProps>> = {
    values: PropTypes.arrayOf(PropTypes.any).isRequired as PropTypes.Requireable<[string, string]>,

    errorClassName: PropTypes.string,
    activeClassName: PropTypes.string,

    nativeRef: PropTypes.func
};

export const CheckboxDefaultProps: Partial<CheckboxProps> = {
    errorClassName: "has-error",
    activeClassName: "is-active"
};

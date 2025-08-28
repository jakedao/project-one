import type { InputHTMLAttributes, ReactNode } from "react";

export type Icon = {
  classes?: string;
  color?: string;
  size?: number;
};

export type TextSize = "title" | "text-lg" | "text-md" | "text-sm";
export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
export type MenuItemState = "default" | "active" | "disabled";
export type ButtonVariant = "primary" | "secondary";

export type MenuItem = {
  value: string | number;
  label: string;
};

export type MenuPosition = {
  top: number;
  left: number;
};

export interface Menu {
  open: boolean;
  onClose: () => void;
  options: MenuItem[];
  onSelectValue: (value: string | number) => void;
  disabledValues?: string[];
  selectedValue?: string;
  targetPos?: MenuPosition;
}

export type TextField = InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: React.ReactNode;
  disabled?: boolean;
  errorText?: string;
};

export interface Text {
  children: ReactNode;
  size?: TextSize;
  variant?: TextVariant;
  color?: string;
  className?: string;
  fontWeight?: number;
  align?: "left" | "center" | "right";
  onClick?: () => void;
  maxLine?: number;
}

export interface SelectField {
  options: MenuItem[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  width?: number | string;
}

export interface Checkbox {
  checked?: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
  children?: ReactNode;
}

export interface Modal {
  open: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  children?: ReactNode;
  className?: string;
  confirmCallback?: () => void;
  onTriggerModal?: (
    title: string,
    content: string,
    confirmCallback?: () => void
  ) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export type ToastType = "success" | "error" | "info";

export interface Toast {
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

export interface Drawer {
  open: boolean;
  component?: ReactNode;
  onClose: () => void;
  onTriggerDrawer?: ({ component }: { component: ReactNode }) => void;
  children?: ReactNode;
}

export interface IChip {
  children?: ReactNode;
  startIcon?: ReactNode;
  onDelete?: () => void;
}

export interface ISlider {
  value: number;
  onChange: (arg: number) => void;
  width?: string | number;
  min?: number;
  max?: number;
  step?: number;
}

// Wrappers

export interface IComponentWrapper {
  children: JSX.Element | JSX.Element[] | string;
}

export interface IAuthWrapper extends IComponentWrapper {
  name: string;
}

// Navigation

export interface INavigationOption {
  name: string;
  image?: string;
  url?: string;
  base?: string;
}

// Inputs

export interface IGenericInput
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Buttons

export interface IGenericButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

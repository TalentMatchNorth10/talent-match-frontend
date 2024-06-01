export enum InputType {
  Outline = 'outline',
  Underline = 'underline',
  Search = 'search',
  SearchByType = 'searchByType'
}

export enum InputSize {
  Default = 'default',
  Large = 'large'
}

export interface SearchType {
  type: string | null;
  value: string;
}

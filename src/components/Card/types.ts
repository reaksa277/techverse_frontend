import { TFunction } from "react-i18next";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
}

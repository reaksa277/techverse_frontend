import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon?: string;
  title_en: string;
  title_kh: string;
  info_en: string;
  info_kh: string;
  discription_en?: string;
  discription_kh?: string;
  section?: {
    title_en: string;
    title_kh: string;
    content: string;
    icon: string;
  }[];
  list?: string[];
  image?: string;
  url?: string;
  linkName?: string;
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
  id: string;
  direction: "left" | "right";
}

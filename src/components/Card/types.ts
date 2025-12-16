export interface CardProps {
  category_image?: string;
  title_en: string;
  title_kh?: string;
  icon?: string;
  link?: string;
  info_en?: string;
  info_kh?: string;
  type?: string;
  date?: string;
  list?: string[];
  linkName?: string;
  tag?: string;
  url?: string;
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
}

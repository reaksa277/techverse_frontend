export interface CardProps {
  image?: string;
  title_en: string;
  title_kh: string;
  icon?: string;
  url?: string;
  info_en?: string;
  info_kh?: string;
  tag?: string;
  date?: string;
  list?: string[];
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

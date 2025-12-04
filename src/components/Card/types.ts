export interface CardProps {
  image?: string;
  title: string;
  icon?: string;
  link?: string;
  description?: string;
  tag?: string;
  date?: string;
  list?: string[];
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
}

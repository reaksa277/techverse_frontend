export interface CardProps {
  image: string;
  title: string;
  description: string;
  tag?: string;
  date?: string;
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

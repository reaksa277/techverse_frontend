import { ServiceProps } from "./type";

export interface ServiceResponse {
  status: boolean;
  message: string;
  data: ServiceProps[];
}


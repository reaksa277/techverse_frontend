import { CaseStudyResponse, ContentBlockProps } from "../layouts/blogSection/case-study-type";
import { ServiceResponse } from "./response";
import { ServiceProps } from "./type";

// export const BASE_URL = "http://127.0.0.1:8000";
export const BASE_URL = "http://10.21.0.127:8000/";

export const PREFIX_V1 = "/api/v1";

export const FetchService = async (): Promise<ServiceProps[]> => {
  const response = await fetch(`${BASE_URL}${PREFIX_V1}/homepage/services/`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const json: ServiceResponse = await response.json();
  return json.data;
};

export const FetchCaseStudy = async (): Promise<ContentBlockProps[]> => {
  const response = await fetch(`${BASE_URL}${PREFIX_V1}/homepage/case-studies/`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const json: CaseStudyResponse = await response.json();
  return json.data;
};

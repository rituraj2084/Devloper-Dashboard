import { AuthorWorklogData } from "../types";

export const fetchData = async (): Promise<AuthorWorklogData> => {
  try {
    const response = await fetch(
      "https://66dc4d0f47d749b72acb4001.mockapi.io/api/v1/data/worklogs"
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}, statusText: ${response.statusText}` +
          response.statusText
      );
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw error;
  }
};

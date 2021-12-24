import { Recipe } from "./Recipe";

export interface RecipeResponse {
  number: number;
  offset: number;
  results: Recipe[];
  totalResults: number;
}

import { createContext } from "react";
import { initialCategoriesContext } from "./initialCategoriesContext";

export const CategoriesContext = createContext(initialCategoriesContext);
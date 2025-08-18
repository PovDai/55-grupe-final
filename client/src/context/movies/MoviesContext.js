import { createContext } from "react";
import { initialMoviesContext } from "./initialMoviesContext";

export const MoviesContext = createContext(initialMoviesContext);
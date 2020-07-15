import { defaultSearchOptions } from "../config/searchOptions";

function randomSearch() {
  const randomNumber: number = Math.floor(
    Math.random() * defaultSearchOptions.length
  );

  return defaultSearchOptions[randomNumber];
}

export default randomSearch;
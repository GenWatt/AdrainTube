import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../duck/allActions";
import SearchIcon from "@material-ui/icons/Search";
import {
  SearchForm,
  InputBox,
  Label,
  SearchInput,
  SearchBtn,
} from "./SearchStyles";

function Search() {
  const [search, setSearch] = useState<string>("");
  const [isFocus, setFocus] = useState<boolean>(false);
  const dispatch = useDispatch();

  const searchForFilms = (e: FormEvent) => {
    e.preventDefault();

    if (search) {
      dispatch(allActions.searchActions.customSearch(search));
      dispatch(allActions.searchResultsActions.clearVideos(true));
    }
  };

  const activeLabel = () => setFocus(true);


  const disactiveLabel = () => {
    if (!search) setFocus(false);
  };

  return (
    <SearchForm onSubmit={(e) => searchForFilms(e)}>
      <InputBox>
        <Label htmlFor="search" isFocus={isFocus}>
          Search For Films...
        </Label>
        <SearchInput
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => activeLabel()}
          onBlur={() => disactiveLabel()}
          value={search}
        />
      </InputBox>
      <SearchBtn>
        <SearchIcon className="submit__icon" />
      </SearchBtn>
    </SearchForm>
  );
}

export default React.memo(Search);

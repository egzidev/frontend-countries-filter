import {FocusEventHandler} from "react";
import {Country} from "./country";

export interface AutocompleteInputProps {
    searchCountries: string;
    setSearchCountries: (value: string) => void,
    setFilteredCountries: (value: Country[]) => void,
    countries: Country[],
    setIsLoading: (value: boolean) => void,
    handleSearchInputFocus: FocusEventHandler<HTMLInputElement>;
}

export interface AutocompleteListProps {
    filteredCountries: Country[];
    searchCountries: string;
    focusSearch: boolean;
    handleItemClick: (name: string, country: Country) => void;
}
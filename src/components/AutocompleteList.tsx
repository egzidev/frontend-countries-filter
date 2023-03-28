import React, {memo} from 'react';
import {AutocompleteListProps, HighlightSearchTextProps} from "../types/autocomple";

const AutocompleteList: React.FC<AutocompleteListProps> = (props) => {
    const {
        filteredCountries,
        searchCountries,
        focusSearch,
        handleItemClick,
    } = props

    console.log(focusSearch)
    const highlightSearchText = ({text, search}: HighlightSearchTextProps) => {
        const regex = new RegExp(`(${search})`, "gi");
        const parts = text.split(regex);
        return (
            <>
                {parts.map((part, i) => (
                    regex.test(part) ? <span key={i} className="countries-autocomplete__match">{part}</span> : part
                ))}
            </>
        );
    }

    return (
        <ul
            className={`countries-autocomplete__list ${
                focusSearch
                    ? 'countries-autocomplete__list-open'
                    : 'countries-autocomplete__list-close'
            }`}
        >
            {filteredCountries && filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                    <li
                        key={country.name.common}
                        onClick={() => handleItemClick(country.name.common, country)}
                    >
                        {searchCountries ? highlightSearchText({
                            text: country.name.common,
                            search: searchCountries
                        }) : country.name.common}
                    </li>
                ))
            ) : (
                <li>No Result</li>
            )}
        </ul>
    );
};

export default memo(AutocompleteList);
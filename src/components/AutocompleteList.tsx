import React from 'react';
import {AutocompleteListProps} from "../types/autocomple";

const AutocompleteList: React.FC<AutocompleteListProps> = (props) => {
    const {
        filteredCountries,
        searchCountries,
        focusSearch,
        handleItemClick,
    } = props

    return (
        <ul
            className={`deel-autocomplete__list ${
                focusSearch
                    ? 'deel-autocomplete__list-open'
                    : 'deel-autocomplete__list-close'
            }`}
        >
            {filteredCountries && filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                    <li
                        key={index}
                        onClick={() => handleItemClick(country.name.common, country)}
                        dangerouslySetInnerHTML={{
                            // use dangerouslySetInnerHTML to render the highlighted text
                            __html: country.name.common.replace(
                                new RegExp(`(${searchCountries})`, 'gi'),
                                "<span class='deel-autocomplete__match'>$1</span>"
                            ),
                        }}
                    />
                ))
            ) : (
                <li>No Result</li>
            )}
        </ul>
    );
};

export default AutocompleteList;
import React, {ChangeEvent} from 'react';
import {AutocompleteInputProps} from "../types/autocomple";
import {Country} from "../types/country";

const AutocompleteInput: React.FC<AutocompleteInputProps> = (props) => {
    const {
        searchCountries,
        setSearchCountries,
        setFilteredCountries,
        setIsLoading,
        countries,
        handleSearchInputFocus,
    } = props


    // Function to handle input change event
    const handleSearchInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchCountries(searchValue);

        // If the search field is empty, display all the countries
        if (searchValue === '') {
            setFilteredCountries(countries)
            return;
        }

        setIsLoading(true)
        try {
            // Filter the countries based on the search value
            const filteredData = await filterCountries(searchValue)
            setFilteredCountries(filteredData)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    // Function to filter the countries based on the search value
    const filterCountries = async (value: string): Promise<Country[]> => {
        return await new Promise<Country[]>((resolve) => {
            setTimeout(() => {
                const regex = new RegExp(value, 'gi')

                // Use regex to filter the countries
                const filteredCountries = countries.filter(
                    (country) => country.name.common.match(regex) !== null
                );

                resolve(filteredCountries)
            }, 500)
        });
    }

    return (
        <input
            className="deel-autocomplete__input"
            type="text"
            value={searchCountries}
            onChange={handleSearchInputChange}
            onFocus={handleSearchInputFocus}
            placeholder="Search the Country in Europe..."
        />
    );
};

export default AutocompleteInput;
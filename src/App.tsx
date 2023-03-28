import {useEffect, useState} from 'react'
import AutocompleteInput from "./components/AutocompleteInput";
import AutocompleteList from "./components/AutocompleteList";
import Loading from "./components/Loading";

import {Country} from "./types/country";
import {getCountries} from "./api/countries";

import './index.css'

function App() {

    // Set countries from REST call)
    const [countries, setCountries] = useState<Country[]>([])
    // Collect the filtered ones and add in search list
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
    // Take the search field value
    const [searchCountries, setSearchCountries] = useState<string>('')
    // Load the text before data comes to the endpoint
    const [isLoading, setIsLoading] = useState<boolean>(true)
    // When is focus the search shows the list
    const [focusSearch, setFocusSearch] = useState<boolean>(false)

    // Function to fetch data from the API
    const fetchCountries = async () => {
        setIsLoading(true)
        try {
            const data = await getCountries()
            setCountries(data)
            setFilteredCountries(data)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }


    // Function to handle input focus event
    const handleSearchInputFocus = () => {
        // Toggle the focusSearch state variable
        setFocusSearch(!focusSearch);

        if (!countries.length) fetchCountries()
    }


    // Function to handle item click event
    const handleItemClick = (name: string, country: Country) => {
        setSearchCountries(name);
        setFilteredCountries([{
            ...country
        }]);
        setFocusSearch(false);
    };

    return (
        <div className="App">
            <div className="countries-autocomplete">
                <AutocompleteInput
                    searchCountries={searchCountries}
                    setSearchCountries={setSearchCountries}
                    setFilteredCountries={setFilteredCountries}
                    setIsLoading={setIsLoading}
                    countries={countries}
                    handleSearchInputFocus={handleSearchInputFocus}
                />
                {isLoading ?
                    focusSearch ? <Loading/> : null
                    :
                    <AutocompleteList
                        filteredCountries={filteredCountries}
                        searchCountries={searchCountries}
                        focusSearch={focusSearch}
                        handleItemClick={handleItemClick}
                    />
                }
            </div>
        </div>
    )
}

export default App

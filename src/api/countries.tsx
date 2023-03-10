const europeBaseUrl = 'https://restcountries.com/v3.1/region/europe'

export const getCountries = async () => {
    const response = await fetch(europeBaseUrl)
    return await response.json()
}
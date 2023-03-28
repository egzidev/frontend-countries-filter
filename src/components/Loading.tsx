import React from 'react';

const Loading = () => {
    return (
        <ul className="countries-autocomplete__list countries-autocomplete__list-open">
            <li>
                <div className="countries-autocomplete__loading">Loading...</div>
            </li>
        </ul>
    )
}

export default Loading;
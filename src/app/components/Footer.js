import React from 'react';

import PropTypes from 'prop-types';

export default function Footer(props) {
    console.log('Footer render');

    // props are immutable
    //props.appTitle = 'Product app'; // fail

    // possible, but BAD, should not done
    //props.address.city  = 'Chennai';

    // deconstruct
    const {appTitle, year, address} = props;

    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {appTitle}</p>
            <p>Address {address.city} {address.state}</p>
        </div>
    );
}

//react keyword, 
Footer.propTypes = {
    year: PropTypes.number.isRequired, //mandatory
    appTitle: PropTypes.string,
    // custom type
    address: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string
    }).isRequired //mandatory
}

//react keyword
Footer.defaultProps = {
    // if parent doesn't pass appTitle, default is used
    appTitle: 'Product app'
}
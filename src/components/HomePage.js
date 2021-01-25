import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() { 
        return ( 
            <Link to='/CampusPage'>See all campuses</Link>
         );
    }
}
 
export default HomePage;
import React, { Component } from 'react';
import { Navbar } from './index';

class StudentsPage extends Component {
    render() { 
        return ( 
            <div>
                <Navbar />
                <h1>All students here</h1>
            </div>
         );
    }
}
 
export default StudentsPage;
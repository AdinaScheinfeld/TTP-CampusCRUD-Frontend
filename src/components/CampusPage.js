import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CampusCard, Navbar, IsLoading } from './index';

import { connect } from 'react-redux';
import { getAllCampuses } from '../redux/reducers';

class CampusPage extends Component {

    async componentDidMount(){
        await this.props.getAllCampuses();
    }

    render() {
        return (
            this.props.allCampuses.campuses != undefined ? (
            <div>
                <Navbar />
                <Link to='./AddCampus'>Add Campus</Link>
                { this.props.allCampuses.campuses.map((item, index) => (
                    <CampusCard 
                        key={ index } 
                        name={ item.campusname } 
                        description={ item.description }
                        address={ item.address }
                        image={ item.imageurl }/>
                ))}
            </div>
            )
            :
            <IsLoading />
        )
    }
}

const mapStateToProps = state => {
    return {
        allCampuses: state.allCampuses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCampuses: () => dispatch(getAllCampuses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusPage);
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllCampuses } from '../redux/reducers';

class IsLoading extends Component {
    render() {
        return(
            <div>
                Loading
            </div>
        )
    }
}

class CampusCard extends Component {

    async componentDidMount(){
        await this.props.getAllCampuses();
    }

    render() {
        return (
            this.props.allCampuses.campus != undefined ? (
            <div>
                <button>View Campus</button>
                <p>Campus Name: { this.props.allCampuses.campus.campusname }</p>
                <img src={ this.props.allCampuses.campus.imageurl } alt='' width="200px" />
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

export default connect(mapStateToProps, mapDispatchToProps)(CampusCard);
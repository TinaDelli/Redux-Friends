import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class Friends extends React.Component {

    componentDidMount(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                {this.props.friends.map(friend => (
                    <div>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ friends }) => ({
    friends
});

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(Friends)
)
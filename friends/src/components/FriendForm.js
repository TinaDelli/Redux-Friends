import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';


class FriendForm extends React.Component{
    state = {
        friend: {
            name: '',
            email: '',
            age: ''
        }
    };

    handleChanges = e => {
        let value = e.target.value;
        if (e.target.name === 'age'){
            value = parseInt(value, 10);
        }

        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
        // .then(() => {
        //     this.props.history.push('/friends');
        // });
        this.setState({
            friends: {
                name:'',
                email: '',
                age: ''
            }
        });
    };

    render(){
        return (
            <div>
                <h2>Add A New Friend</h2>
                <form onSubmit={this.addFriend}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        onChange={this.handleChanges}
                        placeholder="name"
                        value={this.state.friend.name}
                        name="name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        onChange={this.handleChanges}
                        placeholder="email"
                        value={this.state.friend.email}
                        name="email"
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        onChange={this.handleChanges}
                        placeholder="age"
                        value={this.state.friend.age}
                        name="age"
                    />
                <button type="submit">Add Friend</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ addFriend }) => ({
    addFriend
});

export default connect(
    mapStateToProps, 
    { addFriend }
)(FriendForm);
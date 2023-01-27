/*import React from "react";

const UserDetails = ({ user = {} }) => {
    return (
        <div>
            <h3>
                {user.name}
            </h3>
            <h5>
                Email: {user.email}
            </br>
            phone Number: {user.phoneNumber}
        </h5>
        </div >
    );
};*/

import React, { Component } from "react";

/*const UserDetails = ( props ) => {
    let user = props.user;
    return (
        <div>
            <h3>
                {user.name}
            </h3>
            <h5>
                Email: {user.email}
            </br>
            phone Number: {user.phoneNumber}
        </h5>
        </div >
    );
};*/

class UserDetails extends Component {

    render() {
        this.props.user = {
            name: "Alex",
            email: "alex@example.com",
            phoneNumber: "53665683553",
        };
        return (
            <div>
                <h3>
                    {user.name}
                </h3>
                <h5>
                    Email: {this.props.user.email}
                </br>
                phone Number: {this.user.phoneNumber}
            </h5 >
           </div >
        );
    }
}


export default UserDetails;
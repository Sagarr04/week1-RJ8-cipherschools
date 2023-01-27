/*import React from "react";

const AllUserList = () => {
    let allUsers = [
        {
            name: "John",
            email: "john@gmail.com",
            phone: "+91-9876543210"
        },
        { name: "Jonny", email: "jonnyxyz@gmail.com", phone: "+91-9876543210" },
        { name: "Alex", email: "alexxyz@gmail.com", phone: "+91-9878343210" },
    ];
};

let array = [
    <userDetails user={allUsers{0}} />,
        < userDetails user = { allUsers{ 1 }} />,
            < userDetails user = { allUsers{ 2 }} />,
];
return <div>{allUsers[0]}</div>;*/


import React from "react";

const AllUserList extends React.Component {
    state = {
        allUsers =[
            {
                name: "John",
                email: "john@gmail.com",
                phone: "+91-9876543210"
            },
            { name: "Jonny", email: "jonnyxyz@gmail.com", phone: "+91-9876543210" },
            { name: "Alex", email: "alexxyz@gmail.com", phone: "+91-9878343210" },
        ];
    };

//let array = [
//    <userDetails user={allUsers{0}} />,
//        < userDetails user = { allUsers{ 1 }} />,
//           < userDetails user = { allUsers{ 2 }} />,
//];
//return <div>{allUsers[0]}</div>;

render() {
        set Timeout() => {
        this.section({ name: "Abhay Raj Gupta" });
    }; 15000);
    return (
        <div>
            <h1>
                the name is {this.state.name}
            </h1>
            {this.allUsers.map((user, index) => (
                <UserDetails Keys={index} user={user} />
            ))}
        </div>
    );
}
    }


//const AllUserList = () => {
//   constb[state, setState] = useState({ name: "Priyanshu saxena"});
//   return (
//      <h1>
//          the name is{state.name}
//     </h1>
// )
//};

export default AllUserList;
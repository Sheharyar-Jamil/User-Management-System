import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';
import Button from "../UI/Button";

const UsersList = (props) => {

    return(
        <Card className = {classes.users}>
            <h2>User Management System</h2>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} Years Old)
                    <Button onClick = {() => props.onRemove(user.id)}>Remove</Button>
                </li>
            ))}
        </ul>
        </Card>
    );
}
export default UsersList;
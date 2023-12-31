import React, {useState, Fragment} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty value)'
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (age > 0)'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    return(
        <Fragment>
        {error &&<ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
        <Card className = {classes.input}>
        <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </Fragment>
    );
};

export default AddUser;
import Button from "../UI/button";
import Card from "../UI/card";
import classes from './add-user.module.scss';

const AddUser = (props: any) => {
  const addUserHandler = (event: any) => {
    event.preventDefault();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <Button type="submit" onClick={() => {console.log('Clicked');}}>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;
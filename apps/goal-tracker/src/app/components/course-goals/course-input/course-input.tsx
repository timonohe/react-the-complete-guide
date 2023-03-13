import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../ui/button/button';

import './course-input.scss';

type CourseInputProps = {
  onAddGoal: (enteredValue: string) => void
}

const CourseInput = (props: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

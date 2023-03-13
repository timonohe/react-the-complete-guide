import { Goal } from '../../../models/goal';
import CourseGoalItem from '../course-goal-item/course-goal-item';

import './course-goal-list.scss';

type CourseGoalListProps = {
  items: Goal[];
  onDeleteItem: (id: string) => void;
}

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { fetchUserbyId } from "../redux/slices/userSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import "../App.css";


interface TaskId {
  taskId: number;
}
const TaskList = ({ taskId }: TaskId) => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserbyId(taskId));
  }, [taskId]);

  return (
    <div>
      <div className="task-container">
        <h2 className="title">Task List</h2>
        <div>
          {user.tasks?.map(data => (
            <div className="tasklist">
              <div className="tasklist-checkbox">
                <Checkbox
                  defaultChecked={data.completed}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
              </div>
              <div className="tasklist-content">
                <p>{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

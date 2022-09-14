import { useEffect,  } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../redux/slices/userSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import "../App.css";
import TaskList from "./TaskList";
// import TaskList from "./TaskList";

// interface UserId {
//   id: number,
// }
const UserList = () => {
    // const [userTaskId, setUserTaskId]=useState(1)
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

// const onClickUser = (userId: number) => {
//   setUserTaskId(userId);
//   // eslint-disable-next-line no-console
//   console.log(userTaskId);
// };
  return (
    <div className="content-container">
      <div className="user-container">
        <h2 className="title">Users</h2>
        <div>
          {user.users?.map(data => (
            <Link key={data?.id} to={`/user/${data?.id}`}>
              <div
                className="userlist"
                key={data?.id}
              >
                <h4>{data?.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <TaskList taskId={2} />
    </div>
  );
};

export default UserList;

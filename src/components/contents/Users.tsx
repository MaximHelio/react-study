import { usersStore, usersActions } from '../../stores/usersStore';

function Users() {
  // redux랑 다르게, Store의 state값을 복사하는 구조
  const usersState = usersStore((state) => state);
  const user = usersState.user;
  const users = usersState.users;
  // redux랑 다르게 readonly가 아님 => 아래 event.target.name 넣어줘도 안바뀜
  // user.name = "123";
  console.log(user, users);
  return (
    <div>
      <h3>Users</h3>
      <hr className="d-block" />
      <div>
        <h4>Read</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>20</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="d-block" />
      <div>
        <h4>Create</h4>
        <input
          type="text" placeholder="Name" value={user.name}
          onChange={event => {
            user.name = event.target.value;
            usersActions.userSet(user);
          }}
        />
        <input
          type="text" placeholder="Age" value={user.age}
          onChange={event => {
            user.age = event.target.value;
            usersActions.userSet(user);
          }}
        />
        <button onClick={() => {
          // userStore의 usersCreate
          usersActions.usersCreate(user);
        }}>Create</button>
      </div>
    </div>
  );
}

export default Users;
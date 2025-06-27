import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../features/users/userSlice';
import { Link } from 'react-router-dom';

export default function UserList() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add User</Link>
      <ul className="mt-4 space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p><strong>{user.name}</strong></p>
              <p>{user.email}</p>
            </div>
            <div className="space-x-2">
              <Link to={`/edit/${user.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</Link>
              <button onClick={() => dispatch(deleteUser(user.id))} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

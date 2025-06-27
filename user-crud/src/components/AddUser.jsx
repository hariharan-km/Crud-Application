import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../features/users/userSlice';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    dispatch(addUser({ id: users.length + 1, name, email }));
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" className="border p-2 w-full" required />
        <input name="email" placeholder="Email" className="border p-2 w-full" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
}

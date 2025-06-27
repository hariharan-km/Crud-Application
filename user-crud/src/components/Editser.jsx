import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/users/userSlice';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.users.find(u => u.id === parseInt(id)));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, name: e.target.name.value, email: e.target.email.value }));
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" defaultValue={user.name} className="border p-2 w-full" required />
        <input name="email" defaultValue={user.email} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}

import { GoogleAuthProvider , getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSice';
import { useNavigate } from 'react-router-dom';
    import axios from 'axios';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
try {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const result = await signInWithPopup(auth, provider);
  console.log(result);

  const { data } = await axios.post('http://localhost:5000/api/auth/google', 
    {
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
    },
    { withCredentials: true }
  );

  if (!data.token) {
    console.error("Token not received!");
    
    return;
}

// ✅ Store token & user properly
localStorage.setItem('token', data.token);
localStorage.setItem('user', JSON.stringify(data));

dispatch(signInSuccess(data));
navigate('/');
} catch (error) {
  console.log('Could not sign in with Google', error);
}

  };
  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with google
    </button>
  );
}

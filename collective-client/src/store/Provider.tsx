// pages/_app.tsx
import { Provider } from 'react-redux';
import { store } from '../store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

// Example usage in a component:
import { useDispatch, useSelector } from '../hooks/redux';
import { updateBasicInfo, addSkill } from '../store/profileSlice';
import { setCurrentStep } from '../store/uiSlice';
import { saveProfile } from '../store/thunks/profileThunks';

const ProfileEditor: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const { isLoading, error } = useSelector(state => state.ui);

  const handleSave = async () => {
    try {
      await dispatch(saveProfile(profile)).unwrap();
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      
      <button 
        onClick={handleSave}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Save Profile
      </button>
    </div>
  );
};
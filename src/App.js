import './components/UpperNoficiationBar/UpperNotificationBar';
import './App.css';
import HomePage from './Pages/HomePage';
import CelebrationCakePage from './Pages/CelebrationCakePage';
import SingleCakePage from './Pages/SingleCakePage';
import SelectedItems from './Pages/SelectedItems';
import BillingPage from './Pages/BillingPage';

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      {/* <CelebrationCakePage></CelebrationCakePage> */}
      {/* <SingleCakePage></SingleCakePage> */}
      <SelectedItems></SelectedItems>
      {/* <BillingPage></BillingPage> */}
    </div>
  );
}

export default App;

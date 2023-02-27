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
      <Router>
        {/* Add Stable Components Here */}
        <Header />

        <Routes>
          {/* Add Routing Components Here */}
          <Route path='/' element={<HomePage />} />
          <Route path='/celebration_Cake' element={<CelebrationCakePage />} />
          <Route path='/Single_Cake' element={<SingleCakePage />} />
          <Route path='/Selected_Cake' element={<SelectedItems />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

import './App.css';
import ItemDetailContainer from './Components/ItemListContainers/ItemDetailContainer';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainers/ItemListContainer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/navBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
    <Routes>
      <Route path='/ItemListContainer/' element={<ItemListContainer/>}/>
      <Route path="/ItemListContainer/:Categoryid" element={<ItemListContainer/>}/>
      <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}
export default App;
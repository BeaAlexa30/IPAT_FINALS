import React, {useState} from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForms';

const App = () => {
    const [currentItem, setCurrentItem] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleEdit = (item) => {
      setCurrentItem(item);
    };
    const handleDelete = async (id) => {
      try {
        await 
        axios.delete(`http://localhost:8000/api/items/${id}/`);
        setRefresh(!refresh);
      } catch (error) {
        console.error('There was an error deleting the item!', error);
      }
    };
    const handleSuccess = () => {
      setCurrentItem(null);
      setRefresh(!refresh);
    };

  return (
      <div className='App'>
        <ItemForm item={currentItem} onSuccess={handleSuccess}/>
        <ItemList key={refresh} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>
    ); 

};

export default App;

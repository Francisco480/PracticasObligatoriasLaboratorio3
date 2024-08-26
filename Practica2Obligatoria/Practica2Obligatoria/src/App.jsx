import './App.css'
import Table from './components/table/Table';

function App() {
  const netIncomes = [{id: 1, brand: 'McDonalds', income: 1291283}, {id:2, brand: 'Burger King', income: 1927361}, {id:3, brand: 'KFC', income: 1098463}];
  return (
    <>
      <div>
      <Table netIncomes={netIncomes} />
      </div>
    </>
  )
}

export default App

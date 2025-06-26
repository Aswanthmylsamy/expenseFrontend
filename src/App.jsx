import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import react from 'react'
import History from './History.jsx'
import './ExpenseForm.jsx'
import ExpenseForm from './ExpenseForm.jsx'
import ExpenseContainer from './ExpenseContainer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (<>
   <div className='outside'>
{/* <ExpenseContainer /> */}
{/* <Newc /> */}
<ExpenseContainer />
   </div>

   
    </>
)}

export default App

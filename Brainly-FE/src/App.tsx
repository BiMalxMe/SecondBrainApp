import './index.css'

import { Button } from './components/Button'

function App() {

  return (
   <div>
    <h1 className='bg-purple-300'>Hey its me bimal chalse</h1>
    <Button variant='primary' size='lg' text='Hi its bimal'></Button>
    <Button variant='secondary' size='md' text='Hi its bimal'></Button>
    <Button variant='secondary' size='sm' text='Hi its bimal'></Button>

   </div>
  )
}

export default App

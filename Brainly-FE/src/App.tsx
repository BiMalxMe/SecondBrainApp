import './index.css'

import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/Card'

function App() {

  return (
   <div>
    <Button variant='primary' size='md' text='Add Content' startIcon={<PlusIcon size='md' ></PlusIcon>}></Button>
    <Button variant='secondary' size='md' text='Share Brain' startIcon={<ShareIcon size='md'/>}></Button>
    <Card type='twitter' link="https://x.com/TrumpRealDaily/status/1895481474050342971" title="The Unwritten dream"/>
   <Card type='youtube' link="https://www.youtube.com/watch?v=7J3asoSI0fs" title="Testing the youtube Link"/>
   </div>
  )
}

export default App

import React, { useState } from 'react'

import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Footer/>
   </div>
  )
}

export default App

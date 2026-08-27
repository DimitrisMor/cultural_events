import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8080/api/health')
      .then((response) => response.text())
      .then((data) => setStatus(data))
      .catch(() => setStatus('ERROR'))
  }, [])

  return (
    <div>
      <h1>Cultural Events</h1>
      <p>Backend status: {status}</p>
    </div>
  )
}

export default App
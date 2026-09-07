import { useEffect, useState } from 'react'
import keycloak from './keycloak'

function App() {
  const [status, setStatus] = useState('Loading...')
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/health')
      .then((response) => response.text())
      .then((data) => setStatus(data))
      .catch(() => setStatus('ERROR'))

    fetch('http://localhost:8080/api/events', {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch(() => setEvents([]))
  }, [])

  return (
    <div>
      <h1>Cultural Events</h1>

      <p>Backend status: {status}</p>

      <h2>Events</h2>

      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  )
}

export default App
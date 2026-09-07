import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8081',
  realm: 'cultural-events',
  clientId: 'cultural-events-frontend',
})

export default keycloak
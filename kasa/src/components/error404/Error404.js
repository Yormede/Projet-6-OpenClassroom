import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="error">
      <span className="errorTitle">404</span>
      <span className="errorDescription">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="errorLink" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error
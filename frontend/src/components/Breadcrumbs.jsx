import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const path = location.pathname.split('/').filter(Boolean)

  return (
    <nav className="text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:underline text-blue-600 font-medium">Home</Link>
      {path.map((segment, index) => {
        const fullPath = '/' + path.slice(0, index + 1).join('/')
        const isLast = index === path.length - 1
        const name = decodeURIComponent(segment).replace(/-/g, ' ')

        return (
          <span key={index}>
            {' / '}
            {isLast ? (
              <span className="text-gray-800 capitalize">{name}</span>
            ) : (
              <Link to={fullPath} className="hover:underline capitalize text-blue-600">
                {name}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs

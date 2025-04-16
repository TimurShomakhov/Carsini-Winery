import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  return (
    <nav className="text-sm px-6 py-4">
      <ol className="flex space-x-2 text-gray-600">
        <li>
          <Link
            to="/"
            className="text-blue-600 hover:underline font-medium"
          >
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/')
          const isLast = index === segments.length - 1
          return (
            <li key={path} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-900 font-semibold capitalize">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link
                  to={path}
                  className="text-blue-600 hover:underline capitalize"
                >
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

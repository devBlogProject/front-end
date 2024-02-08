import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { TokenAtom } from '../store/TokenAtom'

const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(TokenAtom)
  const currentLocation = useLocation()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ redirecredFrom: currentLocation }} />
  )
}

export default ProtectedRoute

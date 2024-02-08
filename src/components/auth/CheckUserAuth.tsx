import { useRecoilValue } from 'recoil'
import { Navigate, Outlet } from 'react-router-dom'
import { TokenAtom } from '../../store/TokenAtom'

export const CheckUserAuth = () => {
  // TODO: 현재는 한번 로그인하면 반영구적으로 TokenAtom의 value가 true로 저장
  // 향후 토큰정보를 바탕으로 동적으로 TokenAtom의 값을 변경하는 로직 구성 예정
  const isAuthenticated = useRecoilValue(TokenAtom)

  return <>{isAuthenticated ? <Navigate replace to="/" /> : <Outlet />}</>
}

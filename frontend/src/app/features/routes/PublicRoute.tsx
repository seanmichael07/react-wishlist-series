import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function PublicRoute({ children }: any) {
  const accessToken = false;
  const loading = false;
  const location = useLocation();
  const fromLocation = (location.state as any)?.from
  const previousLocation = location.state ? fromLocation : { pathname: 'login'}

    if (!accessToken && !loading) {
      return children
    } else if (loading) {
      return <p>Loading ...</p>
    } else if (accessToken && !loading) {
      return <Navigate to={previousLocation} state={{from: location}} replace />
    } else {
      return <p>Something very bad has gone wrong</p>
    }
}

export default PublicRoute

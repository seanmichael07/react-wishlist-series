import React, { useEffect } from 'react'
import { Outlet } from 'react-router';

function PersistLogin() {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        // dispatchEvent(refreshAccessToken(refreshToken));
        console.log("Refreshin access token")
      } catch (error) {
        console.log("Error refreshing access token")
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken])

  return (
    <>
      {loading ? <p>Loading...</p> : <Outlet />}
    </>
  )
}

export default PersistLogin

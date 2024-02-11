import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function CallApi() {
  const { getAccessTokenSilently } = useAuth0();
  const apiUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const callApi = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(apiUrl + "\protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    callApi();
  }, [getAccessTokenSilently]);

  return <div>Regardez la console pour voir la réponse.</div>;
}

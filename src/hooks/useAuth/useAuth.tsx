import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Routes from 'routes';

function useAuth() {
  const router = useRouter();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tokenFromLocalStorage = localStorage.getItem('TOKEN') || '';
      setToken(tokenFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (router.isReady && router?.query?.session === 'expired') {
        logoutHandler();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.isReady, router?.query]);

  return { token, setToken };

  async function logoutHandler() {
    setToken('');
    localStorage.clear();
    await router.replace({
      pathname: Routes.SIGN_IN,
      query: undefined
    });
  }
}

export default useAuth;

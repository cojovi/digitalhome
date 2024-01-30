import { useEffect } from 'react';
import { NextPage } from 'next';

const Login: NextPage = () => {
  useEffect(() => {
    window.location.href = 'https://www.cojovi.com';
  }, []);

  return null; // No need to render any content
};

export default Login;

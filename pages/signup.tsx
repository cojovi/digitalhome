import { useEffect } from 'react';
import { NextPage } from 'next';

const SignUp: NextPage = () => {
  useEffect(() => {
   window.location.href = 'https://www.cojovi.com';
  }, []);

  return null; // Render nothing while redirecting
};

export default SignUp;

import { loginState, userState } from '@/recoil/state';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const { access, refresh, role } = router.query;
  const [loginData, setLoginData] = useRecoilState(loginState);

  useEffect(() => {
    const accessString: string = access as string;
    const refreshString: string = refresh as string;
    const roleString: string = role as string;

    localStorage.setItem('accessToken', String(access).trim());
    setCookie('refreshToken', refresh);

    setLoginData({
      access: accessString,
      refresh: refreshString,
      role: roleString,
    });

    if (access && refresh && role) {
      if (role === 'ROLE_EMPTY') {
        router.push('/trainer-select');
      } else if (role === 'ROLE_USER' || role === 'ROLE_TRAINER') {
        router.push('/health-management');
      } else {
        router.push('/login');
      }
    }
  }, [access, refresh, role]);

  return (
    <>
      <div>로그인 진행 중입니다.</div>
      <p>Loading ...</p>
    </>
  );
};

const LoginRecoilRoot = () => (
  <RecoilRoot>
    <Login />
  </RecoilRoot>
);

export default LoginRecoilRoot;

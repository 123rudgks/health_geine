import axios from 'axios';
import { loginState } from '@/recoil/state';
import { BASE_URL } from '@/utils/routePath';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';

const Google = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const state = router.query.state as string;
  const [user, setUser] = useRecoilState(loginState);

  const getToken = async () => {
    if (!code) {
      return;
    }

    try {
      const response = await axios.get(
        `https://${BASE_URL}/login/oauth2/code/google?code=${code}&state=${state}`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        }
      );
      const data = response.data.data;
      setUser(data);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('oauthAccessToken', data.oauthAccessToken);

      if (data.role === 'ROLE_EMPTY') {
        router.push('/trainer-select');
        return data;
      } else {
        router.push('/health-management');
        return data;
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div>
        구글 로그인 진행중 ...
        <br />
        Loading...
      </div>
    </>
  );
};

const GoogleWithRecoilRoot = () => (
  <RecoilRoot>
    <Google />
  </RecoilRoot>
);

export default GoogleWithRecoilRoot;

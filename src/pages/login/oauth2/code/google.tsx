import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Kakao = () => {
  const router = useRouter();

  const code = router.query.code as string;
  const state = router.query.state as string;

  const getToken = async () => {
    try {
      await axios
        .get(
          `https://서비스.한국/login/oauth2/code/google?code=${code}&state=${state}`,
          {
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
        .then((response) => {
          const data = response.data.data;
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);

          router.push('/trainer-select');
        });
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  return (
    <>
      <div>구글 로그인 진행</div>
      <p>Loading ...</p>
    </>
  );
};

export default Kakao;

import axios from 'axios';
import { loginState } from '@/recoil/state';
import { BASE_URL } from '@/utils/routePath';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil';
import { getCookie } from 'cookies-next';

const Kakao = () => {
  const router = useRouter();
  //   const code = router.query.code as string;
  //   const state = router.query.state as string;
  //   const [accessToken, setAccessToken] = useRecoilState(loginState.accessToken);
  //   const [refreshToken, setRefreshToken] = useRecoilState(
  //     loginState.refreshToken
  //   );

  //   const getToken = async () => {
  //     try {
  //       const refreshToken = getCookie('refresh');
  //       console.log('Refresh token:', refreshToken);

  //       const response = await axios.get(
  //         `https://${BASE_URL}/login/oauth2/code/kakao?code=${code}&state=${state}`,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json;charset=utf-8',
  //             'Access-Control-Allow-Origin': '*',
  //           },
  //         }
  //       );

  //       const data = response.data.data;
  //       const accessToken = response.headers['Authorization']; // Bearer 부분을 제거하고 accessToken만 가져오기
  //       setAccessToken(accessToken);
  //       setRefreshToken(refreshToken);
  //       console.log(accessToken);
  //       console.log(data);
  //       localStorage.setItem('accessToken', accessToken);

  //       // if (data.role === 'EMPTY') {
  //       //   router.push('/trainer-select');
  //       //   return data;
  //       // } else {
  //       //   router.push('/health-management');
  //       //   return data;
  //       // }
  //     } catch (err) {
  //       console.error('Error:', err);
  //     }
  //   };

  //   useEffect(() => {
  //     getToken();
  //   }, [code]);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <>
      <div>로그인 진행</div>
      <p>Loading ...</p>
    </>
  );
};

const KakaoWithRecoilRoot = () => (
  <RecoilRoot>
    <Kakao />
  </RecoilRoot>
);

export default KakaoWithRecoilRoot;

// import { loginState } from '@/recoil/state';
// import { KEY_LOGIN } from '@/utils/queryKey';
// import { BASE_URL } from '@/utils/routePath';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { useRecoilState } from 'recoil';

// const Google = () => {
//   const router = useRouter();
//   const [user, setUser] = useRecoilState(loginState);
//   const code = router.query.code as string;
//   const state = router.query.state as string;

//   const getToken = async () => {
//     try {
//       await axios
//         .get(
//           `https://${BASE_URL}/login/oauth2/code/google?code=${code}&state=${state}`,
//           {
//             headers: {
//               'Content-Type': 'application/json;charset=utf-8',
//               'Access-Control-Allow-Origin': '*',
//             },
//           }
//         )
//         .then((response) => {
//           const data = response.data.data;
//           // localStorage.setItem('accessToken', data.accessToken);
//           // localStorage.setItem('refreshToken', data.refreshToken);
//           setUser(data);
//           router.push('/trainer-select');

//           return response.data.data;
//         });
//     } catch (err) {
//       console.log('err', err);
//     }
//   };

//   useEffect(() => {
//     getToken();
//   }, [code]);

//   const { data } = useQuery(KEY_LOGIN, () => getToken(), {
//     onSuccess: (data) => console.log(data),
//   });

//   return (
//     <>
//       <div>구글 로그인 진행</div>
//       <p>Loading ...</p>
//     </>
//   );
// };

// export default Google;

import { loginState } from '@/recoil/state';
import { KEY_LOGIN } from '@/utils/queryKey';
import { BASE_URL } from '@/utils/routePath';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil'; // RecoilRoot 불러오기

const Google = () => {
  const router = useRouter();

  const code = router.query.code as string;
  const state = router.query.state as string;

  const [user, setUser] = useRecoilState(loginState);

  const getToken = async () => {
    try {
      const response = await axios.get(
        `https://${BASE_URL}/login/oauth2/code/google?code=${code}&state=${state}`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

      const data = response.data.data;
      setUser(data);
      console.log(data);
      console.log(user);
      localStorage.setItem('accessToken', data.accessToken);
      router.push('/trainer-select');

      return data;
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getToken();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div>구글 로그인 진행</div>
      <p>Loading ...</p>
    </>
  );
};

const GoogleWithRecoilRoot = () => (
  // RecoilRoot로 감싸준 Google 컴포넌트 생성
  <RecoilRoot>
    <Google />
  </RecoilRoot>
);

export default GoogleWithRecoilRoot; // RecoilRoot로 감싸진 Google 컴포넌트를 내보내기

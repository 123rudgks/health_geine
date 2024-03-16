import { BASE_URL } from '@/utils/routePath';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQueryClient, QueryClient } from 'react-query';

const Kakao = () => {
  const router = useRouter();
  // const queryClient = useQueryClient();

  // const getToken = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://서비스.한국/login/oauth2/code/kakao?code=${code}&state=${state}`,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json;charset=utf-8',
  //           'Access-Control-Allow-Origin': '*',
  //         },
  //       }
  //     );
  //     const data = response.data.data;
  //     // queryClient.setQueryData('tokens', data); // accessToken 및 refreshToken 저장
  //     // const { isLoading, isError, data, error } = useQuery({
  //     //   queryKey: ['tokens'],
  //     //   queryFn: response,
  //     // });
  //     router.push('/trainer-select');
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, [code, state]);

  const code = router.query.code as string;
  const state = router.query.state as string;

  const getToken = async () => {
    try {
      await axios
        .get(
          `https://${BASE_URL}/login/oauth2/code/kakao?code=${code}&state=${state}`,
          {
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          // localStorage.setItem('accessToken', data.accessToken);
          // localStorage.setItem('refreshToken', data.refreshToken);

          // router.push('/trainer-select');
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
      <div>카카오 로그인 진행</div>
      <p>Loading ...</p>
    </>
  );
};

export default Kakao;

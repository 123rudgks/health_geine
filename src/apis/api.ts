'use client';
import axios from 'axios';
import { BASE_URL } from '@/utils/routePath';
import Router from 'next/router';

const ACCESS_TOKEN = localStorage.getItem('accessToken');
const OAUTH_ACCESS_TOKEN = localStorage.getItem('oauthAccessToken');

// trainer-select
export const getUser = async (role: string) => {
  const res = await axios.patch(
    `https://${BASE_URL}/users/role`,
    { role: role },
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ` + ACCESS_TOKEN,
      },
    }
  );

  return res.data.data;
};

// my-page
export const withdraw = async () => {
  alert('정말 탈퇴하시겠습니까?');

  try {
    const response = await axios.delete(`https://${BASE_URL}/withdraw`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        OAuthAccessToken: `${OAUTH_ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    localStorage.clear();
    Router.push('/');
    return response.data.data;
  } catch (error) {
    console.error('회원 탈퇴 실패:', error);
  }
};

// email-auth
export const getMail = async (emailValue: string, univNameValue: string) => {
  try {
    const res = await axios.post(
      `https://${BASE_URL}/mail`,
      { univ_email: emailValue, univName: univNameValue },
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    return res.data.data;
  } catch (error) {
    console.error('Error handling mail:', error);
    return null;
  }
};

export const getMailVeri = async (
  emailValue: string,
  univNameValue: string,
  codeValue: string
) => {
  try {
    const res = await axios.get(
      `https://${BASE_URL}/mail/verifications?univ_email=${emailValue}&univName=${univNameValue}&code=${codeValue}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    return {
      message: res.data.message,
      success: res.data.message === '검증이 성공했습니다',
    };
  } catch (error) {
    console.error('Error handling mail verification:', error);
    return null;
  }
};

export const handleVerificationResult = (
  verificationResult: any,
  setVerificationResult: Function,
  setIsCompleteButtonVisible: Function
) => {
  if (verificationResult && verificationResult.success) {
    console.log(verificationResult.message);
    setVerificationResult('인증에 성공했습니다!');
    setIsCompleteButtonVisible(true);
  } else {
    console.log(verificationResult.message);
    setVerificationResult('인증에 실패했습니다');
    setIsCompleteButtonVisible(false);
  }
};

// health-management
export const getTrainerProfileData = async () => {
  const response = await axios.get(
    `https://${BASE_URL}/trainers/profiles/details`,
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ` + ACCESS_TOKEN,
      },
    }
  );
  return response.data.data;
};

export const getUserData = async () => {
  const response = await axios.get(`https://${BASE_URL}/users`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ` + ACCESS_TOKEN,
    },
  });
  return response.data.data;
};

// trainer-list
export const getTrainerProfileList = async () => {
  const response = await axios.get(`https://${BASE_URL}/trainers/profiles`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ` + ACCESS_TOKEN,
    },
  });
  return response.data.data;
};

// trainer-detail
export const getPhotoResponse = async (trainerProfileId: string) => {
  try {
    const response = await axios.get(
      `https://${BASE_URL}/trainers/profiles/${trainerProfileId}/photos`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    const data = response.data.data;

    if (data && Object.keys(data).length > 0) {
      return data;
    } else {
      throw new Error('데이터가 없습니다.');
    }
  } catch (error) {
    console.error('데이터를 불러오는 중 에러가 발생했습니다.', error);
    throw error;
  }
};

export const getTrainerProfileListDetail = async (trainerProfileId: string) => {
  try {
    const response = await axios.get(
      `https://${BASE_URL}/trainers/profiles/details/${trainerProfileId}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const data = response.data.data;

    if (data && Object.keys(data).length > 0) {
      return data;
    } else {
      throw new Error('데이터가 없습니다.');
    }
  } catch (error) {
    console.error('데이터를 불러오는 중 에러가 발생했습니다.', error);
    throw error;
  }
};

// community
export const getCommunityList = async () => {
  try {
    const response = await axios.get(
      `https://${BASE_URL}/community/posts?keyword=&userId=&lastId=&size=`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ` + ACCESS_TOKEN,
        },
      }
    );
    return response.data.data.contents;
  } catch (error) {
    console.log(error);
  }
};

// write-community
export const post = async (titleValue: string, contentValue: string) => {
  if (titleValue.trim() !== '' && contentValue.trim() !== '') {
    try {
      const response = await axios.post(
        `https://${BASE_URL}/community/posts`,
        { title: titleValue, content: contentValue },
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ` + ACCESS_TOKEN,
          },
        }
      );

      alert('정상적으로 글이 저장되었습니다.');
      Router.push('/community');
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert('제목과 내용은 비어있을 수 없습니다.');
  }
};

// chatting/list
export const getChatList = async () => {
  const res = await axios.get(`https://${BASE_URL}/chat/rooms?lastId=&size=`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: ACCESS_TOKEN,
    },
  });
  return res.data.data;
};

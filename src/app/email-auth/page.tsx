'use client';

import Button from '@/components/Button/Button';
import BasicInput from '@/components/Input/BasicInput';
import FillHealth from '@/svgs/FillHealth.svg';
import ErrorCode from '@/svgs/ErrorCode.svg';
import InitInput from '@/app/email-auth/InitInput';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/state';
import { useRouter } from 'next/navigation';
import { getMail, getMailVeri, handleVerificationResult } from '@/apis/api';

interface Props {}

const Page = (props: Props) => {
  const router = useRouter();

  const [univNameValue, setUnivNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [codeValue, setCodeValue] = useState<string>('');
  const [user, setUser] = useRecoilState(userState);
  const [verificationResult, setVerificationResult] = useState<string>('');
  const [isSendButtonDisabled, setIsSendButtonDisabled] =
    useState<boolean>(true);
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] =
    useState<boolean>(true);
  const [isCompleteButtonVisible, setIsCompleteButtonVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (emailValue && univNameValue) {
      setIsSendButtonDisabled(false);
    } else {
      setIsSendButtonDisabled(true);
    }
  }, [emailValue, univNameValue]);

  useEffect(() => {
    if (emailValue && univNameValue && codeValue) {
      setIsVerifyButtonDisabled(false);
    } else {
      setIsVerifyButtonDisabled(true);
    }
  }, [emailValue, univNameValue, codeValue]);

  const fetchMailData = async () => {
    try {
      const data = await getMail(emailValue, univNameValue);
      // setUser(data);
      alert(
        '이메일로 코드가 전송되었습니다. 전송된 인증 코드를 아래에 입력해주세요.'
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchVeriData = async () => {
    try {
      const data = await getMailVeri(emailValue, univNameValue, codeValue);
      handleVerificationResult(
        verificationResult,
        setVerificationResult,
        setIsCompleteButtonVisible
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUnivChange = (value: string) => {
    setUnivNameValue(value);
  };

  const handleUnivDelete = () => {
    setUnivNameValue('');
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handleEmailDelete = () => {
    setEmailValue('');
  };

  const handleCodeChange = (value: string) => {
    setCodeValue(value);
  };

  const handleCodeDelete = () => {
    setCodeValue('');
  };

  return (
    <div className="flex h-[100vh] flex-col justify-center px-6">
      <p className="font-regular justify-start font-noto text-[14px] text-primary-400 underline">
        다음에 다시 인증할래요!
      </p>
      <div className="py-[50px]">
        <div className="mb-4 flex">
          <h1 className="justify-start font-noto text-[25px] font-bold text-primary-400">
            이메일을 인증해주세요!
          </h1>
          <div className="-mt-4">
            <FillHealth />
          </div>
        </div>
        <p className="mb-1 flex justify-end font-noto text-[10px] font-light text-[#c1c1c1]">
          학교 이메일을 정확히 기재해주세요.
        </p>

        <div className="flex flex-col gap-2">
          <BasicInput
            _inputProps={{
              placeholder: '이메일을 인증하세요.',
            }}
            _rightNode={<InitInput onClick={handleEmailDelete} />}
            _onChange={handleEmailChange}
            _value={emailValue}
          />
          <BasicInput
            _state="default"
            _inputProps={{
              placeholder: '대학명을 입력하세요.',
            }}
            _rightNode={<InitInput onClick={handleUnivDelete} />}
            _onChange={handleUnivChange}
            _value={univNameValue}
          />
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              fetchMailData();
            }}
            ring="none"
            color="white"
            background={isSendButtonDisabled ? 'primary-100' : 'primary-400'}
            disabled={isSendButtonDisabled}
            className="my-4 h-[24px] w-[111px] rounded-[4px] font-noto text-[13px] font-semibold"
          >
            인증 코드 전송
          </Button>
        </div>
        <BasicInput
          _state="default"
          _inputProps={{ placeholder: '인증 코드를 입력하세요.' }}
          _rightNode={<InitInput onClick={handleCodeDelete} />}
          _onChange={handleCodeChange}
          _value={codeValue}
        />
        <div className="flex justify-between">
          {verificationResult === '인증에 실패했습니다' ? (
            <div className="mt-2 flex items-start">
              <ErrorCode />
              <p className="ml-2 text-[11.04px] text-[#F44B4B]">
                {verificationResult}
              </p>
            </div>
          ) : (
            <p></p>
          )}
          <Button
            onClick={() => {
              fetchVeriData();
            }}
            ring="none"
            background={isVerifyButtonDisabled ? 'primary-100' : 'primary-400'}
            disabled={isVerifyButtonDisabled}
            color="white"
            className="my-4 h-[24px] w-[111px] rounded-[4px] font-noto text-[13px] font-semibold"
          >
            인증 확인 하기
          </Button>
        </div>

        {isCompleteButtonVisible && (
          <Button
            onClick={() => {
              router.push('/health-management');
            }}
            ring="none"
            background="primary-400"
            disabled={isVerifyButtonDisabled}
            color="white"
            className="my-4 h-[35px] w-[146px] rounded-[4px] font-noto text-[21px] font-semibold"
          >
            완료하기
          </Button>
        )}
      </div>

      <hr color="#f3f3f3" />
      <div>
        <h1 className="my-4 font-noto text-[21px] font-bold text-black">
          이메일이 오지 않아요!
        </h1>
        <p className="font-regular font-noto text-[13px] text-black">
          이메일 수신까지 일정 시간이 소요될 수 있습니다. 오랜시간이 지난 후에도
          도착하지 않는다면, 아래 사항을 확인해주세요.
          <br />
          <br />
          <b>·</b> 이메일 주소가 맞는지 확인 (예: example@knu.ac.kr)
          <br />
          <b>·</b> 스팸 메일함, 스팸 설정, 남은 용량 등 확인
          <br />
          <b>·</b> 다른 개인 이메일로 학교 이메일에 메일을 발송하여, 정상적으로
          수신 되는지 확인
        </p>
      </div>
    </div>
  );
};
export default Page;

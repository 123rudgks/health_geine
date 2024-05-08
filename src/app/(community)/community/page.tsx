'use client';
import BottomNavigationBar from '@/components/BottomNavigationBar/BottomNavigationBar';
import TopBottomBarTemplate from '@/components/Template/TopBottomBarPage';
import BackSpaceArrow from '@/svgs/BackSpaceArrow.svg';
import HotSpring from '@/svgs/HotSpring.svg';
import Like from '@/svgs/FillLike.svg';
import Box from '@/components/Box/Box';
import CommunityListItem from '@/components/pages/community/CommunityListItem';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { ICommunityListContent, communityListState } from '@/recoil/state';
import { useQuery } from '@tanstack/react-query';
import { KEY_COMMUNITY_LIST } from '@/utils/queryKey';
import { getCommunityList } from '@/apis/api';
import Fab from '@/components/FAB/Fab';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();

  const [communityListData, setCommunityListData] =
    useRecoilState(communityListState);

  const { data: communityDataQuery } = useQuery(
    KEY_COMMUNITY_LIST,
    getCommunityList,
    {
      onSuccess: (data) => setCommunityListData(data),
    }
  );

  return (
    <TopBottomBarTemplate
      _topNode={
        <div className="relative flex h-full w-full items-center bg-white">
          <div className="absolute left-[22px]">
            <BackSpaceArrow
              onClick={() => {
                router.back();
              }}
            />
          </div>
          <div className="flex flex-1 justify-center font-noto text-[18px] font-bold text-black">
            커뮤니티
          </div>
        </div>
      }
      _bottomNode={<BottomNavigationBar />}
      _contentDivProps={{ className: 'bg-white' }}
    >
      <div className="flex flex-col items-center justify-center pb-[100px]">
        <Box className="my-6 flex w-[328px] justify-between rounded-[6px] bg-primary-400 p-3 font-noto">
          <div className="flex items-center gap-4">
            <HotSpring />
            <h1 className="text-[13px] font-bold text-white">
              한 달 만에 10kg 뺀 썰 푼다.
            </h1>
          </div>
          <div className="flex items-end gap-1">
            <Like width={11} height={11} />
            <span className="font-regular font-noto text-[7px] text-[#F44B4B]">
              37
            </span>
          </div>
        </Box>
        {communityDataQuery &&
          communityDataQuery.map(
            (item: ICommunityListContent, index: number) => (
              <div key={item.id}>
                <Link
                  href={{
                    pathname: `/community-detail`,
                    query: { id: item.id },
                  }}
                >
                  <CommunityListItem
                    key={item.id}
                    id={item.id}
                    createdDate={item.createdDate}
                    title={item.title}
                    content={item.content}
                    writer={item.writer}
                  />
                </Link>
              </div>
            )
          )}
      </div>

      <Fab
        _imageName="edit"
        _onClick={() => {
          router.push('/write-community');
        }}
      />
    </TopBottomBarTemplate>
  );
};
export default Page;

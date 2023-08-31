// 'use client';
// import Box from '@/components/Box/Box';
// import ProgressBar from '@/components/ProgressBar/ProgressBar';
// import { useState } from 'react';
// import CheckBoxList from './CheckBoxList';
// import Button from '@/components/Button/Button';
// import { Question } from './page';
'use client';
import Box from '@/components/Box/Box';
import CheckBoxList from './CheckBoxList';
import Button from '@/components/Button/Button';
import { Question } from './page';

// interface LayoutProps {
//   id: string;
//   dataset: Question[];
//   main: string;
// }

// const Layout = ({ id, dataset }: LayoutProps) => {
//   return (
//     <>
//       <div className="flex min-h-screen items-center justify-center bg-primary-400">
//         <div className="flex flex-col">
//           <h1 className="px-4 py-2 text-start text-[20px] font-[600] text-white">
//             나만의 요청서 작성하기
//           </h1>
//           <Box
//             ring="none"
//             className="h-[440.38px] w-[348px] items-center rounded-[17px] bg-white p-[38px]"
//           >
//             <p className="text-[10px] font-[300] text-[#898989]">
//               질문에 응하시면 맞춤형 견적을 보내드려요 !
//             </p>
//             {dataset &&
//               dataset.map((item) => (
//                 <div key={`${id}-${item['id']}`} id={item['id']}>
//                   <h1 className="text-[17px] font-[600]">{item.desc}</h1>
//                   <ProgressBar
//                   className="h-[9.02px]"
//                   percentage={currentPercentage}
//                 />
//                 </div>
//               ))}
//             <CheckBoxList />
//           </Box>
//           <Button
//             ring="none"
//             color="white"
//             background="none"
//             className="mt-[12px] text-[12px] font-[600px]"
//           >
//             다음에 다시 할게요
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-primary-400">
        <div className="flex flex-col">
          <h1 className="px-4 py-2 text-start text-[20px] font-[600] text-white">
            나만의 요청서 작성하기
          </h1>
          <Box
            ring="none"
            className="h-[440.38px] w-[348px] items-center rounded-[17px] bg-white p-[38px]"
          >
            <p className="text-[10px] font-[300] text-[#898989]">
              질문에 응하시면 맞춤형 견적을 보내드려요 !
            </p>
            
            <CheckBoxList />
          </Box>
          <Button
            ring="none"
            color="white"
            background="none"
            className="mt-[12px] text-[12px] font-[600px]"
          >
            다음에 다시 할게요
          </Button>
        </div>
      </div>
    </>
  );
};
export default Layout;

'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
// export const queryClient = new QueryClient();

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// });

// persistQueryClient({
//   queryClient,
//   persister,
// });
const queryClient = new QueryClient();

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [client] = useState(() => new QueryClient());
  // 기본 옵션들을 핸들링 할 수 있음.

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};

export default ReactQueryClientProvider;

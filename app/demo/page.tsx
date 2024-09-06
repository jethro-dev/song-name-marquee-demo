import { DemoList } from '@/components/demo-list';
import { DemoListRaw } from '@/components/demo-list-raw';
import SetControls from '@/components/set-controls';
import { SetHeader } from '@/components/set-header';
import { SetMinibar } from '@/components/set-mini-bar';
import React from 'react';

type Props = {};

const DemoPage = (props: Props) => {
  return (
    <>
      <SetMinibar />
      <SetHeader />
      <div className="container max-w-3xl mb-10 mt-0 md:mt-20 lg:-mt-40 relative z-0">
        <DemoList />
      </div>
      {/* <DemoListRaw /> */}
    </>
  );
};

export default DemoPage;

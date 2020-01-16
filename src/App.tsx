import React from 'react';
import Tester from './Tester';
import Loading from './Loading';
import SkeletonFrame from './SkeletonFrame';

const App: React.FC = () => {
  return (
    <div>
      <Tester />
      <Loading />
      <SkeletonFrame />
    </div>
  );
}

export default App;

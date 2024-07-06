import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <ClipLoader size={150} color={"#FFD700"} loading={true} />
    </div>
  );
};

export default Spinner;

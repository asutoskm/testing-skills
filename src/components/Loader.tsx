"use client"
import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="loader">
      <Image src="/icons/gear-spinner.svg" alt="Loading..." width={50} height={50} />
    </div>
  );
};

export default Loader;
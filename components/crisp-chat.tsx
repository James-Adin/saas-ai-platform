'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('210d7971-7caa-4610-8fa8-69478c0ac997');
  }, []);

  return null;
};

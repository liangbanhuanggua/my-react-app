import { ButtonHeadlessContext, useButtonLogic } from './hooks';

import type { FC, PropsWithChildren } from 'react';

const ButtonHeadless: FC<PropsWithChildren> = (props) => {
  const value = useButtonLogic();

  return (
    <ButtonHeadlessContext.Provider value={value}>
      {props.children}
    </ButtonHeadlessContext.Provider>
  );
};

export default ButtonHeadless;

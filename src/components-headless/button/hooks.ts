import { isFunction } from 'lodash';
import { useState, createContext, useContext } from 'react';

import type { ClickHandler } from './interface';

const ButtonHeadlessContext = createContext(
  {} as ReturnType<typeof useButtonLogic>
);

const useButtonHeadlessContext = () => useContext(ButtonHeadlessContext);

const useButtonLogic = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onClick?: ClickHandler
  ) => {
    if (!isFunction(onClick) || loading || disabled) {
      return;
    }

    setLoading(true);
    try {
      await onClick(event);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    disabled,
    setDisabled,
    handleClick,
  };
};

export { ButtonHeadlessContext, useButtonHeadlessContext, useButtonLogic };

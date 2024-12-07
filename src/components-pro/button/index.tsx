import { Spin } from 'antd';
import classnames from 'classnames';
import { isNil } from 'lodash';

import {
  ButtonHeadless,
  useButtonHeadlessContext,
} from '@/components-headless';

import styles from './style.module.scss';

import type { ButtonProps } from './interface';
import type { FC } from 'react';

const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;

  const { loading, handleClick } = useButtonHeadlessContext();

  return (
    <button
      className={classnames({
        [styles['button-wrapper']]: true,
        [className!]: !isNil(className),
        [styles.disabled]: loading,
      })}
      disabled={loading}
      onClick={(event) => handleClick(event, onClick)}
    >
      <Spin size="small" spinning={loading} className={styles.spinning} />
      {children}
    </button>
  );
};

const ButtonDefault: FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <ButtonHeadless>
      <Button {...otherProps}>{children}</Button>
    </ButtonHeadless>
  );
};

export default ButtonDefault;

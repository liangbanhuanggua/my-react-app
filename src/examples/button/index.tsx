import { Button } from '@/components';
import type { ClickHandler } from '@/components-headless';
import { Button as ButtonPro } from '@/components-pro';
import { delay } from '@/utils';

import styles from './style.module.scss';

const ButtonExample = () => {
  const handleClick: ClickHandler = async (event) => {
    console.log('event', event);
    await delay(3000);
  };

  return <Button onClick={handleClick}>普通按钮</Button>;
};

const ButtonProExample = () => {
  const handleClick: ClickHandler = async (event) => {
    console.log('event', event);
    await delay(3000);
  };

  return <ButtonPro onClick={handleClick}>Pro按钮</ButtonPro>;
};

const Demo = () => {
  return (
    <>
      <h3>Headless 按钮封装 Demo</h3>

      <div className={styles['button-demo-wrapper']}>
        <div>
          <ButtonExample />
        </div>
        <div>
          <ButtonProExample />
        </div>
      </div>
    </>
  );
};

export default Demo;

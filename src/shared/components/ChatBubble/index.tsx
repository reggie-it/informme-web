import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import tyingImage from './typing.svg';

export enum alignmentType {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

type Props = {
  alignment: alignmentType,
  message: string,
  key: string
}

const ChatBubble = (props: Props) => {

  const { alignment } = props;
  const aligntLeft = alignment === alignmentType.LEFT;
  const [typing, setTypingValue] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTypingValue(false);
    }, 2000);
  }, [typing]);

  return (
    <div key={props.key} className={aligntLeft ? styles.containerLeft : styles.containerRight}>
      <div className={styles.messageContainer}>
        <div className={styles.avatar}></div>
        <div className={styles.bubble}>
          <div className={styles.name}>
            InfoMan:
          </div>
          {
            typing ?
              <div className={styles.typingContainer}>
                  <img src={tyingImage}></img>
              </div>
              :
              <p className={styles.message}>
                {props.message}
              </p>
          }
        </div>
      </div>
    </div>
  );
}
export default ChatBubble;
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ChatBubble, { alignmentType } from '../../shared/components/ChatBubble';

type Props = {
  messages?: ChatModel[];
}

type ChatModel = {
  from: string
  messageType: string,
  message: string,
}

const NewStarter = (props: Props) => {

  const [thread, addMessage] = useState(props.messages || []);

  useEffect(() => {
    setInterval(() => {
      console.log('yo');
      addMessage([...thread,
      {
        from: "InfoMan",
        messageType: "type1",
        message: Math.random().toString(),
      }]);
    }, 4000);
  }, [thread])

  console.log('render');

  return (
    <div className={styles.container}>
      {thread.map((item,index) =>
        <ChatBubble key={index.toString()} alignment={alignmentType.LEFT} message={item.message}></ChatBubble>)
      }
    </div>
  );
}
export default NewStarter;

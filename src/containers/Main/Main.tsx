import { useState, useEffect } from 'react';

import Layout from '../../components/Layout/Layout';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

import styles from './Main.module.scss';

interface MainProps {
  data: {
    question: string,
    firstReply: string,
    secondReply: string
  },
  buttonTypes: {
    yes: string,
    no: string,
    reset: string
  }
}

const Main = ({ data, buttonTypes }: MainProps) => {
  const [answer, setAnswer] = useState('');
  const [reply, setReply] = useState('');

  useEffect(() => {
    switch(answer) {
      case buttonTypes.yes:
        return setReply(data.firstReply);
      case buttonTypes.no:
        return setReply(data.secondReply);
      case buttonTypes.reset:
        return setReply('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer])

  return (
    <Layout>
      <Title text={data.question} classname={styles.title}/>
      {!reply ? (
        <div className={styles.buttonsWrapper}>
          <Button 
            text={buttonTypes.yes} 
            onClick={() => setAnswer(buttonTypes.yes)} />
          <Button 
            text={buttonTypes.no} 
            onClick={() => setAnswer(buttonTypes.no)} />
        </div>
      ) : (
        <div className={styles.reply}>{reply}</div>
      )}
      {!!reply && (
        <Button 
          text={buttonTypes.reset}
          classname={styles.resetBtn}
          onClick={() => setAnswer(buttonTypes.reset)} />
      )}
    </Layout>
  )};

export default Main;
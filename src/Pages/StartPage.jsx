import { useEffect, useState } from 'react';
import StartPageFirst from '../Components/StartPage/StartPageFirst';
import StartPageSecond from '../Components/StartPage/StartPageSecond';

export default function StartPage() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 1500);
  });

  return <div>{showElement ? <StartPageFirst /> : <StartPageSecond />}</div>;
}

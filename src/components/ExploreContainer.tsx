import React from 'react';
import './ExploreContainer.css';

export interface ExploreContainerProps {
  say?: string;
}

const ExploreContainer: React.FC<ExploreContainerProps> = ({ say = 'hello' }) => {
  const hello = () => {
    alert(say);
  }

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <button onClick={hello}>CLICK ME</button>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;

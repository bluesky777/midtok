import { useRef, useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import VideoPlayerAction from './VideoPlayerActions';

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const { current: videoEl } = videoRef;
    playing ? videoEl.pause() : videoEl.play();

    setPlaying(!playing);
  };

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={videoRef}
        src={src}
      />
      <i className={playerClassName} />
      <VideoPlayerAction />
    </div>
  );
}

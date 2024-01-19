import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

import './styles.css';

export function Intro() {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleVideo() {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }

  return (
    <div className='app__video'>
      <video
        ref={videoRef}
        src={meal}
        controls={false}
        loop
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {
            playVideo
              ? <BsPauseFill color='#fff' fontSize={30} />
              : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
    </div>
  );
}

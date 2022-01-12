import { setTextRange } from 'typescript';
import VideoPlayer from '../VideoPlayer/index.jsx';
import styles from './styles.module.css';

const VIDEOS = [
  {
    id: 1,
    author: 'rauzotaku',
    description: 'Hora de llorar',
    likes: 123,
    shares: 21,
    comments: 33,
    songTitle: 'sonido original - rauzo',
    albumCover:
      'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a471b6d000389b5e445fd668d8d6111c.jpeg?x-expires=1641992400&x-signature=c05uKOhLn1Xqv51jlLkVyVjT6w0%3D',
    src: 'https://v16-webapp.tiktok.com/cb23e1d6a4ef44dcac9b86f236f58a3a/61dfb264/video/tos/useast2a/tos-useast2a-ve-0068c002/67026e2d48d748cf90ce88f7a0da8e05/?a=1988&br=3312&bt=1656&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=2022011223021701022312814110659704&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBzOTc6ZjVoOTMzNzgzM0ApODw7ODM4Zzw2NzUzNTM6NGdgZ3BkcjRvX19gLS1kLzZzc2ItNDM1LS0tNV4vY2ExM2A6Yw%3D%3D&vl=&vr=',
  },
  {
    id: 2,
    author: 'balinut',
    description: '#jujutsukaisen #gojousatoru 🍭',
    likes: 201,
    shares: 50,
    comments: 107,
    songTitle: 'sonido original - rauzo',
    albumCover:
      'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a471b6d000389b5e445fd668d8d6111c.jpeg?x-expires=1641992400&x-signature=c05uKOhLn1Xqv51jlLkVyVjT6w0%3D',
    src: 'https://v16-webapp.tiktok.com/407a5779141423f0e0dd89461d4d7bde/61dfb359/video/tos/useast2a/tos-useast2a-ve-0068c001/55e6025a3fa14f8a8fcc8bdd325fe823/?a=1988&br=3112&bt=1556&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=202201122306020102230801500B6613FC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY4aWY6ZnBsOTMzNzczM0ApZTpoZzRlNWU4NzNnNzs8N2dnMmFncjRvXmBgLS1kMTZzczQ0YDI2NDFjYF8uMi40YV46Yw%3D%3D&vl=&vr=',
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video}></VideoPlayer>
      </div>
    );
  });
}

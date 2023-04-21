import { navItems } from "@/utils/menu-items";
import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from 'clsx';

import styles from "./../styles/modules/header.module.scss"
import Image from "next/image";

import youtubeIcon from './../../public/images/youtube-white.png';
import spotifyIcon from './../../public/images/spotify-white.png';
import instaIcon from './../../public/images/insta-white.png';

const Header = () => {
  
  const router = useRouter();

  return (
    <>

    <div className={'header flex items-center'}>

      <h1 className={`${styles.mainTitle} anton`}>JODOCK</h1>

      <div className={'socials flex justify-end items-center grow'}>

      <a 
          target="_blank"
          className="transition duration-200 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
          href="https://www.instagram.com/jodock_/">
          <Image src={instaIcon} alt="Instagram Icon" height={24}></Image>
        </a>

        <a 
          target="_blank"
          className="ml-2 transition duration-200 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
          href="https://www.youtube.com/channel/UCvNLwSit5EEW-f3d57h52EQ">
          <Image src={youtubeIcon} alt="Youtube Icon" height={22}></Image>
        </a>

        <a
          target="_blank"
          className="ml-2 transition duration-200 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
          href="https://open.spotify.com/artist/2Eiguv5Jr9pBKpR0qdDZ5N?si=QJwOJaSWSziYL0-ZfET0ig">
          <Image src={spotifyIcon} alt="Spotify Icon" height={24}></Image>
        </a>
      </div>
      
    </div>

    {/* <nav className={styles.nav}>

      {navItems.map((item, index) => {
        return (
          <Link 
            key={index}
            href={item.path}
            data-text={item.path}
            className={`
              ${styles.navItem}
              ${clsx({
                [`glitch ${styles.active}`]: router.pathname === item.path,
              })}
            `}>
              {item.name}
          </Link>
        )
      })}

    </nav> */}
    </>
  )
}

export default Header;
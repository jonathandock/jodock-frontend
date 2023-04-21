import Layout from '@/components/Layout';
import styles from "./../styles/modules/home.module.scss";
import Section from '@/components/Section';
import Header from '@/components/Header';
import Image from 'next/image';

import jodock from './../../public/images/jodock.jpg';


/** https://tympanus.net/codrops/2022/09/19/menu-to-grid-layout-animation/ */

const Home = () => (
  <>
    <Layout 
      title="JODOCK"
      description="Site officiel de JODOCK | auteur, compositeur, interprète"
    >
      <Section fullscreenHeight={true} verticalFlex={true}>

        <div className='max-w-lg mx-auto'>
        
          <Header></Header>
          <div className='shrink-0 content '>
            <div className='p-6 bg-white rounded-2xl drop-shadow-lg my-6'>
              <div className='sm:block md:flex'>
                {/* <div className='mb-6 md:mb-0 md:mr-6 grow'>
                  <Image className='md:rounded-full' src={jodock} alt="Photo de JODOCK" width={150} height={150}></Image>
                </div> */}
                <div>
                  <p className='merriweather leading-6 text-sm'>
                    JODOCK est un artiste auto-produit dont la musique pop accrocheuse est une véritable extension de son être.
                    <br></br>
                    Ses textes sincères et introspectifs sont le fruit d&apos;une exploration intime de sa propre expérience de vie, ainsi que d&apos;une volonté de toucher les gens dans leur for intérieur.
                    <br></br>
                    À travers ses chansons, JODOCK aborde des sujets tels que l&apos;amour, la perte, la douleur, l&apos;espoir et la résilience.
                    <br></br>
                    En exprimant ses émotions de manière honnête et authentique, JODOCK crée une connexion émotionnelle forte avec ses auditeurs et fait de sa musique une véritable force positive dans le monde.
                  </p>
                </div>

              </div>
            </div>

            <div className=''>
              <div className='mb-6 drop-shadow-lg'>
                <iframe className={styles.player} src="https://www.youtube.com/embed/PrsxHTHuVr4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
              <div className='mb-6 drop-shadow-lg'>
                <iframe className={styles.player} src="https://www.youtube.com/embed/kqppeq9KLjY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>
          </div>

          <div className='footer'>
            <div className='drop-shadow-lg'>
              <iframe className={styles.player} src="https://open.spotify.com/embed/playlist/3VH8uZjCtGyddy5Xby0c3J?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </Section>
      

      {/* <div className="menu">
        <ul>
          <li>Musique</li>
          <li>Concerts</li>
          <li>Présentation</li>
        </ul>
      </div> */}
      {/* <div className={styles.homeBackground}>
        <Section 
          verticalAlign={true}
          fullscreenHeight={true}
          alignItemsCenter={true}
        >
          <h1
            className={`glitch ${styles.mainTitle}`}
            data-text="jodock"
          >
            jodock
          </h1>
        </Section>
      </div> */}
    </Layout>
  </>
)

export default Home;

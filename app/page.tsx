'use client';
import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import AboutMe from '@/components/AboutMe/AboutMe';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import useParticles from '@/hooks/useParticles';
import useInfoLog from '@/hooks/useInfoLog';
import MyWork from '@/components/MyWork/MyWork';
import Script from 'next/script';

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useParticles();
  useInfoLog();
  const [whichSection, setWhichSection] = useState('');
  const Section = (): JSX.Element | null => {
    switch (whichSection) {
      case 'aboutMe':
        return <AboutMe />;
      case 'contact':
        return <ContactForm />;
      case 'myWork':
        return <MyWork />;
      default:
        return <div />;
    }
  };

  return (
    <div className={styles.root}>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-112911264-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'UA-112911264-1');
          `}
      </Script>
      <div id="particles-js" className={styles.particles} />
      <Header setWhichSection={setWhichSection} />
      <Section />
      <Footer />
    </div>
  );
}
import React from 'react';
import Head from 'next/head';
// import { Inter } from '@next/font/google';
import PropTypes from 'prop-types';
import styles from '@/styles/Home.module.css';
import Header from '../Header';

// const inter = Inter({ subsets: ['latin'] });

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="e-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

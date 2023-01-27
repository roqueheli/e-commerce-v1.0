import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <Layout>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.node.isRequired,
};

export default MyApp;

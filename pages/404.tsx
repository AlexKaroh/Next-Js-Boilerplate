import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const FourOfFourPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common', 'header']))
  }
});

export default FourOfFourPage;

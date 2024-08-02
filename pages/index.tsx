import { FC } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Index from 'components/Index/Index';
const IndexPage: FC = () => {
  return <Index />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common', 'header']))
  }
});

export default IndexPage;

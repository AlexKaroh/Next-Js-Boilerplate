import { FC } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage: FC = () => {
  return <>Sign In</>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'ru', ['common', 'header']))
  }
});

export default IndexPage;

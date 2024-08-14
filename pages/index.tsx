import type { FC } from "react";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Index from "pages/Index/Index";
const IndexPage: FC = () => {
	return <Index />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale || "en", ["common", "header"])),
	},
});

export default IndexPage;

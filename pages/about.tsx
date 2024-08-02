import type { FC } from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const IndexPage: FC = () => {
	return <></>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale || "en", ["common", "header"])),
	},
});

export default IndexPage;

import type { FC } from "react";

import { useTranslation } from "next-i18next";

import styles from "./styles.module.scss";

const Index: FC = () => {
	const { t } = useTranslation("common");

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<h2>{t("title")}</h2>
				<p>{t("description")}</p>
			</div>
		</div>
	);
};

export default Index;

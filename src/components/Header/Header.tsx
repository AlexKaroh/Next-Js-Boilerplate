import type { FC } from "react";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import Routes from "routes";

import styles from "./styles.module.scss";

const Header: FC = () => {
	const router = useRouter();
	const { t } = useTranslation("header");
	console.log(styles);
	return (
		<div className={styles.container}>
			<div>
				<div>Logo</div>
			</div>
			<div className={styles.menu}>
				<Link href={Routes.HOME}>{t("Home")}</Link>
				<Link href={Routes.ABOUT}>{t("About")}</Link>
			</div>
			<div>
				<button type="button" onClick={() => handleSwitchLanguage("en")}>
					EN
				</button>
				<button type="button" onClick={() => handleSwitchLanguage("de")}>
					DE
				</button>
			</div>
		</div>
	);

	async function handleSwitchLanguage(lang: string) {
		await router.push(router.asPath, undefined, { locale: lang });
	}
};

export default Header;

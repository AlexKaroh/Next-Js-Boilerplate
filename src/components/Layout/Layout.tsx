import type { FC, ReactElement } from "react";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

import styles from "./styles.module.scss";

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;

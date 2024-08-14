import type { FC, ReactElement } from "react";

import styles from "./styles.module.scss";
import Header from 'common/layout/Header/Header';
import Footer from 'common/layout/Footer/Footer';

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

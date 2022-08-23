import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "./layout.module.css";

export const siteTitle = "Vault RPG";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/vault-favicon.png" />
				<meta name="description" content="The official Vault ttrpg website." />
				<meta name="og:title" content={siteTitle} />
			</Head>
			<header className={styles.header}>{home ? <></> : <></>}</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}

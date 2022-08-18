import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout, { siteTitle } from "../components/layout";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/vault-favicon.png" />
			</Head>

			<section className="">
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	);
}

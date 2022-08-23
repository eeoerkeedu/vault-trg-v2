import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo from "../public/VaultLogoforsite.png";
import Layout, { siteTitle } from "../components/layout";
import styled, { css } from "styled-components";

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;

	${(props) =>
		props.primary &&
		css`
			background: palevioletred;
			color: white;
		`};
`;

export default function Home() {
	return (
		<Layout home>
			<section className="">
				<Image src={logo} id="logo"></Image>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<Button>I'm a button</Button>
				<Button primary>Prime button</Button>
			</section>
		</Layout>
	);
}

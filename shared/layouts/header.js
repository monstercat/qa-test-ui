import "~/shared/css/_base.less"
import Head from "next/head"

export default function Header({
	title
}) {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
			<meta name="title" content="Monstercat QA Test" />
			<meta name="description" content="Test site for QA positions" />
			<meta name="keywords" content="qa, monstercat, test" />
			<meta name="robots" content="index, follow" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="language" content="English" />
			<meta name="author" content="Monstercat Inc." />
		</Head>
	)
}
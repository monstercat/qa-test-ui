import "./_logged-layout.less"
import Header from "./header"
import Footer from "./footer"

export default function LoggedLayout({
	children
}) {
	return (
		<div className="logged-layout">
			<Header title="Monstercat - Welcome" />

			<main>
				{children}
			</main>

			<Footer />
		</div>
	)
}
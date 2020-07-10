import "./_login-layout.less"
import Header from "./header"
import Footer from "./footer"

export default function LoginLayout({
	children
}) {
	return (
		<div className="login-layout">
			<Header title="Logn Page" />

			<main>
				{children}
			</main>

			<Footer />
		</div>
	)
}
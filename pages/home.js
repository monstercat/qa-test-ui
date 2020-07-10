import LoggedLayout from "~/shared/layouts/logged-layout"

export default function Home() {
	return (
		<LoggedLayout>
			<p className="alert alert-success">
				Congratulations. You were succesfully logged!
			</p>
		</LoggedLayout>
	)
}
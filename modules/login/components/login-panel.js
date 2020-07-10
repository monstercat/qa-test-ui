import "./_login-panel.less"
import Card from "~/shared/components/panels/card"
import Row from "~/shared/components/grids/row"
import Col from "~/shared/components/grids/col"
import Button from "~/shared/components/buttons/button"
import LoginApi from "../api/login-api"
import TextInput from "~/shared/components/forms/text-input"
import Link from 'next/link'
import useForm from "~/shared/components/forms/use-form"
import {STATUSES} from "~/shared/utils/statuses"
import FormStatus from "~/shared/components/forms/form-status"
import {go} from "~/shared/utils/routes"


export default function LoginPanel() {

	const {
		data,
		setFormField,
		submit,
		status,
	} = useForm({
		submitFn: logUser
	})

	async function logUser(data) {
		await LoginApi.LogUser(data)
		go("/home")
	}

	return (
		<Card className="login-panel">
			<Row className="mb-20">
				<Col className="mb-10">
					<h1>Monstercat</h1>
				</Col>
				<Col>
					<FormStatus status={status} />

					<TextInput
						value={data.Login}
						name="Login"
						label="Login"
						onChange={(e) => setFormField("Login", e.target.value)}
					/>
					<TextInput
						value={data.Password}
						name="Password"
						label="Password"
						type="password"
						onChange={(e) => setFormField("Password", e.target.value)}
					/>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mb-10">
					<Button
						type="button"
						onClick={submit}
						loading={status.Message === STATUSES.LOADING}
					>
						Login
					</Button>
				</Col>
				<Col>
					<Link href="/forgot-password">
						<a>Forgot Password</a>
					</Link>
				</Col>
			</Row>
		</Card>
	)
}
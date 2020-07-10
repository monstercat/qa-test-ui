
import LoginLayout from '../shared/layouts/login-layout'
import {go} from '../shared/utils/routes'
import LoginPanel from '~/modules/login/components/login-panel'

export default function Login() {
	//todo User logged check
	if (false) {
		go("/home")
		return
	}

	return (
		<LoginLayout>
			<LoginPanel />
		</LoginLayout>
	)
}
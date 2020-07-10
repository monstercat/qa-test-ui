import "./_logged-layout.less"
import Header from "./header"
import Footer from "./footer"
import call from "~/server"
import {go} from "~/shared/utils/routes"
import React, {useEffect} from "react"

export default function LoggedLayout({
	children
}) {

	async function me(){
		try{
			const me = await call("GET", "me")
		}catch(err){
			go("/")
		}
	}

	useEffect(()=>{
		me()
	}, [])

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
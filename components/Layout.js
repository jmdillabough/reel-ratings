import Navbar from './Navbar'

export default function Layout({children}) {
	return (
		<div className='w-screen'>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

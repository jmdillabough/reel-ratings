import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({isConnected}) {
	return (
		<div className='bg-red'>
			<Head>
				<title>Reel Ratings: Under Construction</title>
			</Head>
		</div>
	)
}

export async function getServerSideProps(context) {
	try {
		await clientPromise
		return {
			props: {isConnected: true}
		}
	} catch (e) {
		console.error(e)
		return {
			props: {isConnected: false}
		}
	}
}

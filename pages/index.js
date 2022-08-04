import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({isConnected}) {
	return (
		<div className='bg-red'>
			<Head>
				<title>Reel Ratings: Under Construction</title>
			</Head>
			<div className='w-screen h-screen flex items-center justify-center  bg-zinc-50-400'>
				<h1 className='font-semibold text-2xl'>Reel Ratings</h1>
			</div>
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

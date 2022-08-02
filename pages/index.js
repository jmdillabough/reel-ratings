import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({isConnected}) {
	return (
		<div className='bg-red'>
			<Head>
				<title>Reel Ratings</title>
			</Head>

			<main className='flex flex-col items-center justify-center h-screen'>
				<div className='border-4 rounded-xl border-black shadow-2xl bg-eggshell min-w-1/4 p-12 animate-bounce'>
					<h1 className='text-center font font-bold text-2xl text'>
						Reel Ratings
					</h1>

					{isConnected ? (
						<h2 className='subtitle text-center font-extralight'>
							( You are connected to MongoDB )
						</h2>
					) : (
						<h2 className='subtitle'>You are NOT connected to MongoDB</h2>
					)}
				</div>
			</main>
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

import {MenuIcon} from '@heroicons/react/solid'

export default function Navbar() {
	return (
		<div>
			<div className='navbar bg-base-100 px-32'>
				<div className='flex-1'>
					<a className='btn btn-ghost normal-case text-xl'>
						reel<span className='text-red text-2xl'>ratings</span>
					</a>
				</div>
				<div className='flex'>
					<ul className='menu menu-horizontal p-0 normal-case items-center'>
						<li tabIndex='0'>
							<a>
								<MenuIcon className='h-5 w-5' />
							</a>
							<ul className='bg-base-100 text-sm font-medium'>
								<li>
									<a>Movies Component</a>
								</li>
								<li>
									<a>Login</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

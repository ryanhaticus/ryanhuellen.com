function App() {
	return (
		<div className='min-h-screen flex items-center p-8 justify-center text-white bg-zinc-950 bg-[length:40px_40px] bg-grid'>
			<div>
				<header>
					<h1 className='text-6xl font-bold'>ryan huellen</h1>
				</header>
				<main className='mt-8 text-2xl font-semibold'>
					<p>
						I'm a software engineer enabling payments at John Deere Financial.
					</p>
					<p className='mt-2 md:mt-0'>
						I also maintain developer tooling like{' '}
						<a
							href='https://github.com/ryanhaticus/pretzelduck'
							target='_blank'
							rel='noreferrer'
							className='text-red-600'>
							Pretzel Duck
						</a>{' '}
						and{' '}
						<a
							href='https://draw.ryanhuellen.com'
							target='_blank'
							rel='noreferrer'
							className='text-orange-600'>
							draw.ryanhuellen.com
						</a>
						.
					</p>
					<div className='mt-8 flex flex-col md:flex-row gap-6 text-center md:text-inherit'>
						<a
							href='/resume.pdf'
							download='ryan-huellen-resume.pdf'
							className='border-8 px-10 py-2 rounded-xl hover:border-yellow-600'>
							résumé
						</a>
						<a
							href='https://github.com/ryanhaticus'
							target='_blank'
							rel='noreferrer'
							className='border-8 px-10 py-2 rounded-xl hover:border-green-600'>
							GitHub
						</a>
						<a
							href='https://www.linkedin.com/in/ryan-huellen'
							target='_blank'
							rel='noreferrer'
							className='border-8 px-10 py-2 rounded-xl hover:border-blue-600'>
							LinkedIn
						</a>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;

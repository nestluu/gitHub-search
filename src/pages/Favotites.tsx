import { useTypedSelector } from '../hooks/useTypedSelector'

export const Favorites = () => {
	const { favorites } = useTypedSelector(state => state.github)

	if (favorites.length === 0)
		return <p className='text-center text-black'>No items</p>
	return (
		<div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
			<ul className='list-none'>
				{favorites.map((f, i) => (
					<li key={f} className='text-black'>
						<span>{`${i + 1} `}</span>
						<a href={f} target='_blank'>
							{f}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

import { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IRepo } from '../models/models'

export const RepoCard = ({ repo }: { repo: IRepo }) => {
	const { addFavorite, removeFavorite } = useActions()
	const { favorites } = useTypedSelector(state => state.github)

	const [isFavorite, setIsFavorite] = useState(
		favorites.includes(repo.html_url)
	)

	const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		addFavorite(repo.html_url)
		setIsFavorite(true)
	}

	const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		removeFavorite(repo.html_url)
		setIsFavorite(false)
	}
	return (
		<div className='border py-3 px-5 rounded mb-2 hover:shadow-sm hover:bg-gray-100 transition-all'>
			<a href={repo.html_url} target='_blank'>
				<h2 className='text-lg font-bold'>{repo.full_name}</h2>
				<p className='text-sm'>
					Forks: <span className='font-bold mr-2'>{repo.forks}</span>
					Watchers: <span className='font-bold'>{repo.watchers}</span>
				</p>
				<p className='text-sm font-thin'>{repo?.description}</p>

				{!isFavorite ? (
					<button
						className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all mr-5'
						onClick={addToFavorite}
					>
						Add
					</button>
				) : (
					<button
						className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
						onClick={removeFromFavorite}
					>
						Remove
					</button>
				)}
			</a>
		</div>
	)
}

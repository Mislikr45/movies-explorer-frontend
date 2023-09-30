
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({moviesList, isSavedMovies, disabled, enabled, onSave, onDelete, userProfile, moveSave}) {
	return (
		<ul className="movies__list">
			{moviesList.map((movie) => {
				return (
					<MoviesCard
						movie={movie}
						key={movie.id ?? movie._id}
						isSavedMovies={isSavedMovies}
						disabled={disabled}
						enabled={enabled}
						onSave={onSave}
				        onDelete={onDelete}
						userProfile={userProfile}
						moveSave={moveSave}
					/>
				);
			})}
		</ul>
	);
}
export default MoviesCardList;

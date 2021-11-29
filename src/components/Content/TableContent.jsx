import React from 'react'

function TableContent(props) {
	return (
		<div className="container-fluid">
		<div className="row justify-content-center">
			<table className="table table-hover table-bordered col-6 shadow">
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Duracion</th>
						<th>Rating</th>
						<th>Genero</th>
						<th>Premios</th>
					</tr>
				</thead>
				<tbody>
					{props.movies.map((movie) => 
						<tr>
							<td>{movie.titulo}</td>
							<td>{movie.duracion}</td>
							<td>{movie.genero}</td>
							<td>{movie.generos}</td>
							<td>{movie.premios}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	</div>
	)
}

export default TableContent

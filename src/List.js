import React from 'react';

const List = ({ contacts }) => {
	return (
		<>
			{contacts.map((contact) => {
				const { id, name, age, image } = contact;

				return (
					<article key={id} className="person">
						<img src={image} alt={name} />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;

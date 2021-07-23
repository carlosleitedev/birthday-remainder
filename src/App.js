import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
	const [contacts, setContacts] = useState(data);

	return (
		<main>
			<section className="container">
				<h3>{contacts.length} birthdays today</h3>
				<List contacts={contacts} />
				<button onClick={() => setContacts([])}>clear All</button>
			</section>
		</main>
	);
}

export default App;

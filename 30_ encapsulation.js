/**
 * Encapsulation
 * 
 * Encapsulation means the restriction of direct access to some of an object's components.
 * It hides as much as possible of an object's internal parts and only exposes the necessary parts to run.
 * Why use encapsulation?
 */

// Security - Controlled access
// Hide Implementation and Expose Behaviours
// Loose Coupling - Modify the implementation at any time

const encapsulation = () => {
	let people = [];
	const setName = name => people.push(name);
	const getName = idx => people[idx];
	const rmName = idx => people.splice(idx, 1);
	return {
		setName,
		getName,
		rmName
	};
};
const data = encapsulation();
data.setName("Brittney"); // 0
data.getName(0); // 'Brittney'
data.rmName(0); // ['Brittney']
// you have no access to the array people
// can only change it via methods provided

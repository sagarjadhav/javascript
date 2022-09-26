/**
 * If this code gets optimized to return only 1 name,
 * then the computer would have to do a lot more work if you needed to return a different user.
 */

function findUser(user) {
	console.log(`found ${user.firstName} ${user.lastName}`)
}

const userData = {
	firstName: "Brittney",
	lastName: "Postma"
}

findUser(userData)

// if this findUser(userData) is called multiple times,
// then it will be optimized (inline cached) to just be 'found Brittney Postma'

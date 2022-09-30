/**
 * Factory Functions
 * 
 * As you can see, this code is already getting very repetitive and is not maintainable with only 1 character type.
 * Imagine adding more characters, things would get out of control quickly.
 * So, another way to create objects was introduced, factory functions.
 * Factory functions return a new object every time they are ran. This could improve the code somewhat.
 */

 function createElf(name, type, weapon) {
	return {
		name: name,
		type: type,
		weapon: weapon,
		say() {
			console.log(`Hi, my name is ${name}, I am a ${type} elf.`);
		},
		attack() {
			console.log(`${name} attacks with ${weapon}`);
		}
	};
}

const dobby = createElf("Dobby", "house", "cloth");
const legolas = createElf("Legolas", "high", "bow");

dobby.say(); // Hi, my name is Dobby, I am a house elf.
legolas.say(); // Hi, my name is Legolas, I am a high elf.
dobby.attack(); // Dobby attacks with cloth.
legolas.attack(); // Legolas attacks with bow.

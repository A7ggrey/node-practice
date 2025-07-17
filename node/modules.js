//CommonJS, every file is module (by default)
// modules - Encapsulated Code (only share minimum)

const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('Susan')
sayHi('john')
sayHi('peter')
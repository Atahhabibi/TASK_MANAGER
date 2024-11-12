function generateRandomId(length = 8) {
  return Math.random().toString(36).substr(2, length);
}

const tasks = [
  { id: generateRandomId(), name: "egg", completed: false },
  { id: generateRandomId(), name: "milk", completed: false },
  { id: generateRandomId(), name: "bread", completed: false },
  { id: generateRandomId(), name: "butter", completed: false },
  { id: generateRandomId(), name: "cheese", completed: false }
];

function generateRandomId(length = 8) {
  return Math.random().toString(36).substr(2, length);
}

module.exports = { tasks };

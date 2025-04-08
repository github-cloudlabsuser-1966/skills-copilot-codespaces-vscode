const data = [
    [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 }
    ],
    [
      { id: 3, name: 'Bob', age: 40 },
      { id: 4, name: 'Alice', age: 28 },
    ]
  ];
  
  // Extract names from the array of arrays of objects
  const names = data.flat().map(person => person.name);
  
  console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']
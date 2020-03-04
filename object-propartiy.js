const students = [
    {id:21, name:"Manna"},
    {id:221, name:"Joker"},
    {id:212, name:"Amont"},
    {id:2122, name:"Anjana Vakil"},
]
const friends = []
for(let i = 0; i<students.length; i++){
    const element = students[i]["name"]
    
    friends.push(element)
}
console.log(friends);
const names = students.map(s => s.name)
console.log(names);
const bigger = students.filter(s=> s.id<200)
console.log(bigger);
const biggerOne = students.find(s => s.id<212 )
console.log(biggerOne);


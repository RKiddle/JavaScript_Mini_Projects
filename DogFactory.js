
function dogFactory(name, breed, weight) {
  return {
        _name: name,
        get name() {
          return this._name;
        },
        set name(newName){
        if(typeof newName==='string')
         {return this._name=newName
        }else{
          console.log('please type a string.')}
      },
      
        _breed: breed,
        get breed() {
          return this._breed;
        },
    
        set breed(newBreed){
      if(typeof newBreed==='string'){
        return this._breed=newBreed
      } else{
        console.log('please type a string.')
      }},
    
        _weight: weight,
        get weight() {
          return this._weight;
        },
          set weight(newWeight){
       if(typeof newWeight === 'number'){
         return this._weight=newWeight}
       else {console.log('please type a number')}
       },
      bark() {
      return "ruff! ruff!";
        },
        eatTooManyTreats() {
        return this._weight++;
        }
    }
}

const dog1 = dogFactory('Joe', 'Pug', 27);

console.log(dog1.name)
console.log(dog1.weight)
console.log(dog1.breed)
dog1.eatTooManyTreats();
console.log(dog1.weight)
console.log(dog1.bark())

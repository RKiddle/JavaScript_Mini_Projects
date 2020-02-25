// Write your code here:
function dogFactory(name, breed, weight) {
  return {
        _name: name,
        get name() {
          return this._name;
        },
    set name(dogName){
      if(typeof dogName==='string')
       {return this.name=dogName
      }else{
        console.log('please give a valid breed!')
    }},
      
        _breed: breed,
        get breed() {
          return this._breed;
        },
    
        set breed(dogBreed){
      if(typeof dogBreed==='string'){
        return this.breed=dogBreed
      } else{
        console.log('please give a valid breed!')
      }},
    
        _weight: weight,
        get weight() {
          return this._weight;
        },
          set weight(dogWeight){
       if(typeof dogWeight=== 'number'){
         return this.weight=dogWeight}
       else {console.log('please giva a valid age')}
       }
    }
}

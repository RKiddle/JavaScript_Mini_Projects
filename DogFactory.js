
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
    }
}

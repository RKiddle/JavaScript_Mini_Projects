// Write your code here:
function dogFactory(name, breed, weight) {
  return {
        _name: name,
        get name() {
          return this._name;
        },
        set name(dogName) {
          this.name = dogName;
        },
        _breed: breed,
        get breed() {
          return this._breed;
        },
        set name(dogBreed) {
          this.name = dogBreed;
        },
        _weight: weight,
        get weight() {
          return this._weight;
        },
        set weight(dogWeight) {
          this.weight = dogWeight;
        }
    }
}

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse(courseName, dishName, dishprice) {
    const dish = {
      name: dishName,
      price: dishprice,
      
      if (courseName == 'appetizers') {
        appetizers.push(dish);
} else if (courseName == 'mains') {
  mains.push(dish);
} else {
  desserts.push(dish);
}
      
    }
  },
  
  
  get _courses() {
    const keys = Object.entries(appetizers, mains, desserts);
    // for (let [key, value] of Object.entries(object1)) {
 // console.log(`${key}: ${value}`);
}
  },
  get appetizers() {
    
  },
  get mains() {
    
  },
  get desserts() {
    
  },
  set appetizers() {
    
  },
  set mains() {
    
  },
  set desserts() {
    
  },
}

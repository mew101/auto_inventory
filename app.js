// Make classs
class Car {
    constructor(make, model, year, color) {
        this.model = madel;
        this.make = make;
        this.year = year;
        this.color = color;
    }
}

// UI class: handle UI tasks
class UI {
    static displayCars() {
        //hardcoded
      const StoreInventory = [
        {
            model: 'Toyota',
            make: 'Camry',
            year: '2019',
            color: 'Blue'
        },
        {
            model: 'Toyota',
            make: 'Corolla',
            year: '2018',
            color: 'Gray'
        },
       
      ];
       
     const currentCars = StoreInventory;

     currentCars.forEach((car) => UI.addCar(car));
    }

    static addCar(car) {
        const list = document.querySelector('#auto-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.color}</td>
            <td><a href="#" class="btn btn-danger btn-sm
            delete">X</a></td>     
        `;

        list.appendChild(row);

    }
}

// store class : handle storage

// event: display cars
document.addEventListener('DOMContentLoaded', UI.displayCars);

// event: add car

// event: remove a car

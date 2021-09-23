class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false; 
  #mileage = 0;

  start() {
    if (this.#isStarted === true) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (this.#isStarted === false) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(volume) {
    if (typeof volume !== 'number' || isNaN(volume) || !isFinite(volume) || volume <= 0 ) {
      throw new Error('Неверное количество топлива для заправки');
    }
    if (this.#maxFuelVolume === undefined) {
      throw new Error('Не указан максимальный обьём топлива');
    }

    let newVolume = this.#currentFuelVolume + volume;

    if (newVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume = newVolume;
  }

  drive(speed, hours) {
    if (!Number.isInteger(speed) || speed < 1) {
      throw new Error('Неверная скорость');
    }
    if (!Number.isInteger(hours)  || hours < 1) {
      throw new Error('Неверное количество часов');
    }
    if (this.#fuelConsumption === undefined) {
      throw new Error('Не указн расход топлива');
    }
    if (this.#maxSpeed === undefined) {
      throw new Error('Не указна максимальная скорость');
    }
    if (this.#maxSpeed < speed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (this.#isStarted === false) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    
    let distance = speed * hours;
    let requiredFuel = distance * this.#fuelConsumption / 100;

    if(this.#currentFuelVolume < requiredFuel) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= requiredFuel;
    this.#mileage += distance;
  }

  get brand() {
    if (this.#brand === undefined) {
      throw new Error('Бренд не указан');
    }
    return this.#brand;
  }

  get model() {
    if (this.#model === undefined) {
      throw new Error('Модель не указана');
    }
    return this.#model;
  }

  get yearOfManufacturing() {
    if (this.#yearOfManufacturing === undefined) {
      throw new Error('Год выпуска не указан');
    }
    return this.#yearOfManufacturing;
  }

  get maxSpeed() {
    if (this.#maxSpeed === undefined) {
      throw new Error('Максимальная скорость не указана');
    }
    return this.#maxSpeed;
  }

  get maxFuelVolume() {
    if (this.#maxFuelVolume === undefined) {
      throw new Error('Максимальный обьём топлива не указан');
    }
    return this.#maxFuelVolume;
  }

  get fuelConsumption() {
    if (this.#fuelConsumption === undefined) {
      throw new Error('Расход топлива не указан');
    }
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  set brand(brand) {
    if(typeof(brand) !== 'string' || brand.length < 1 || brand.length > 50) {
      throw new Error('Некорректный ввод');
    }
    this.#brand = brand;
  }

  set model(model) {
    if(typeof(model) !== 'string' || model.length < 1 || model.length > 50) {
      throw new Error('Некорректный ввод');
    }
    this.#model = model;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    const currentYear = new Date().getFullYear();
    if(yearOfManufacturing < 1900 || yearOfManufacturing > currentYear || !Number.isInteger(yearOfManufacturing)) {
      throw new Error('Некорректный ввод');
    }
    this.#yearOfManufacturing = yearOfManufacturing;
  }

  set maxSpeed (maxSpeed) {
    if(maxSpeed < 100 || maxSpeed > 300 || !Number.isInteger(maxSpeed)) {
      throw new Error('Некорректный ввод');
    }
    this.#maxSpeed = maxSpeed;
  }

  set maxFuelVolume(maxFuelVolume) {
    if(maxFuelVolume < 5 || maxFuelVolume > 20 ||  !Number.isInteger(maxFuelVolume)) {
      throw new Error('Некорректный ввод');
    }
    this.#maxFuelVolume = maxFuelVolume;
  }

  set fuelConsumption(fuelConsumption) {
    if(fuelConsumption < 1 || !Number.isInteger(fuelConsumption) ) {
      throw new Error('Некорректный ввод');
    }
    this.#fuelConsumption = fuelConsumption;
  }
}

module.exports = Car;
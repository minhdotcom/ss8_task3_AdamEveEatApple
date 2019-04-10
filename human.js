function Human (name, gender, weight) {
    this.name = name; // string
    this.gender = gender; // boolean
    this.weight = weight; // int
    this.isMale = function () {
        if (this.gender == true) {
            return true;
        } else return false;
    }
    this.setGender = function (boolean) {
        if (boolean == true) {
            this.gender = true;
        } else this.gender = false;
    }
    this.checkApple = function (apple) {
        console.log(apple.getWeight());
    }
    this.eatApple = function (apple) {
        if (apple.getWeight() > 0) {
            this.weight ++;
            apple.weight --;
        }
    }
    this.say = function () {
        if (this.gender) {
            console.log("Hello. My name is " + this.name +".");
        } else {
            console.log("Hi there! I am " + this.name + ". Let's go have funs!");
        }
    }
    this.getName = function () {
        return this.name;
    }
    this.setname = function (getName) {
        this.name = getName;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function (getWeight) {
        this.weight = getWeight;
    }
}
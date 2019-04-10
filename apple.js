function Apple (weight) {
    this.weight = weight;
    this.isEmpty = function () {
        if (this.weight == 0) {
            return true;
        } else {
            return false;
        }
    };
    this.decrease = function () {
        if (!this.isEmpty()) {
            this.weight --;
        } else {
            console.log("The apple is already finished!");
        }
    };
    this.getWeight = function () {
        return this.weight;
    };
}
var apple = new Apple (10);
var adam = new Human ("Adam", true, 19);
var eve = new Human ("Eve", false, 16);

adam.say();
eve.say();
while (!apple.isEmpty()) {
    adam.checkApple(apple);
    adam.eatApple(apple);
    eve.eatApple(apple);
}
adam.checkApple(apple);
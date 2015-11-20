function Test() {}

Test.prototype.container = "test";
Test.prototype.test2 = function(){
    console.log("fun");
}


var test = new Test();

test.test2();


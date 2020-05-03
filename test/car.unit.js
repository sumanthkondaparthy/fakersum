if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("car.js", function () {
    describe("car()", function () {
        it("replaces a token with a random value for a method with no parameters", function () {
            var name = faker.car('{{phone.phoneNumber}}');
            assert.ok(name.match(/\d/));
        });

        it("replaces multiple tokens with random values for methods with no parameters", function () {
            var name = faker.car('{{helpers.randomize}}{{helpers.randomize}}{{helpers.randomize}}');
            assert.ok(name.match(/[abc]{3}/));
        });

        it("replaces a token with a random value for a methods with a simple parameter", function () {
            var arr = ["one", "two", "three"];
            var random = faker.car('{{helpers.slugify("Will This Work")}}');
            assert.ok(random === "Will-This-Work");
        });

        it("replaces a token with a random value for a method with an array parameter", function () {
            var arr = ["one", "two", "three"];
            var random = faker.car('{{helpers.randomize(["one", "two", "three"])}}');
            assert.ok(arr.indexOf(random) > -1);
        });

        it("does not allow undefined parameters", function () {
            assert.throws(function () {
              faker.car()
            }, Error);
        });

        it("does not allow invalid module name", function () {
            assert.throws(function () {
              faker.car('{{foo.bar}}')
            }, Error);
        });

        it("does not allow invalid method name", function () {
            assert.throws(function () {
              faker.car('{{address.foo}}')
            }, Error);
        });


    });
});

const assert = require('assert');

const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);

// AssertionError [ERR_ASSERTION]: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
// assert.notDeepEqual(obj1, obj1);

// 测试通过
// assert.notDeepEqual(obj1, obj2);

// AssertionError [ERR_ASSERTION]: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
// assert.notDeepEqual(obj1, obj3);

// 测试通过
// assert.notDeepEqual(obj1, obj4);
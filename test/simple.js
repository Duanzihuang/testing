// const assert = require('assert')

const {add,mul} = require('../src/math.js')

// NodeJS 系统断言
// assert.equal(add(2,3),5,"2+3 不等于 5")

// Charjs测试
const {should,expect,assert} = require('chai')

//should要先执行一下
// should()
// add(2,3).should.be.equal(5)

// expect(add(2,3)).to.equal(5);

assert.equal(add(2,3), 5);

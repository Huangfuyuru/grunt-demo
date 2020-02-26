//引入要测试的文件和断言库
/*global describe,it,require:true*/
const add = require('../calc.js'),
      expect = require('chai').expect;

//测试描述+回调函数
describe('加法',function(){
  it('0+0=0',function(){
    expect(add(0,0)).to.be.equal(0)
  })

  it('1+0=1',function(){
    expect(add(1,0)).to.be.equal(1)
  })

  it('1+5=6',function(){
    expect(add(1,5)).to.be.equal(6)
  })

  it('a+b=NaN',function(){
    expect(isNaN(add('a','b'))).to.be.ok;
  })
})

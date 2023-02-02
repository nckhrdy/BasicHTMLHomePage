console.log('hello world')

var x = !true
console.log(x) 

const obj = {
  name: 'Nick',
  age: 20,
  face: '😀',
  hello: function(){
    console.log(this)
  },
  hello2: () => {
    console.log(this)
  }
}

obj.hello()
obj.hello2()

const ghost = {
  face: '👻'
}

function hello() {
  return this.face;
}

const result = hello.call(ghost);
console.log(result)
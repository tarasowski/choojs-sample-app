const choo = require('choo')
const html = require('choo/html')
const app = choo()




app.use(function(state, emitter) {
    state.animals = [
        {type: 'lion', x: 200, y: 100},
        {type: 'crocodile', x: 50, y: 200}
    ]
    emitter.on('addAnimal', function(data) {
        const animals = ['crocodile', 'lion', 'tiger', 'walrus', 'koala']
        
        const type = Math.floor(Math.random() * 5)
        const x = data.x
        const y = data.y
        const obj = {type: animals[type], x: x, y: y}
        state.animals.push(obj)
        emitter.emit('render')
    })
    emitter.on('removeAnimal',function (i) {
        state.animals.splice(i, 1)
        emitter.emit('render')
    })
})

const main = require('./templates/main')

app.route('/', main)
app.route('/filter/:type', main)

app.mount('div')
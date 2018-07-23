const html = require('choo/html')

module.exports = function(state, emit) {
    const type = state.animals.type
    const x = state.animals.x
    const y = state.animals.y

    const animal = require('./animals')
    
    return html`
    <div class="container">
    <div class="grass">
        <img src="/assets/bg.gif" onclick=${add}/>
        ${state.animals.map(animalMap)}
    </div>
    <div class="controls">
        <ul class="filters">
            <li><a href="/">all</a></li> 
            <li><a href="/filter/crocodile">crocodiles</a></li>
            <li><a href="/filter/koala">koalas</a></li>
            <li><a href="/filter/lion">lions</a></li>
            <li><a href="/filter/tiger">tigers</a></li>
            <li><a href="/filter/walrus">walruses</a></li>
    </ul>
    </div>
    </div>
    `
    function animalMap(obj, i) {
        const type = state.params.type
        if (type && type !== obj.type) {
            return 
        } else {
            return animal(remove, obj, i)
        }
    }

    function add(e) {
        const x = e.offsetX - 20
        const y = e.offsetY - 20
        const obj = {x: x, y: y}
        
        emit('addAnimal', obj)
    }

    function remove(e) {
        const index = e.target.id
        emit('removeAnimal', index)
    }
}


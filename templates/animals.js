const html = require('choo/html')

module.exports = function(onclick, animal, i) {
    const type = animal.type
    const x = animal.x
    const y = animal.y

    return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${i} onclick=${onclick}>
    `

}
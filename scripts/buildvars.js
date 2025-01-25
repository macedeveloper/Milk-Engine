const style = 
`body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: black;
    color: white;

    padding: 0;
    margin: 0;

    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}

#canvas {
    background-color: #8899A6;

    aspect-ratio: 16/9;
    width: 100%;
    max-width: 100vw;
    height: auto;
}

@media (min-width: calc(100vh * 16 / 9)) {
    #canvas {
        width: auto;
        height: 100%;
        max-height: 100vw;
    }
}`;



function script(startScript) {
    return `// Milk Engine Script

// Game objects: milk, canvas, scenes, components
// Entity classes: Entity, Sprite, Rect, Layer
// Components: body


// Milk Setup
const milk = {
    time: 0,
    scene: undefined,
}
const canvas = {
    canvas: document.getElementById('canvas'),
    draw: document.getElementById('canvas').getContext('2d'),

    width: document.getElementById('canvas').width = 1920,
    height: document.getElementById('canvas').height = 1080,
}


// Modules
class component {
    constructor(updateFunc = null) {
        this.update = updateFunc
    }
}
const COMPONENTS = {
    // body: new component((object) => {
    //     console.log('🔥', object.x)
    // }),
}


// Object classes
// Entity
class Entity {
    constructor(x = 0, y = 0, mods = [], name = 'Entity') {
        this.x = x
        this.y = y
        this.mods = mods
        this.name = name
    }
    update(dt) {
        if (this.mods) {
            this.mods.forEach(mod => {
                if (mod.update) { mod.update(this, dt) }
            });
        }
    }
    render(layer) {
        console.log("Can't render empty object")
    }
    output() {
        return \`📦 Object: "\${this.name}" at x: \${this.x}, y: \${this.y} with modules: \${this.modules}\`
    }
}
// Sprite
class Sprite extends Entity {
    constructor(x = 0, y = 0, mods = [], image = 'sprites/bean.png', name = 'Sprite') {
        super(x, y, mods, name)
        // size
        this.width = width
        this.height = height
        // image
        this.image = new Image();
        this.image.src = image
    }
    render(layer) {
        // pivot
        let cx = this.x - this.width * 0.5
        let cy = this.y - this.height * 0.5
        // scroll layer
        cx = this.x - layer.scrollx
        cy = this.y - layer.scrolly
        // render image
        canvas.draw.drawImage(this.image, cx, cy, this.w, this.h)
    }
}
// Shapes
class Rect extends Entity {
    constructor(x = 0, y = 0, mods = [], width = 0, height = 0, color = 'red', name = 'Rectangle') {
        super(x, y, mods, name)
        // size
        this.width = width
        this.height = height
        // color
        this.color = color
    }
    render(layer) {
        // scroll layer
        let cx = this.x - layer.scrollx
        let cy = this.y - layer.scrolly
        // render rect
        canvas.draw.fillRect(cx, cy, this.width, this.height);
    }
}
// Layer
class Layer {
    constructor(contain = [], name = 'Folder', scrollx = 1, scrolly = 1) {
        this.contain = contain
        this.name = name
        this.scrollx = scrollx
        this.scrolly = scrolly
    }
    update(dt) {
        if (this.contain) {
            this.contain.forEach(entity => {
                entity.update(dt)
            });
        }
    }
    render(layer) {
        if (this.contain) {
            this.contain.forEach(entity => {
                entity.render(layer)
            });
        }
    }
    output() {
        let x = \`📂 Layer: "\${this.name}" with insides: \`
        this.contain.forEach((obj) => { x += '\\n    ' + obj.output() })
        return x
    }
}


// User variables
let userVars = {}


// Scenes
let scenes = {
    main: new Layer(contain = [], name = 'Main Scene')
}
milk.scene = scenes.main


${startScript}


// Update
function animate(timestamp) {
    // Clear screen
    canvas.draw.clearRect(0, 0, canvas.width, canvas.height);
    // Delta time
    const currentTime = performance.now() / 1000;
    const dt = (currentTime - milk.time);
    milk.time = currentTime;

    // Game
    milk.scene.update(dt)
    milk.scene.render(milk.scene)

    requestAnimationFrame(animate);
};
animate();
`;}


export { style, script }
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var blockA = this.physics.add.image(0, 300, 'block').setBounce(1).setFriction(0);

    var blockB = this.physics.add.image(600, 300, 'block').setStatic(true);

    console.log(blockA.body);

    blockA.setVelocityX(10);

    this.physics.world.events.on('COLLISION_START_EVENT', function (event) {

        event.bodyA.gameObject.setTint(0xff0000);
        event.bodyB.gameObject.setTint(0x00ff00);

    });
}

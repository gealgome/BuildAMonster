class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability


    // Create the container sprite to hold all monster parts
    my.sprite.container = this.add.container(this.bodyX, this.bodyY);

    // Add the main body sprite to the container
    my.sprite.body = this.add.sprite(0, 0, "monsterParts", "body_greenD.png");
    my.sprite.container.add(my.sprite.body);

    // Add the legs to the container
    my.sprite.leftLeg = this.add.sprite(-30, 70, "monsterParts", "leg_greenA.png");
    my.sprite.rightLeg = this.add.sprite(30, 70, "monsterParts", "leg_greenD.png");
    my.sprite.container.add(my.sprite.leftLeg);
    my.sprite.container.add(my.sprite.rightLeg);

    // Add the arms to the container
    my.sprite.leftArm = this.add.sprite(-80, 10, "monsterParts", "arm_greenA.png");
    my.sprite.rightArm = this.add.sprite(80, 10, "monsterParts", "arm_greenE.png");
    my.sprite.container.add(my.sprite.leftArm);
    my.sprite.container.add(my.sprite.rightArm);

    // Add the eyes to the container
    my.sprite.mainEyes = this.add.sprite(0, -40, "monsterParts", "eye_human.png");
    my.sprite.additionalEyes = this.add.sprite(0, -40, "monsterParts", "eye_angry_blue.png");
    my.sprite.container.add(my.sprite.mainEyes);
    my.sprite.container.add(my.sprite.additionalEyes);

    // Add the mouth to the container
    my.sprite.mouth = this.add.sprite(0, 20, "monsterParts", "mouth_closed_happy.png");
    my.sprite.container.add(my.sprite.mouth);

    // Add the head accessories to the container
    my.sprite.antennae = this.add.sprite(0, -100, "monsterParts", "detail_green_antenna_large.png");
    my.sprite.horns = this.add.sprite(0, -120, "monsterParts", "detail_green_horn_large.png");
    my.sprite.container.add(my.sprite.antennae);
    my.sprite.container.add(my.sprite.horns);

        // Update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>';
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
           // Handle keyboard input for movement
    if (this.input.keyboard.checkDown(this.input.keyboard.addKey('A'), 500)) {
        // 'A' key is pressed, move the container to the left
        my.sprite.container.x -= 30; // Adjust the movement speed as needed
    }

    if (this.input.keyboard.checkDown(this.input.keyboard.addKey('D'), 500)) {
        // 'D' key is pressed, move the container to the right
        my.sprite.container.x += 30; // Adjust the movement speed as needed
    }

    // Handle keyboard input for smiling/fangs
    if (this.input.keyboard.checkDown(this.input.keyboard.addKey('S'), .5)) {
        // 'S' key is pressed, make the monster smile
        my.sprite.mouth.setTexture("monsterParts", "mouth_closed_happy.png");
    }

    if (this.input.keyboard.checkDown(this.input.keyboard.addKey('F'), .5)) {
        // 'F' key is pressed, make the monster show its fangs
        my.sprite.mouth.setTexture("monsterParts", "mouth_closed_fangs.png");
    }

       
    }

}

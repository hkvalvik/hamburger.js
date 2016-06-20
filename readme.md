# Hamburger.js

## Install

    npm install hamburger.js --save
    
## Include CSS and JavaScript

    <link href="node_modules/hamburger.js/index.css" rel="stylesheet">
    <script src="node_modules/hamburger.js/index.js"></script>

## Add html

### No label

    <button class="hamburger" data-hamburger aria-label="Menu">
        <span class="hamburger-icon"></span>
    </button>

### Left label

    <button class="hamburger" data-hamburger>
        Menu
        <span class="hamburger-icon"></span>
    </button>

### Right label

    <button class="hamburger" data-hamburger>
        <span class="hamburger-icon"></span>
        Menu
    </button>
    
## Initialize JavaScript

    var buttons = document.querySelectorAll('[data-hamburger]');
    for(var i=0; i<buttons.length; i++){
        var button = buttons[i];
        var hamburger = new Hamburger(button);
    }

## Using sass?

See [index.scss](node_modules/hamburger.js/index.scss) for available options

    @import "node_modules/hamburger.js/index.scss";

    
    
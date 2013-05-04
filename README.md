# relative-dir.js

A JavaScript library that transforms a piece of text at a breakpoint and also produces a screen reader specific version.

## Usage

    <span class="relative-direction" data-breakpoint="600" data-text="above">left</span>
    
The option `data-accessible-text` attribute can be used to specify the screen reader version explicitly.

    <span class="relative-direction" data-breakpoint="600" data-text="right" data-accessible-text="above">left</span>
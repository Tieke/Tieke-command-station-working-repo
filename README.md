# Command-Station

Hi, you will be building something called the 'Command-Station'. It will be written with HTML, CSS, and JS. 

## Overview

You have total control over a civilization of bots in a 'Bot-Server'. You also have complete visibility over a 'Landscape-Server' ripe with minerals and food.

**Before reading the rest, you may want to review the documentation for the [Landscape-Server](https://github.com/enspiral-dev-academy/tieke-landscape-server/blob/master/README.md) and [Bot-Server](https://github.com/enspiral-dev-academy/tieke-bot-server/tree/master).**

Your goal is to strategically coordinate your bots to mine as many minerals as they can from the Landscape-Server, in the shortest amount of time. Your bots need to eat, so your secondary goals will be to harvest food from the Landscape Server and feed your bots with that food.

Though, before you do any of that, you will need to build an interface to control your bots in the Bot-Server, and observe the landscape in the Landscape-Server. Fortunately, both servers will be building API endpoints for you to consume.

## Interface

The Landscape-Server will build endpoints that allow you to get data about the landscape, and an endpoint allowing you to reset the landscape completely. You can find their API documentation here: https://github.com/enspiral-dev-academy/tieke-landscape-server/blob/master/README.md

The Bot-Server will build endpoints allowing you to send bots out to mine or harvest, feed its bots, and build new bots. They will also have endpoints allowing you to get information about every bot, or an individual bot -- their energy level, experience levels, and id. There will be a final endpoint that will return information on the Bot-Server's 'stockpile' -- how many minerals they have, and how much food they have. You can find their API documentation here: https://github.com/enspiral-dev-academy/tieke-bot-server/tree/master/README.md

You will build a visualization of the Landscape Server. This will look like a grid. Every cell in the grid will have an amount of minerals and food which you will display in your visualization.

You will also build a display of the Bot-Server's bots and stockpile. This way you can tell how your bots are doing, and how their civilization is doing as a whole.

Lastly, you will build forms and buttons that allow you to manually command and care for your bots in all the ways previously described.

## Automation + Artificial Intelligence

If time permits, you can design and implement a script to automatically control your bots. You want your script to get as many minerals as possible in the shortest time possible. The script should be triggered with just a button press, and we should see our visualization of the Landscape-Server update as our automated bots mine and harvest.

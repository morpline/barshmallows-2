# Barshmallows 2

### Setup

Setup for this game is complicated. You need some sort of hardware that you can just have running all the time, as a server.

I have mine setup with in/out allowed, but it's hardware that is really old and has no personal data on it. I won't be browsing the web with it anytime soon. (It has a single core intel atom from 2008 lol.)

It's setup to use a static IP address of 10.0.0.203. That's so I don't have to change it in the frontend everytime I start the pc, but if you can't set yours to that (e.g., your ISP uses 192.168.0.X IP addresses) you'll have change it in the public/script.js file (hostAddress).

It's also setup to use port 203. If you can't use that, just change it in /index.js AND public/script.js.

Then just run `npm start` in the root of the folder, and navigate to 10.0.0.203:203 on a device connected to the same network, and you're ready to play!

#### If your browser complains that it's not secure, ignore it. This is literally open source, and you are running it on your own hardware.

### Gameplay

There is none right now. All I'm doing is getting a server that you can access on other devices on your local network and can run code at certain times throughout the day.

### Why did you make this?

I had this great idea of a game where you have a farm on your computer, and you 'work' on it on your phone when you are home. I had wondered if this was monetizable in any way, 

### Roadmap/Todo

- Barshmallows Data Management

- Saving

- Smart log Retrieval

- User agents

    These are essentially profiles, and should be hardcoded in the save file.

- Breeding based upon Barshmallows 1, but expanded

    If you look in save1.log, it says "by ounce".
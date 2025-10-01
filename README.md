The plan is to create an RPG creation and runtime system with
lightweight high-performance JavaScript and HTML. This project
uses 0 dependencies. 

Current Functionality:
	-Level editing
		-Multi-layer tile map
		-Rotate-able tiles
		-Click based editing system
		-Command based editing system
	-Commands
			-press the "." key to start typing a command.
			-press the return/enter key to submit a command.
			-todo: command scripts, initial commands
			-".t <id>" - set the tile type
			-".r" - rotate the tile which was previously clicked
			-".l <layer>" - switch the currently layer currently being edited
			-".tp <x> <y>" - move the camera to these coordinates
			-".1" and ".2" - set pos1 or pos2 to the tile previously clicked
			-".f" - fill the rectangular region between pos1 and pos2 with the currently selected tile type
			=".open" - opens a file picker which the user can choose a binary map file from
			=".save" - saves a binary file of the map data
	-Movement
		-W, A, S, D to move
		-rough collision with some tiles

Known Bugs in This Commit:
	-flickering tiles near the bottom edge of the canvas

"sprites.png" is an original artistic work by Jack Lewis, copyright 2025.
Author of the project is Jack Lewis.

This project is intended to be open-source and free for any hobbyists.
You must contact and pay me for a license if you intend to charge users 
for any product developed with this toolkit.
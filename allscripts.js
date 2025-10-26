const PKG_ALLSCRIPTS = `.edit init
.adapt
.tp 112 112
.pagebg black
.invis 1
.canmove 0
.exec mainmenu
.end

.edit mainmenu
.db new 56 56 96 56
.db write " "
.db write "   new game"
.db write " "
.db write "   options"
.db write " "
.db write "   load"
.db mode menu    
.db cursor 1 1
.db choice 0 0 1 1 newgame
.db cursor 1 3
.db choice 0 0 2 2 load
.db cursor 1 5
.db choice 1 1 2 2 options
.db cursor 1 1
.end

.edit newgame
.db delete
.invis 0
.canmove 1
.tp 269 272
.exec ents
.end

.edit ents
.ent create npc 36 300 300 16 16 anim_step 16 anim_speed 0.004 anim_current 1.2664000000000233
.ent create interact 300 300 16 16 ".exec npcinteract"
.ent create npc 46 0 0 16 16 anim_step 16 anim_speed 0.004 anim_current 0.2663999999999069
.ent create interact 0 0 16 16 ".exec frog_dialog"
.ent create interact 384 144 16 16 ".tp 328 541"
.end

.edit dialogexit
.db delete
.canmove 1
.allow interact
.end

.edit npcinteract
#npcinteract
.prevent interact
.canmove 0
.ent focus 0 
.db new 80 140 100 64
.db write "hhello ..."  hello. i am an npc. i   do not have much to say                   ok"
.db mode menu
.db cursor 6 6
.db choice 0 0 0 0 dialogexit
.db cursor 6 6
.end

.edit frog_dialog
.ent focus 2
.ent mod anim_frames 2
.canmove 0
.prevent interact
.db new 40 70 120 20
.db write "I am mr frog"
.db mode menu
.db cursor 0 1
.db choice 0 0 0 0 frog_exit
.db cursor 0 1
.end

.edit frog_exit
.db delete
.ent focus 2
.ent mod anim_frames 1
.canmove 1
.allow interact
.end

`;
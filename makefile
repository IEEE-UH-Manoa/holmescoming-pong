all: upload run

upload:
	mkdir -p holmecoming-pong
	rsync -avz * root@192.168.7.2:~/holmescoming-pong/

run:
	ssh root@192.168.7.2 'cd holmescoming-pong && node main.js'

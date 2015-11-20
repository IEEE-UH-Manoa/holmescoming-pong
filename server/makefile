all: upload run

upload:
	mkdir -p holmecoming-pong
	rsync -avz * root@192.168.7.2:~/holmescoming-pong/

run:
	ssh root@192.168.7.2 'cd holmescoming-pong && node main.js'

# Run SSH to cache the connection so subsequent SSH sessions will
# connect faster
#
# http://gcc.gnu.org/wiki/SSH_connection_caching
link:
	ssh -fMN root@192.168.7.2

#!/bin/bash
#
# Run this script on the beaglebone black to use the forwarded connection
# from the host machine.
#
# See forward_internet.sh script for the host instructions
#
# Instructions originally from here: https://elementztechblog.wordpress.com/2014/12/22/sharing-internet-using-network-over-usb-in-beaglebone-black/

ifconfig usb0 192.168.7.2
route add default gw 192.168.7.1

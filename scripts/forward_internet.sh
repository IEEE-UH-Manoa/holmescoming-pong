#!/bin/bash
#
# BE SURE YOU RUN THIS SCRIPT AS ROOT
#
# Configure and run this script on the *host* machine that the beaglebone
# is attached to so that you can forward your internet connection
# through the USB device that the beaglebone is connected to.
#
# See the bb_accept_internet.sh for the beaglebone instructions
#
# USB_INTF - the interface name of the usb connection for the beaglebone
# INTERNET_INTF - the interface name of the internet connection you need
#


USB_INTF=enx9059af5718d2
INTERNET_INTF=wlp3s0

#eth0 is my internet facing interface, eth3 is the BeagleBone USB connection
ifconfig $USB_INTF 192.168.7.1
iptables --table nat --append POSTROUTING --out-interface $INTERNET_INTF -j MASQUERADE
iptables --append FORWARD --in-interface $INTERNET_INTF -j ACCEPT
echo 1 > /proc/sys/net/ipv4/ip_forward


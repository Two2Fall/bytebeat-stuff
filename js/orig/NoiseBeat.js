// Made at: August 7 2024
// Mode: Bytebeat
// Sample rate: 16000

// This is NOT a beat bruh

t/=2,64+((.5*(v=(t&4095?8:25),b=(t&4096?2:5),(t>>3)*(t>>b)+(v*t)|t>>(t&16384?4:3))&127)+((t/(t&4095)&64)+(t*sin(t>>2)&255)*(-t&4095)/12e3)+(random()*(-t&8191)/256))/2

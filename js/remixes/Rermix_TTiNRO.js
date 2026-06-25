// That time is not running out
// Made at: September 21 2024
// Mode: Bytebeat
// Sample rate: 44100

// What time bruh
a=t/4,96-(t*sin(a|0)&255)*(-t&16383)/6e4*(b=a>>12&1)+random()*(c=-t&8191)/256+128+32*sin(10*cbrt(t%32768))+((2*a*(d=a&16384?7:5)*(3-(3&a>>7)+(3&a>>12))>>(3&-a>>(a&4096?11:16))&128)*c/1e4*b+(a*d*(3-(3&a>>9)+(3&a>>8))>>(3&-a>>(a&4096?12:16))|a>>3)%256/2)/3

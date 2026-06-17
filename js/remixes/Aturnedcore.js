// Made at: September 6 2024
// Mode: Bytebeat
// Sample rate: 44100

// Shitty bytebeat, this ain't hardcore

a=(sqrt(3e2*(t%(8192*"2122"[t>>15&3])))&64)+(3e5/(t&32767)&64)+(t*sin(t>>2)&255)*(-t&8191)/2e4*"001"[(t>>13)%3]+random()*(-t&8191)/2e2,(a+(8*t/(4+(t>>15)%16)*(1+(3&t>>13))>>(3&t>>11)&127))/2

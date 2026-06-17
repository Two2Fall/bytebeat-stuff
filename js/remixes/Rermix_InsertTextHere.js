// Made at: August 27 2024
// Mode: Bytebeat
// Sample rate: 11025

// I cannot believe I made this bullshit bruh

a=[1/4,1][(b=t>>18)&1],m=[0,4095,4095][(t>>17)%3],c=t=>(t*465/(43+6*(t>>15&3^1))*a&64)+(t/2*465/(43+6*(t>>15&3^1))&64),((c(t)+c(t-(A=3072))+c(t-2*A))/3+(sqrt(6e2*(t&2047))&64)+(3e5/(t&m)&64)+(random()*(-t&2047)/64)*(t>>11&1)+((t*sin(t>>1)&255)*(-t&8191)/1e4)*(t>>[31,12,12][b%3]&1))/2

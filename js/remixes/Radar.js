// Made at: September 8 2024
// Mode: Bytebeat
// Sample rate: 11025

// Hardcoring
// No but really the bytebeat is called "Radar"

t*=4,j=t/4,f=j*j/(1+(j>>9&j>>8))&128,a=(sqrt(3e2*(t%(8192*"2122"[t>>15&3])))&64)+(3e5/(t&32767)&64)+(t*sin(t>>2)&255)*(e=-t&8191)/2e4*"001"[(t>>13)%3]+random()*e/2e2,a/2+f/4%64

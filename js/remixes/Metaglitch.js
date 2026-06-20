// Made at: September 8 2024
// Mode: Bytebeat
// Sample rate: 11025

// Metaglish - the new english dialect

t*=4,j=t/4,f=((((j>>10&44)%32>>1)+((j>>9&44)%32>>1))*(32768>j%65536?1:4/5)*j|j>>3)*(j|j>>8|j>>6),d=(sqrt(3e2*(t%(8192*"2122"[t>>15&3])))&64)+(3e5/(t&32767)&64)+(t*sin(t>>2)&255)*(e=-t&8191)/2e4*"001"[(t>>13)%3]+random()*e/2e2,d/2+f/4%64

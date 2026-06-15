// Made at: August 18 2024
// Mode: Bytebeat
// Sample rate: 32000

// This is definitely NOT a hardcore drum

(sqrt(3e2*(t%16384))&64)+(3e5/(t%32768)&64)+(random()*(-t&8191)/256)*(t>>13&1)+((t*sin(t>>3)&255)*(-t&32767)/5e4)*(t>>14&1)

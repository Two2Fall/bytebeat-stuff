// Out of this mountain 
// Made at: September 21 2024
// Mode: Bytebeat
// Sample rate: 32000

// This bytebeat is also pretty good in my opinion
// Same with the dark forest recreation

b=t>>11,a=[1,1.6,2.4,3.2][b>>7&3],(128+32*sin(20*cbrt(t%24576/40))+random()*(c=-t&8191)/256+(t*sin(t>>2)&255)*(-t&16383)/6e4*"0010001000100011"[b>>3&15]+(t*(1+(3&b))*(e=t&65536?1.2:1)*a&192)*(-t>>5&255)/1024+(t*(1+(t>>10&3))*e*a&128)*c/2e4*(b>>3&1))/1.5

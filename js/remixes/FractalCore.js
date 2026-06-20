// Made at: September 8 2024
// Mode: Bytebeat
// Sample rate: 22050

// This sounds like hardcore but slowed at some point

j=t/4,f=j>>4+j%34|j>>5+j%(j>>15&1?46:43)|j/4,drums=(sqrt(3e2*(t%(8192*"2122"[t>>15&3])))&64)+(3e5/(t&32767)&64)+(t*sin(t>>2)&255)*(e=-t&8191)/2e4*"001"[(t>>13)%3]+random()*e/2e2,drums/2+f/4%64

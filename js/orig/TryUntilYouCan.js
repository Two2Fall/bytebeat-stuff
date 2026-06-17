// Made at: August 30 2024
// Mode: Bytebeat
// Sample rate: 44100

// My first ever song is here, I remastered it, I really like this.
// Holy shit bruh this is literally the beginning of all my music 
// on bytebeat!

A=t>>13,a=(sqrt(3e3*(t&16383))&64)+(3e5/(t&32767)&64)+(random()*(-t&8191)/128)*(A&1)+((t*sin(t>>3)&255)*(-t&32747)/4e4)*(t>>14&1),b=a*(t>>21&1),c=t=>(t/2**(~A>>6&3)*[3,6,9][(t>>13)%3]/4*[1,1.25,1.5,1.25][t>>17&3])&(t>>15&127)%256*(-t&8191)/4e3/2,c(t)+c(t-(d=10240))/2+c(t-2*d)/4+b/[16,12,10,9][A/2&3]*8

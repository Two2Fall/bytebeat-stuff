// Made at: September 17 2024
// Mode: Bytebeat
// Sample rate: 32000

// This was my first bytebattle entry
// And it is. I made this as a replace to my
// old bytebeat "Little Crush". I didn't win
// but okay

// Original trash ass description:
// "You died, but... they tell you everything 
// you've done in your life, it's the final
// judgment, so they tell you which path to 
// choose for when you're reborn..."

a=t*[1.6,1.9,2.1][(b=t>>12)%3]*(c=[7/8,1,9/8,1][b>>4&3]),d=7/9*t*(1+(b>>7&1))*c%(i=256)*(t>>7&255)/128,e=sin(2e3/(t%16384))*64,f=(t*sin(t>>2)&255)*(-t&16383)/2e4*!(b>>2&1)/2,g=t/4*[1.4,1.9,189/80,1.9][b>>4&3],h=(a&128%i/2)*!(b>>9&1)+(g&128%i/2)*(t>512e3)+e*(t>656e3)+f*(t>768e3)+d%i/2*(t>1056e3),[(h+64+8*sin(t/19200))/2,(h+64+8*sin(t/9600))/2]

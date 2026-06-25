// Made at: September 17 2024
// Mode: Signed bytebeat
// Sample rate: 32000

// Shitty bytebeat but for real

t=(t/6|0)*6,a=random()*(-t&[d=8191,b=16383][(e=t>>14)&1])/64,c=(t*sin(t>>2)&255)*(-t&[b,d][e%4==3|0])/1024,[(c+a)/3&128,(sin(t/20.5)*64+(sin(t/4096)*8+c+a)/3)&128]

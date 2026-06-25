// Made at: September 21 2024
// Mode: Bytebeat
// Sample rate: 32000

// This bytebeat is pretty good in my opinion
// I think it's one of my old bytebeats that are still cool

A=(t,s,a)=>t/2*2**([0,3,7][(t>>s)%3]/12)*[1,7/8,6/8,7/8][t>>a&3]&64,a=A(t,13,17)+A(t-12288,13,17)/2,b=(t>528e3)*(A(t/2,12,16)/2+(A(t/2-12288,12,16)/2)),c=(t>1024e3)*A(t*4,11,19)*(-t&65535)/8e4,d=(t>1576e3)*((random()*t&64)*(-t&32767)/8e4),e=(t>2104e3)*((3e5/(t&(f=t<2624e3?32767:16383))&64)+((t*sin(t>>2)&255)*(-t&f)/5e4))*(t>>(t<2624e3?15:14)&1),(a+b+c+d+e)/2

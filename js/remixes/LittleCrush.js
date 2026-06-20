// Made at: September 13 2024
// Mode: Signed bytebeat
// Sample rate: 32000

// This was originally my first bytebattle entry, although I did also submit another song; 
// which is The Double Path. I didn't read the rules, because it said that there it should 
// be only one single entry per member. So I chose The Double Path instead, this is the 
// first time you would see this bytebeat.

t=(t/6|0)*6,S=sin,j=t/4,w=(g,h,p)=>128+S(-cosh(g*PI/p))*h,a=j=>j%256/4,b=(t*S(t>>2)&255)*(-t&8191)/3e4*"101"[(t>>13)%3],c=random()*(-t&8191)/256*(t>>13&1),d=128+S(3e5/(t%(8192*"2221"[t>>15&3]))/20.5)*32,e=j*2*(j&16384?6:5)*(6-(3&j>>9))>>(3&-j>>(j&4096?2:16)),g=t<(A=524800)?0:d,s=t<6592e2?0:c,D=t<1056e3?0:b,h=(16+g+a(e)+s+D+48+S(t/8192)*16)/2,i=2*(16+a(e)+(g)+s+D+48+S(t/4096)*16)/4,m=x=>w(x,(t<A?96:16),256)*8,[m(h),m(i)]

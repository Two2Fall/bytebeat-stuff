// Made at: August 18 2024
// Mode: Bytebeat
// Sample rate: 32000

// This remix is kinda fire

i=t/4,f=i>>(i/(i&32768?1+b:1))|i>>8+(i%(i&32768?46:43)),b=1/16,(.25*(f)&63)+((sqrt(3e2*(t&16383))&64)+((3e5/(t&32767))&64)+(random()*(-t&8191)/256)*"01"[(t>>13)%2])+((t*sin(t>>3)&255)*(-t&32747)/4e4)*"01"[(t>>14)%2]

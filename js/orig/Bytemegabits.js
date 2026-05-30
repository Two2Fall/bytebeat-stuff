// Made at: August 4 2024
// Mode: Bytebeat
// Sample rate: 7000

32+(t*(t>>7|t>>6|t)/4%64)+((3e5/(t&4095))&64)+random()*(-t&4095)/256*!(t>>9&1)+((t*sin(t>>2)&255)*(-t&4095)/1e4)*"101"[(t>>11)%3]

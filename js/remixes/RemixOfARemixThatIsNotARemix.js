// Made at: July 3 2024
// Mode: Signed bytebeat 
// Sample rate: 44100

a=(sqrt(3E3*(t&16383))&128)+((3E5/(t&32767))&128)+((((5*(t&t>>9))%128)+((3*(t&t>>12))%128))%128),a|(t&t>>12)%128

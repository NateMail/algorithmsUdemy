/* 
 . Suppose you want count the number of times smaller string appears in a longer string
 . A straightfoward approach involves checking pairs of characters individually 
*/

/*
    . Loop over the longer string 
    . Loop over the shorter string 
    . If the character don't match, break out of the inner loop
    . If the characters do match, keep going
    . If you complete the inner loop and find a match, increment the count of matches
    . Return the count 
*/

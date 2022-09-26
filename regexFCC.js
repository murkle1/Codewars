regex.test(stringHere); //returns true/ false
stringHere.match(regex); // returns what has been extracted
stringHere.replace(Regex, 'ReplacementWord') // to replace part of the string 
stringHere.trim(); // removes ALL whitespace on begining and end of string

i - ignore case
g - global - extract a pattern more than once
. - wildcard - any one character // hum hut hug 
[] - group of characters // bag big but not bug and bog would be /b[aiu]g/
- - range of characters // a-z or 0-9
^ - negated character set // no vowels would be [^aeiou] note that ^ is inside the []
+ - one or more times // /a+/ is aa
* - zero or more times // /go*/ can return gooooooooo
? - lazy match // regex goes for the most matched characters, ? finds the shortest
$ - to match the last word in the stringHere
\w - shortcut for [A-Za-z0-9_]
\W - shortcut for [^A-Za-z0-9_]
\d - shortcut for [0-9]
\D - shortcut for [^0-9]
\s - shortcut for whitespace (only 1) [ \r\t\f\n\v] return, tab, form feed, and new line characters
\S - shortcut for [^ \r\t\f\n\v]
{ , } - quantity specifiers {x,} returns 'at least _'
{} - exact number of matches 
(?=...) - positive lookahead checks if element exists in string ... is the pattern that is not matched 
(?!...) - negative lookahead checks if element does not exist. ... is the pattern that you dont want to be there. returns rest of the pattern
\1 - capture groups. can bne \2 or \3 referring to the groups made in the initial regex pattern














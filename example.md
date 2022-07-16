
# Goals of documentation
	
To reduce technical dept ( it might not seem important but long term it is literally ( I mean really)  going to kill any enterprise with evolving software)

> “I view technical debt as any code that decreases agility as the project matures. Note how I didn’t say bad code (as that is often subjective) or broken code.” 
~ Shaun McCormick’s

But: when you add layer upon layer of inflexible and complex code, eventually everyone who once understood the software will die out, because thers changed and modified software in a way that is not immediately understandable. Your development flow will become slower and slower and eventually, nothing moves anymore, and no one will want to work on the project anymore.

The problem is that technical debt arises overtime for one of the following reasons:
* Lack of time 
* Lack of money
* Lack of discipline to do anything more than necessary
* Lack of understanding of the used software
* “No one will change/rewrite it anyway”
* “I will do it later”
 
 
# An Overview Types of documentation	
## Administrative 
* By project administrators or managers
* Includes Guidelines, LOR( List of Requirements) , SOW (Statement of work)
* General Information about the project (Status, Meeting Notes etc.)
* TODOS
* Accessible to all relevant personel

## End User 
* Destined for User
* Includes HowTo’s : Installation guides, getting Started, release notes, troubleshooting
* Publicy accessible 
subheadline: Developer 
* Destined for Developer
* Architecture Information, Explanation of functionality, runtime information, Props documentation, Checklists for KPIs, Unittests, TODOS
* Accessible to Devs
* Just in Time (JIT)
* A Framework to provide Documentation to anyone, when needed for whatever reason
* Accessible to relevant
* If you have to do this then something probably was not optimal
 
## Here is some Code
```python
print("Hello, world!")
for i in range(10):
    print(i)
```
```javascript
import { norm } from "mathjs";

export const simpleSimilarity = (word, otherWord) => {
  var score = 0;

  for (var indexfirst = 0; indexfirst < word.length; indexfirst++) {
    for (var indexsecond = 0; indexsecond < otherWord.length; indexsecond++) {
      if (word.charAt(indexfirst).toLowerCase() == otherWord.charAt(indexsecond).toLowerCase()) {
        if (indexfirst == indexsecond) {
          score++;
          continue;
        }
        score = score + 1 / norm(indexfirst - indexsecond);
      }
    }
  }

  return score;
};
```
## LIST
1. Item 1
2. Item 2
3. Item 3

When using markdown it dows not matter what numbersa re follwoing the first index of the ordered list

45. Item 1
0. Item 2
910. Item 3

## Links to external 
[Stack Abuse](http://stackabuse.com)

Here's a link to [Stack Abuse][SA], you guys.

[SA]: http://stackabuse.com "Stack Abuse Link Title"

_This is emphasized text!_

__This is strong text!__

*This is emphasized text!*

**This is strong text!**
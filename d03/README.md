README.md

Day 3 Notes:

How to submit hw:
1. Save committed changes
2. Sync to github
3. Issue tab on browser (github) --> new issue --> Name it ‘Week One Homework --> Submit new issue


Things to do:
1. Print cheat sheet for <tags>
2. Do NYC web for fun for Annie's blog
3. Three statement operating model for work
4. Pension fund research - valuation (AS)



Class notes
File path
- Relative - relative to where this file is
- Absolute - relative to the ROOT of the path


New content:
Add tag to very top
<!DOCTYPE html> part of html standard that requires us to declare that it is a html file
- all browsers e.g. safari will want us to tell them what language is used.

All html tags should be underneath asingle tag = <html> tags.


command + } = indentation all lines you've highlighted

<html lang="en-GB"> language recommended

everyhing in <head> is not in doc itslef but info about document = 'metadata'
everything in <body> is on page 


Order of template:
<!DOCTYPE>
	<html lang="en-US">
		<head>
		</head>
		<body>
		</body>
	</html>

'Sync' fewd-materials on LHS to get new stuff from teacher

STYLESHEETS
how to repeat same rule amongst several 
So change h1s for each file
e.g.
Can link multiple html files to the 1 CSS file...allowing to write CSS in one place to one reference
Make Style.css file
and insert e.g. h1 { } etc.
Linking stylesheet
use the following: <link rel="stylesheet" type="text/css" href="./style.css">

INSERT COMMENTS:
1. CSS - for comments within that file - /* this will insert comment */
2. HTML file - Comment ....   <!-- This is such a good file -->

CSS SELECTORS:
1. id, relational, pseudo-class selectors
2. describe priority rules

CLASS SELECTOR:
- to define a rule that applies generally
.highlight{} is for the 'class' of highlights.
different to the highlight {} which would include all the highlgiht tags
in style section is where you describe which elements are included in 'baloney'
Idea of 'class' is a rule that has applications more general than just a tag. Not applicable JUST for headings, maybe i want to highlight other stuff.

Tag -> Attribute -> rule?

PURPOSE OF ID - single specific element (not a tag e.g. not <p> tags but A <p> tag)
<li style="color:blue;">Javascript</li> <!--i just want to make this <li>blue-->
**DONT EVER DO THIS THOUGH = bad practice**
Give an ID
e.g. Id
#turkey {color:blue} (applies to ONE element only in a given way)
<li id="turkey">Javascript</li> <!--i just want to make this <li>blue-->

Link tag is doing all the work** MAKE SURE YOU'VE LINKED STYLE.CSS FILE!

NTS: The more specific rule will override the more general rule.


SELECTORS RELATIONAL
- adjacent sibling + - literally following sibling (next to each other)
- general sibling ~ - same parent e.g. body but no
- direct child > any child to a parent 
- decsendant 
*Check this
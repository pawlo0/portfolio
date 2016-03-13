# **My Origami Portfolio**

Living in http://pss.portfolio.meteor.com/

# Peer review assigment
### Responsive Website Tutorial and Examples
by University of London, Goldsmiths, University of London

5th Course on the
[Create a Web Experience Specialization](https://www.coursera.org/learn/web-application-development/)

---

The site can have any number of pages as long as there is a clear purpose for each one. It must have the following features.

- Clear navigation allowing the user to move between pages and locate relevant information
- Consistent style across the pages through the use of CSS
- Responsive layout where the layout changes depending on the size of the browser window
- Use of Bootstrap
- Clearly stated purpose for each page
- Clear landing page
- It should contain no less than 10 posts in addition to any static content. It should also contain at least three video links and 6 still images
 
---

As usual I was able to accomplish more features than those that are asked.

The feature I like most, and worth keeping for future reference, is the simple slideshow of images in the background.
Truth be said that there are many slideshow solutions out there. In fact, bootstrap has a carousel feature itself already.
But from all packages, or solutions that I was able to find, none was able to:
- work perfectly as background, filling all screen and let objects work on top of it (this is the problem of the carousel of bootstrap) or;
- some, though worked as well as background slideshows, are meant to be used in another platforms. I wasn't able to use them in bootstrap cause it would mess with layout of other bootstrap objects.

So, finally after lots of searching, I was able to find a simple solution, that I was able to adapt to this project. 
It came to be, not only a simpler solution than many that I've tried, but also a beautiful slideshow. It was implemented with only a little of javascript (in the router) and a little of css (in the body tag).
Then, it also took me a lot of time to find how to "shut down" the slideshow. In the end, an onBeforeAction in the router made the trick.

---

Another simple feature that I like, though not very hard to implement, is the about page sliding down or up.
I know, easy... But it is the first time I manage to do it.
And I think I may need it in the future, so that is why I think it is worth mention it.
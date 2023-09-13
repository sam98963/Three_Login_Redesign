# Three Login Page Redesign


## Design
There are a few key focus points when looking to redesign this page:
1. Slimlining selection options - In the footer particularly - also in the nav-bar/drop-down(mobile)
2. Formatting and positioning - For Desktop there is a large amount of white-space on one side in the main page, which can be effective, but the spacing of content on the otherside is not slick. Consider central and reducing contents on the page, also consider rewording.
3. Modernise with better responsive design and more minimalistic design
4. Signup and Register take you to the same page in which you complete the same forms, more clarity by seperate pages for each, it is confusing me as a user.

After reading into [Three branding website](https://www.threebrandcentral.com/), I've decided to stick with the color scheme and font: Helvetica Bold and black and white with splashes of color (in this case two-tone pink), since it ensures continuity with their branding and the rest of the site.

Feel free to look at my design process on [Figma](https://www.figma.com/file/AjINWW3xqtNFPYEWnp5zes/Three-Login?type=design&node-id=0%3A1&mode=design&t=noztiTg7thgn9XSj-1)


## Validation
There are some specific requirements need to be met for each input:
- Email: 
  - Must be an input.
  - No Spaces are to be included.
  - It must contain a domain name and a top-level domain (tests for characters after the "." and "@", standard regex used here).
- Phone Number: 
  - Must be an input.
  - Must not include spaces.
  - Must start with either 07 or +44.
  - Must be between 11 and 12 characters long.
- Password:
  - Must contain at least 8 characters.
  - Must contain special characters.
  - Must contain an upper and lower case character.
  - Must not have spaces.

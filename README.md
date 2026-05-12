# Murder Mystery Dossier

The site is not connected to a server so to able to change the site for the current murder mystery that is being hosted certain files have to be overwritten and some variables have to manually be changed.

## Table of Contents

- [JSON File Creation](#json-creation)
    - [Website Design](#website-design)   
    - [Site Login](#site-login)
    - [Characters](#characters)   
    - [Home Page Settings](#home-page-settings)
    - [Evidence Page Settings](#evidence-page-settings)
- [Images Creation](#images-creation)
    - [Header](#header)   
- [To Overwrite](#to-overwrite)
    - [Variables](#variables)   
    - [JSON Files](#json-files)   
    - [Image Files](#image-files)

---

## JSON File Creation
wordssss

### Website Design
wordsss

### Site Login
wordsss

### Characters
wordsss

### Home Page Settings
wordsss

### Evidence Page Settings
wordsss

## Image Creation
wordssss

*Note*: image dimensions are written as (width * height)

### Header
- Top Image Background
    - No text (site title will be added with a text overlay)
    - *Size*: XXXpx * XXXpx
    - *File Name*: headerBackground
    - *Type*: png
- Button Image Links
    - need 4/6 different images
        - Home, [Profile, Log In], [Tasks Before Murder, Tasks After Murder] , Evidence
        - can use the same asset for the bracketed items *but* will need two copies with different names

    - *Size*: XXpx * XXpx
    - *Type*: png
    - *File Name*: homeButton, profileButton, loginButton, task1Button, task2Button, evidenceButton

## To Overwrite
wordssss

### Variables
The only variables that are hard coded are in PartyContext.jsx
~~~
src 
	components
		contexts 
			PartyContext.jsx
~~~
| States | siteTemplate | isMystery | isMurder |
| :---: | :---: | :---: | --- |
| Template | True | NA | NA |
| Pre-Party | False | False | False |
| Pre-Murder | False | True | False |
| Post-Murder | False | True | True |
- Template = No ongoing party. Site filled with lorem ispum and all header buttons/links are visible
- Pre-Party = Party is currently being planned/hosted and before party start time. Site will have party color, images, and content. Will stay in this state until the offical start of the party. Users will be able to log in and look at their character info.
- Pre-Murder = A party in active status. All that is true in Pre-Party will remain with the addtion of each character's task list.
- Post-Murder = A party in active status. All that is true in Pre-Party will remain with the addtion of each character's after murder task list and evidence. As well on the home page the murdered character's image will update to say "Murdere (or something similar)

### JSON Files
wordsss

---

## Author

**J. Orlando**
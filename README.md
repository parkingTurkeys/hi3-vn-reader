# HI3 VN reader

this is a viewer for translations of visual novels made for the game honkai impact 3rd.   
you can load the hi3 visual novels from the fanmade translations with this.  
translations from [here](https://github.com/RaytheonThunder/honkai-vns)  
**images and original text are copyright of miHoYo**
important: i did not write or translate *anything*
  
please report any issues!  

it's different from the other ones because it is:  

- actively being updated
- open source
- useable on mobile
- __not trying to get the layout of the original__ 

this is because the original layout wouldn't really work too well with mobile and is hard to do. also, this uses plain html/css/js.   

## progress
- [x] Menu  
- [x] Making text appear  
- [x] Making it not all immediately go at once  
- [x] Background images
- [x] Sound
- [ ] Shaking
- [x] Character images
- [ ] Info boxes
- [ ] The offline [file:// url] version *lol haha this is still so broken*

## how to run
first, run all the powershell scripts (cgs/get-cgs.ps1, bgm/get-bgms.ps1 & imgs/get-imgs.ps1)
then run something like `npx http-server` and open index.html.
this should probably work. please tell me if it doesnt.

__you need the server thing because it uses get requests. i'm still working on a version that doesn't.__



## notes
Any comments I made in the XML are ended with `- p-t` 
A few images will be broken, sorry :(
On the non-server version, you can only go to the start of a chapter

## tysms
i took a lot of inspiration from the [original](https://event.bh3.com/avgAntiEntropy/indexAntiEntropy.php) ofc, but i did all the scripting myself! (the original was useful for figuring out what elements i needed though :D)
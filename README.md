# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

  Was a little challenging if getting used to JavaScript. BMI was a great warmup. Some css understanding of
  flexbox and grid. BMI using JS is operable. I chose *imperial instead of both.

### The challenge

Users should be able to:

- Select whether they want to use metric or *imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![Screen Shot 2023-10-27 at 11 18 20 AM](https://github.com/trottiemcqueen/bmi-calculator/assets/123763473/c5d5652f-a403-469e-a8b1-8b7da37f502b)

./assets/images/screenshot.png



### Links

- Solution URL: [](https://your-solution-url.com)
- Live Site URL: [](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

The JavaScript side of things. First time actually using conditionals:

if (bmi <= 18.4) {
    document.getElementById('message').innerHTML = 'You are under weight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'You are at a healthy weight'
  } else {
    document.getElementById('message').innerHTML = 'You are overweight'
  }



### Continued development

To continue with JS with more challenges


## Author

- Frontend Mentor - [@trottiemcqueen](https://www.frontendmentor.io/profile/trottiemcqueen)



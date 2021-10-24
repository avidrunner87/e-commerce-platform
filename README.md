# E-Commerce Platform

## Description
An e-commerce platform refactored to use redux.

## Usage
You can access the app here: [https://simple-e-commerce-platform.herokuapp.com/](https://simple-e-commerce-platform.herokuapp.com/).

## User Story
**AS A** senior engineer working on an e-commerce platform<br>
I **WANT** my platform to use Redux to manage global state instead of the Context API<br>
**SO THAT** my website's state management is taken out of the React ecosystem

### Acceptance Criteria
**GIVEN** an e-commerce platform that uses Redux to manage global state

>**WHEN** I review the app’s store<br>
**THEN** I find that the app uses a Redux store instead of the Context API

>**WHEN** I review the way the React front end accesses the store<br>
**THEN** I find that the app uses a Redux provider

>**WHEN** I review the way the app determines changes to its global state<br>
**THEN** I find that the app passes reducers to a Redux store instead of using the Context API

>**WHEN** I review the way the app extracts state data from the store<br>
**THEN** I find that the app uses Redux instead of the Context API

>**WHEN** I review the way the app dispatches actions<br>
**THEN** I find that the app uses Redux instead of the Context API

## Installation
To fork this code to further improve the website, please follow these directions:

1. In Github fork the repository.
1. Clone the repository to your local computer.

_This assumes that you have setup your own SSH keys to connect with Github._
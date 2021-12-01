# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @virkmeenakshi/lotide`

**Require it:**

`const _ = require('@virkmeenakshi/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `head(array)`: Gets the first element of an array.
* `assertArraysEqual(array1,array2)`:Compare two arrays and prints out a colourful  and easy to read message in both success and failure scenarios.
* `eqArrays(array1,array2)`:Compare two arrays and check if it's a perfect match.
* `head(array)`: Gets the first element of an array.
* `assertEqual(actual,expected)`: Compare two values and prints out a colourful  and easy to read message in both success and failure scenarios.
* `without(source,itemsToRemove)`:Creates an array excluding all given values.
* `middle(array)`: Return the middle-most elements of the given array.
* `countOnly(array,object)`: It returns an object containing counts of everything that the input object listed.
* `findKeyByValue(objSearch,valueSearch)`: It should scan the object and return the first key which contains the given value.
* `eqObjects(object1,object2)`: compares two objects and check if both objects have identical keys with identical values.
* `assertObjectsEqual(object1,object2)`: compares two objects and check if both objects have identical keys with identical values.Prints out a colourful  and easy to read message in both success and failure scenarios.
* `takeUntil(array, callback)`:It returns a slice of the array with elements taken from the beginning . it should keep going untill the callback/preicate returns a truthy value.
* `findKey(object,callback)`: it scans the object and return the first key for which the callback returns a truthy value.

Complete the README.
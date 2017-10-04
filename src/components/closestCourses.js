/*
  closest course list
  list of all the course that that is closest to the user.
*/
import React from 'react';
import { GetCourses } from '../helpers/axios/course';


const axios = require('axios'); // promised based requests - like fetch()


async function ClosestCourse() {

  try {

    // then we grab some data over an Ajax request
    const wes = await axios('https://api.github.com/users/wesbos');
    console.log(wes.data); // mediocre code
    // many requests should be concurrent - don't slow things down!
    // fire off three requests and save their promises
    const wordPromise = axios('http://www.setgetgo.com/randomword/get.php');
    const userPromise = axios('https://randomuser.me/api/');
    const namePromise = axios('https://uinames.com/api/');
    // await all three promises to come back and destructure the result into their own variables
    const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
    console.log(word.data, user.data, name.data); // cool, {...}, {....}
  } catch (e) {
    console.error(e); // 💩
  }



}


export default ClosestCourse;

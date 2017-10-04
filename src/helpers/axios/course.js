
const axios = require('axios'); // promised based requests - like fetch()

export async function GetCourses() {
  try {

    // then we grab some data over an Ajax request
    const wordPromise = await axios('http://localhost:3000/api/courses');
    // console.log(wordPromise.data)
    const [word] = await Promise.all([wordPromise]);
      return word.data; // cool, {...}, {....}
  } catch (e) {
    console.error(e); // 💩
  }
}

export default GetCourses;

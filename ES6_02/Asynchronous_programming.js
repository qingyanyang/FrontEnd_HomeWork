/**
 * 
 * 
 *Part 1: Callbacks**

Exercise Task:

- Create a function fetchData that simulates fetching data from a server. This function should take two arguments: a url (string) and a callback function. Use setTimeout to simulate a delay of 2 seconds before calling the callback function with the fetched data.

Instructions:

- The fetchData function should print "Fetching data from [url]..." when it starts.
- After 2 seconds, it should call the callback function with the data: "Data from [url]".
*/

function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        callback(`Data from ${url}`);
    }, 2000);
}
fetchData('https://127.0.0.1/user', (data) => {
    console.log(data);
});

/*

**Part 2: Promises**

Exercise Task:

- Refactor the fetchData function to return a promise instead of using a callback.

Instructions:

- The function should still simulate a 2-second delay before resolving the promise with the data: "Data from [url]".
- If the url is empty or not provided, reject the promise with an error message: "Invalid URL".
*/
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject('Invalid URL');
            return;
        }
        console.log(`Fetching data from ${url}...`);
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 2000);
    });
}

fetchDataPromise('https://127.0.0.1/user')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

fetchDataPromise('')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

fetchDataPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

/*


**Part 3: Async/Await**

Exercise Task:

- Refactor the code to use async/await to fetch data and handle errors.

Instructions:

- Create an async function named loadData that calls fetchData with a given url.
- Use try/catch to handle any errors that occur during the data fetching process.
 */

async function loadData(url) {
    try {
        const a = await fetchDataPromise(url);
        console.log('1', a);
        const b = await fetchDataPromise(url);
        console.log('2', b);
        const c = await fetchDataPromise(url);
        console.log('3', c);
        const d = await fetchDataPromise(url);
        console.log('4', d);
        return a + b + c + d;
    } catch (err) {
        return err;
    }
}

(async function () {
    const res = await loadData('https://127.0.0.1/user');
    console.log('res', res);
})();

(async function () {
    const res = await loadData();
    console.log('res', res);
})();
# Friday November 15th 2019

```js
await client.service('users').find({
  query: {
    email: 'cj@null.computer'
  }
});

```

---

* May Claude
* 11/15/2019, 8:45:12 AM
* Hi CJ, can u make a video about business opening hours? Like how to store it in a Database (HH and MM as integers, or as a timestamp? how to query if a shop is open at day X @ yx Hr ? And what if im in a different Timezone 🙀 ? Thx ;)

* Open Time
  * HH - 24 hour time stored as integers
    - UTC time
  * MM - as integers
    - UTC time
  * Day of the week - M T W R F
* Close Time
  * HH - 24 hour time stored as integers
    - UTC time
  * MM - as integers
    - UTC time
  * Day of the week - M T W R F
* Query with UTC time, calculated based on users submitted time zone

---

```js
const names = ['Michael', 'CJ', 'Daniel', 'Daoud'];

names.sort((a, b) => a.toLowerCase() - b.toLowerCase());
```
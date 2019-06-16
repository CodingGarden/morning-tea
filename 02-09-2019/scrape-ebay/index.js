const axios = require('axios');
const cheerio = require('cheerio');

// const URL = 'https://www.ebay.com/sch/i.html?_from=R40&_nkw=nintendo+switch&_sacat=0&rt=nc&LH_BIN=1&_pgn=';

const URL = 'https://www.ebay.com/b/Nintendo-Switch-Video-Game-Consoles/139971/bn_69455331';

async function getResults(page_num, results = []) {
  console.log('Getting', page_num, 'results...');
  const { data } = await axios.get(URL + page_num, {
    headers: {
      accept: 'text/html'
    }
  });
  const $ = cheerio.load(data);
  const items = $('.s-item');
  items.each((index, item) => {
    const $item = $(item);
    const image_url = $item.find('.s-item__image-img').attr('src');
    const title = $item.find('.s-item__title').text().trim();
    const link = $item.find('.s-item__link').attr('href');
    const price = $item.find('.s-item__price').text().trim();
    //  https://i.ebayimg.com/thumbs/images/g/Lv4AAOSwhZdamBWa/s-l225.jpg
    // https://i.ebayimg.com/thumbs/images/g/40gAAOSwYwZcK5uS/s-l225.jpg
    results.push({
      image_url,
      title,
      price,
      link,
    });
  })

  console.log(results);

  if (items.length === 60) {
    getResults(page_num + 1, results);
  } else {
    finished(results);
  }
}

getResults('');

function finished(results) {
  console.log('Got all results!!', results.length);
}

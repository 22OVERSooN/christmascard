
// // url Async requesting function
// function httpGetAsync(theUrl, callback)
// {
//     // create the request object
//     var xmlHttp = new XMLHttpRequest();

//     // set the state change callback to capture when the response comes in
//     xmlHttp.onreadystatechange = function()
//     {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//         {
//             callback(xmlHttp.responseText);
//         }
//     }

//     // open as a GET call, pass in the url and set async = True
//     xmlHttp.open("GET", theUrl, true);

//     // call send with no params as they were passed in on the url string
//     xmlHttp.send(null);

//     return;
// }

// // callback for the random search
// function tenorCallback_randomsearch(responsetext)
// {
//     // parse the json response
//     var response_objects = JSON.parse(responsetext);

//     top_10_gifs = response_objects["results"];

//     // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

//     document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];

//     document.getElementById("share_gif").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];

//     return;

// }


// // function to request random gifs for a given search term
// function grab_data()
// {
//     // set the apikey and limit
//     var apikey = "AIzaSyB9Eg5JxEuuz7f0whyB0VEufjxKpV-xE8c";
//     var lmt = 8;

//     // test search term
//     var search_term = "work";

//     // using default locale of en_US
//     var search_url = "https://g.tenor.com/v1/random?q=" + search_term + "&key=" +
//             apikey + "&limit=" + lmt;

//     httpGetAsync(search_url,tenorCallback_randomsearch);

//     // data will be loaded by each call's callback
//     return;
// }


// // SUPPORT FUNCTIONS ABOVE
// // MAIN BELOW


// function init() {
//     var src = document.getElementById('preview_gif')
//     console.log(src)
//     console.log(grab_data())
// }
// init();

// find the button
// var button = d3.select ('card card--front back')

// // create event handlers for clicking the button pressing the open key
// button.on('click', runEnter)
function init() {
gif_list = ['https://giphy.com/gifs/angry-monday-working-xiAqCzbB3eZvG',
'https://media.giphy.com/media/8mt7N0zPvZx98ybkY2/giphy.gif',
'https://images.prismic.io/friday-marketing/e7f965dd-fdbf-4b37-b94c-40802db17bae_work-meme27.jpg?auto=compress,format',
'https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-relatable-work-memes-02-58d11b9f9dc62__700.jpg',
'https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-relatable-work-memes-83-58d11e9387b3b__700.jpg',
'https://www.chanty.com/blog/wp-content/uploads/2021/03/Working-from-home.jpg',
'https://img.buzzfeed.com/buzzfeed-static/static/2022-10/12/16/asset/2ce3e3add586/sub-buzz-2972-1665590589-20.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
'https://i.shgcdn.com/aacecc3a-f9dc-4951-8d90-c44a6dd36bb7/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
'https://images.prismic.io/friday-marketing/d61884cd-0b3a-4215-98ed-c033dc49b64c_work-meme23.jpg?auto=compress,format',
'https://filmdaily.co/wp-content/uploads/2021/02/Work-11.jpg',
'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/funny-work-week-memes-167-6332fd692c802__700.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm4JlgvgNC5ETXG5582Ri17lT1h7NJagfIQ&usqp=CAU',
'https://wp.en.aleteia.org/wp-content/uploads/sites/2/2020/03/man-in-suit.jpg?w=634',
'https://sayingimages.com/wp-content/uploads/when-your-boss-gives-you-extra-work-to-do-funny-office-memes.png',
'https://www.scienceofpeople.com/wp-content/uploads/2022/07/image-9.jpeg']

r = Math.floor(Math.random() * 14)+ 1

gif_link = gif_list[r]
var gif_id = document.getElementById("preview_gif")
gif_id.setAttribute("src", gif_link)
// var gif = gif_id.append('image')
//     .attr('src', gif_link)
console.log(r)
// console.log(gif_link)
// console.log(gif_id)
    // var svg = d3.select('svg')
    // var gif = svg.append('image')
    //     .attr('xlink:href',gif_link)
    //     .attr('alt', 'LMAO')
    //     .attr('width',240)
    //     .attr('height',184)
    //<img id="preview_gif" alt="LAMO" style="width:240px;height:184px;">
}
init()
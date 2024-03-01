const loadCate = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const cate = data.data.news_category;
    // console.log(cate);

    const newsButton = document.getElementById('category-bar');
    cate.forEach((item) => {
        // console.log(item)
        const div = document.createElement('div');
        div.innerHTML=`
        <button onclick="loadNews('${item.category_id}')" class="btn btn-primary ">${item.category_name}</button>
        `;
        newsButton.appendChild(div)



        
    });


}

const loadNews=async(catId)=>{
    const loadSpin =document.getElementById('loading');
    loadSpin.classList.remove('hidden')
const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
const data = await res.json();
const news =data.data

console.log(news);
const newsContainer = document.getElementById('news-container')
newsContainer.innerHTML = '';
news.forEach((item) => {
    const loadSpin =document.getElementById('loading');
    loadSpin.classList.add('hidden')
    console.log(item)
    const div2 = document.createElement('div');
    // div2.classList.add('hero min-h-screen bg-base-200');
    div2.innerHTML=`
    <div class="hero-content flex-col lg:flex-row gap-7">
    <img src="${item.image_url}" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">${item.title}</h1>
      <p class="py-6">${item.details.slice(0,200)}</p>
      <button class="btn btn-primary">Details</button>
    </div>
  </div>
    `;
    newsContainer.appendChild(div2)

});


}

const handleSearch = () =>{
    const value = document.getElementById('search-box').value;
    if (value) {
        loadNews(value)
        
    }
    else{
        alert('invalid');
    }
}

loadNews("01");
loadCate();
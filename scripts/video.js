// Categories Fetch API And Get Data
const categoriesData = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    const data = await response.json();
    getCategories(data.categories);
}

const getCategories = (categories) => {
    const categoriesSection = document.getElementById('categories')
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList = 'py-2 px-5 bg-[#25252526] bg-opacity-15 rounded-[4px]'
        categoryButton.innerText = category.category;
        categoriesSection.appendChild(categoryButton)
    })
}

categoriesData()

// Videos Fetch API And Get Data
const videosData = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    const data = await response.json();
    getVideos(data.videos);
}

const getVideos = (videos) => {
    const videosSection = document.getElementById('videos')
    videos.forEach(video => {
        const videosCard = document.createElement('div');
        videosCard.innerHTML = `
        <div>
            <img class="rounded-lg w-[312px] h-[200px] bg-cover" src=${video.thumbnail} alt="">
        </div>
        <div class="flex mt-5 gap-3">
            <div><img class="h-10 w-10 rounded-full" src=${video.authors[0].profile_picture} alt=""></div>
            <div>
                <p class="font-bold text-base text-[#171717]">${video.title}</p>
                <p class="text-sm text-[#171717B3] text-opacity-70 mt-1">${video.authors[0].profile_name}</p>
                <p class="text-sm text-[#171717B3] text-opacity-70 mt-1">${video.others.views}</p>
            </div>
        </div>
        `
        videosSection.appendChild(videosCard)
    })
}

videosData()


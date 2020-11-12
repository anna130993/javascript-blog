const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
  
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    console.log('clickedElement:', clickedElement)
    clickedElement.classList.add('active');
  
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    targetArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){

  /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = "";

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    /* get the article id */
    for (let article of articles) {
      const articleId = article.getAttribute('id');
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      titleList.innerHTML = titleList.innerHTML + linkHTML;
    }
    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();
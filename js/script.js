{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    console.log('clickedElement:', clickedElement);
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
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(customSelector = ''){
    const titleList = document.querySelector(optTitleListSelector);

    let html = '';

    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    for(let article of articles){
      const articleId = article.getAttribute('id');
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

}

function generateTags(){
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles){
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      let html = '';
      const articleTags = article.getAttribute('data-tags');
      const articleTagsArray = articleTags.split(' ');
      for(let tag of articleTagsArray){
        const tagHTML = '<li><a href="#tag-'+ tag + '"><span>' + articleTags + '</span></a></li>';
        html = html + tagHTML;
      }
      tagsWrapper.innerHTML = html;
  }
}

generateTags();

function tagClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-', '');
  const activeTags = document.querySelectorAll('a.active[href^="#tag-]');
  for(let activeTag of activeTags){
      activeTag.classList.remove('active';)
    }
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  for(let tagLink of tagLinks){
      tagLink.classList.add('active');
    }
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
    const allLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    for(let links of allLinks){
      link.addEventListener('click', tagClickHandler);
}

addClickListenersToTags();
}

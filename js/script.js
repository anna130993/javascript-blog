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
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

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

  function generateTags(){
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles){
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      let html = '';
      const articleTags = article.getAttribute('data-tags');
      const articleTagsArray = articleTags.split(' ');
      for(let tag of articleTagsArray){
        const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        html = html + tagHTML + ' ';
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
      activeTag.classList.remove('active');
    }
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    for(let tagLink of tagLinks){
      tagLink.classList.add('active');
    }
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    const allLinksToTags = document.querySelectorAll('a.active[href^="#tag-"]');
    for(let linkToTag of allLinksToTags){
      linkToTag.addEventListener('click', tagClickHandler);
    }
  }

  addClickListenersToTags();


  function generateAuthors(){
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles){
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      let html = '';
      const articleAuthor = article.getAttribute('data-author');
      const authorHTML = 'written by' + '<li><a href="#author-'+ articleAuthor + '">' + articleAuthor + '</a></li>';
      html = html + authorHTML;
      authorWrapper.innerHTML = html;
    }
  }

  generateAuthors();

  function authorClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const author = href.replace('#author-', '');
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-]');
    for(let activeAuthor of activeAuthors){
      activeAuthor.classList.remove('active');
    }
    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
    for(let authorLink of authorLinks){
      authorLink.classList.add('active');
    }
    generateTitleLinks('[data-author~="' + author + '"]');
  }

  function addClickListenersToAuthors(){
    const linksToAuthors = document.querySelectorAll('a[href^="#author"]');
    for(let linkToAuthors of linksToAuthors){
      linkToAuthors.addEventListener('click', authorClickHandler);
    }
  }

  addClickListenersToAuthors();
}

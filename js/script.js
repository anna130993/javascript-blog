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

  // eslint-disable-next-line no-inner-declarations
  function generateTitleLinks(){
    const titleList = document.querySelector(optTitleListSelector);

    let html = '';

    const articles = document.querySelectorAll(optArticleSelector);
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
  /* find all articles */

  /* START LOOP: for every article: */

   /* find tags wrapper */

   /* make html variable with empty string */

   /* get tags from data-tags attribute */

   /* split tags into array */

   /* START LOOP: for each tag */

     /* generate HTML of the link */

     /* add generated code to html variable */

   /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();

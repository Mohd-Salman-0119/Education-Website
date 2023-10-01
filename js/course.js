fetch('/EducationSite/json/content.json')
.then(res => res.json())
.then(data =>{


     const courseData = data.moreCourses;
     const courseContainer = document.querySelector('.courses__container');

     courseData.forEach(ele => {
          // Element Creation
          const articaleCard = document.createElement('article')
          const imageContainer = document.createElement('div')
          const courseInfo = document.createElement('div')
          const imageTag = document.createElement('img')
          const headingText = document.createElement('h5')
          const paragraphText = document.createElement('p');
          const learnMore = document.createElement('a');

          // Adding Classes
          articaleCard.classList.add('course')
          imageContainer.classList.add('course__image')
          learnMore.classList.add('btn')
          learnMore.classList.add('btn-primary')
          courseInfo.classList.add('course__info')

          // Atteching Data into elements
          imageTag.src = ele.image
          headingText.innerHTML = ele.title
          paragraphText.innerHTML = ele.description
          learnMore.innerHTML = 'Learn More'

          // Atteching child on there places
          imageContainer.append(imageTag);
          courseInfo.append(headingText, paragraphText, learnMore)

          articaleCard.append(imageContainer, courseInfo)
          courseContainer.append(articaleCard)
     })
})
// =============== Fetching Data Form JSON ====================
fetch('/EducationSite/json/content.json')
     .then(res => res.json())
     .then(data => {

          // =============== Categories Data =====================

          const categoriesData = data.categories;

          let categoriesRightContainer = document.querySelector('.categories__right');

          categoriesData.forEach(element => {
               const articaleCard = document.createElement('article')
               const span = document.createElement('span')
               const icon = document.createElement('i');
               // add classList to tags
               articaleCard.classList.add('category');
               span.classList.add('category__icon')
               icon.classList.add('uil')

               const headingText = document.createElement('h5')
               const paragraphText = document.createElement('p');

               icon.classList.add(element.iconsClass);
               headingText.innerHTML = element.heading
               paragraphText.innerHTML = element.paragraph;

               span.append(icon);
               articaleCard.append(span, headingText, paragraphText)

               categoriesRightContainer.append(articaleCard)

          });

          // ===================== Courses Cards =====================

          const courseData = data.course;
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

          // ===================== FAQs =====================
          const faqsData = data.faqData;
          const faqContainer = document.querySelector('.faqs__container');

          faqsData.forEach(ele => {
               const articaleCard = document.createElement('article')
               const iconContainer = document.createElement('div')
               const questionAnswer = document.createElement('div')
               const icon = document.createElement('i');
               const questionText = document.createElement('h4')
               const answerText = document.createElement('p');

               // Adding ClassesF
               articaleCard.classList.add('faq')
               questionAnswer.classList.add('quetion__answer')
               iconContainer.classList.add('faq__icon')
               icon.classList.add('uil')
               icon.classList.add('uil-plus')

               // Atteching Data into elements
               questionText.innerHTML = ele.qestion
               answerText.innerHTML = ele.answer

               // Atteching child on there places
               iconContainer.append(icon);
               questionAnswer.append(questionText, answerText);
               articaleCard.append(iconContainer, questionAnswer);
               faqContainer.append(articaleCard)

               articaleCard.addEventListener('click', (event) => {
                    articaleCard.classList.toggle('open')

                    // change icons
                    const icons = event.currentTarget.querySelector('.faq__icon i')
                    if (icons.className === 'uil uil-plus') {
                         icons.className = "uil uil-minus"
                    } else {
                         icons.className = "uil uil-plus"
                    }
               })
          })

          // ===================== TESTIMONIAL =====================
          const testimonialData = data.testimonial;

          const testimonialContainer = document.querySelector('.swiper-wrapper');

          testimonialData.forEach(ele => {
               const articale = document.createElement('article')

               const avatarContainer = document.createElement('div')
               const avatarUrl = document.createElement('img')
               const testimonialInfo = document.createElement('div')
               const nameText = document.createElement('h5')
               const statusText = document.createElement('small')
               const testimonialBody = document.createElement('div')
               const paragraphText = document.createElement('p');

               // Adding Classes
               articale.classList.add('testimonial')
               articale.classList.add('swiper-slide')
               avatarContainer.classList.add('avatar')
               testimonialInfo.classList.add('testimonial__info')
               testimonialBody.classList.add('testimonial__body')

               // Atteching Data into elements
               avatarUrl.src = ele.avatar
               nameText.innerHTML = ele.name
               statusText.innerHTML = ele.status
               paragraphText.innerHTML = ele.description


               // Atteching child on there places
               avatarContainer.append(avatarUrl)
               testimonialInfo.append(nameText, statusText)
               testimonialBody.append(paragraphText)
               articale.append(avatarContainer, testimonialInfo, testimonialBody)
               testimonialContainer.append(articale)

          })

          // ===================== TESTIMONIAL =====================
     })


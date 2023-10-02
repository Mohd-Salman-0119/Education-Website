
// =======================================================================

fetch('/json/content.json')
     .then(res => res.json())
     .then(data => {

          const teamData = data.team;
          const teamContainer = document.querySelector('.team__container');

          const icons = [
               "uil-instagram",
               "uil-twitter-alt",
               "uil-linkedin-alt",
          ]
          const iconUrl = [
               "https://instagram.com",
               "https://twitter.com",
               "https://linkedin.com",
          ]

          teamData.forEach(ele => {
               const articale = document.createElement('article')

               const teamMemberImage = document.createElement('div')
               const image = document.createElement('img')

               const headingText = document.createElement('h4')
               const paragraphText = document.createElement('p');

               const teamMemberSocials = document.createElement('div')
               const teamMemberInfo = document.createElement('div')

               // Adding Classes
               articale.classList.add('team__member')
               teamMemberImage.classList.add('team__member-image')
               teamMemberSocials.classList.add('team__member-socials')
               teamMemberInfo.classList.add('team__member-info')

               // Icons

               for(let key in icons){
                    const ancher = document.createElement('a')
                    const icon = document.createElement('i')
                    icon.classList.add("uil")
                    icon.classList.add(icons[key])

                    ancher.href = iconUrl[key]
                    ancher.target = '_blank'
                    ancher.append(icon);
                    teamMemberSocials.append(ancher);
               }


               // Atteching Data into elements
               image.src = ele.imageUrl
               headingText.innerHTML = ele.name
               paragraphText.innerHTML = ele.status

               // Atteching child on there places
               teamMemberImage.append(image)
               teamMemberInfo.append(headingText, paragraphText);

               articale.append(teamMemberImage, teamMemberInfo, teamMemberSocials);

               teamContainer.append(articale)

          })

     })
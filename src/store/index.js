import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeProjects: [{
      name: 'Modern Kitchan',
      type: 'Decor / Artchitecture',
      imageSrc: './img/project1.png'
    }, {
      name: 'Modern Kitchan',
      type: 'Decor / Artchitecture',
      imageSrc: './img/project2.png'
    }, {
      name: 'Modern Kitchan',
      type: 'Decor / Artchitecture',
      imageSrc: './img/project3.png'
    }, {
      name: 'Modern Kitchan',
      type: 'Decor / Artchitecture',
      imageSrc: './img/project4.png'
    }],
    homeArticles: [{
      text: 'Let’s Get Solution For Building Construction',
      date: '26 December, 2022',
      imageSrc: './img/article1.png'
    }, {
      text: 'Low Cost Latest Invented Interior Designing Ideas',
      date: '22 December, 2022',
      imageSrc: './img/article2.png'
    }, {
      text: 'Best For Any Office & Business Interior Solution',
      date: '25 December, 2022',
      imageSrc: './img/article3.png'
    }],
    blogNews: [{
      img: 'img/kitchan.png',
      tag: 'Kitchan Design',
      text: 'Let’s Get Solution For Building Construction Work',
      date: '26 December, 2022'
    }, {
      img: 'img/living.png',
      tag: 'Living Design',
      text: 'Low Cost Latest Invented Interior Designing Ideas.',
      date: '22 December, 2022'
    }, {
      img: 'img/interior.png',
      tag: 'Interior Design',
      text: 'Best For Any Office & Business Interior Solution',
      date: '25 December, 2022'
    }, {
      img: 'img/kitchan2.png',
      tag: 'Kitchan Design',
      text: 'Let’s Get Solution For Building Construction Work',
      date: '26 December, 2022'
    }, {
      img: 'img/living2.png',
      tag: 'living Design',
      text: 'Low Cost Latest Invented Interior Designing Ideas.',
      date: '22 December, 2022'
    }, {
      img: 'img/interior2.png',
      tag: 'Interior Design',
      text: 'Best For Any Office & Business Interior Solution',
      date: '25 December, 2022'
    }],
    activeProject: 'none',
    projects: [{
      imageSource: 'img/bedroom.png',
      name: 'Bed Room',
      category: 'Bed Room'
    }, {
      imageSource: 'img/bedroom.png',
      name: 'Bed Room',
      category: 'Bed Room'
    }, {
      imageSource: 'img/bathroom.png',
      name: 'Bathroom',
      category: 'Bathroom'
    }, {
      imageSource: 'img/bathroom.png',
      name: 'Bathroom',
      category: 'Bathroom'
    }, {
      imageSource: 'img/bathroom.png',
      name: 'Bathroom',
      category: 'Bathroom'
    }, {
      imageSource: 'img/kitchen.png',
      name: 'Kitchen',
      category: 'Kitchen'
    }, {
      imageSource: 'img/kitchen.png',
      name: 'Kitchen',
      category: 'Kitchen'
    }],
    projectDetails: [{
      header: 'Minimal Look Bedrooms',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
      images: [
        'img/image1.png',
        'https://forgeinteriors.co.uk/wp-content/uploads/elementor/thumbs/72-pixel-images-1200-x-800-Tom-Howsam-living-room-light-green-background-phbeaf7vwec927uqu288mu8hbqv9x6csftc6mfwg00.png',
        'https://forgeinteriors.co.uk/wp-content/uploads/elementor/thumbs/Cundells-linen-curtains-2-72-pixel-images-1200-x-800-pq5vfgxyzz70oon5ndo0u2bvpb2amvl2a4lj0d5p34.png'],
      currentImage: 1
    }],
    blogActiveTags: [],
    blogDetailsTags: [{
      tag: 'Kitchen',
      active: 'blog__sidebar__tags__tag'
    },
    {
      tag: 'Bedroom',
      active: 'blog__sidebar__tags__tag'
    },
    {
      tag: 'Building',
      active: 'blog__sidebar__tags__tag'
    },
    {
      tag: 'Architecture',
      active: 'blog__sidebar__tags__tag'
    },
    {
      tag: 'Kitchen Planning',
      active: 'blog__sidebar__tags__tag'
    }],
    blogDetailsNews: [{
      tag: 'Kitchen',
      header1: 'Let’s Get Solution for Building Construction Work',
      header2: 'Design sprints are great',
      img1src: 'img/BlogDetails1.png',
      img2src: 'img/BlogDetails2.png',
      date: '26 December, 2022',
      text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
      text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      quote: 'The details are not the details. They make the design.',
      list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
    }, {
      tag: 'Bedroom',
      header1: 'Let’s Get Solution for Building Construction Work',
      header2: 'Design sprints are great',
      img1src: 'img/BlogDetails1.png',
      img2src: 'img/BlogDetails2.png',
      date: '26 December, 2022',
      text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
      text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      quote: 'The details are not the details. They make the design.',
      list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
    }]
  },
  getters: {
    getHomeProjects (state) {
      return state.homeProjects
    },
    getHomeArticles (state) {
      return state.homeArticles
    },
    getBlogNews (state) {
      return state.blogNews
    },
    sortedProjects (state) {
      if (state.activeProject !== 'none') {
        return state.projects.filter(item => state.activeProject === item.category)
      } else {
        return state.projects
      }
    },
    getProjectImage (state) {
      return state.projectDetails[0].images[state.projectDetails[0].currentImage]
    },
    getProjectData (state) {
      return {
        head: state.projectDetails[0].header,
        text: state.projectDetails[0].text
      }
    },
    sortedBlogDetailsNews (state) {
      if (state.blogActiveTags.length !== 0) {
        return state.blogDetailsNews.filter(item => state.blogActiveTags.includes(item.tag))
      } else {
        return state.blogDetailsNews
      }
    },
    blogActiveTags (state) {
      return state.blogActiveTags
    },
    blogDetailsTags (state) {
      return state.blogDetailsTags
    }

  },
  mutations: {
    SET_ACTIVE_PROJECT (state, category) {
      state.activeProject = category
    },
    NEXT_PROJECT_IMAGE (state) {
      if (state.projectDetails[0].currentImage < state.projectDetails[0].images.length - 1) {
        state.projectDetails[0].currentImage++
      } else {
        state.projectDetails[0].currentImage = 0
      }
      console.log(state.projectDetails[0].currentImage)
    },
    PREVIOS_PROJECT_IMAGE (state) {
      if (state.projectDetails[0].currentImage > 0) {
        state.projectDetails[0].currentImage--
      } else {
        state.projectDetails[0].currentImage = state.projectDetails[0].images.length - 1
      }
      console.log(state.projectDetails[0].currentImage)
    },
    ADD_TAG (state, tag) {
      if (!state.blogActiveTags.includes(tag)) {
        state.blogActiveTags.push(tag)
      } else {
        state.blogActiveTags.splice(state.blogActiveTags.indexOf(tag), 1)
      }
    },
    TOGGLE (state, i) {
      if (state.blogDetailsTags[i].active === 'blog__sidebar__tags__tag') {
        state.blogDetailsTags[i].active = 'blog__sidebar__tags__tag2'
      } else {
        state.blogDetailsTags[i].active = 'blog__sidebar__tags__tag'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

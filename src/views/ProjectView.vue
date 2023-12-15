<template>
    <div>
        <section class="banner">
            <img class="image" src="@/assets/ProjectBanner.png" alt="">
            <div class="tag">
                <h1 class="header">Our Project</h1>
                <p class="text">Home / Project</p>
            </div>
        </section>
        <section class="categories">
            <div class="block">
                <p v-for="(item, index) in actives" :key="index" @click="setActive(index)" :class="item.className">{{ item.name }}</p>
            </div>
        </section>
        <section class="projects center">
            <div v-for="(item, index) in this.$store.getters.sortedProjects" :key="index">
                <ProjectItem :project="item"></ProjectItem>
            </div>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ProjectItem from '../components/ProjectItem.vue'

export default {
  name: 'ProjectView',
  components: { ProjectItem },
  data () {
    return {
      activeCategory: '',
      categories: [{
        name: 'Bathroom',
        className: 'notActive'
      }, {
        name: 'Bed Room',
        className: 'notActive'
      }, {
        name: 'Kitchen',
        className: 'notActive'
      }, {
        name: 'Living Area',
        className: 'notActive'
      }]
    }
  },
  methods: {
    ...mapMutations(['SET_ACTIVE_PROJECT']),
    setActive (i) {
      if (this.categories[i].name !== this.activeCategory) {
        this.activeCategory = this.categories[i].name
        this.SET_ACTIVE_PROJECT(this.activeCategory)
      } else {
        this.activeCategory = 'none'
        this.SET_ACTIVE_PROJECT('none')
      }
      this.$emit('active', this.activeCategory)
      console.log(this.$store.getters.sortedProjects)
    }
  },
  computed: {
    actives () {
      this.categories.forEach(item => {
        if (item.name === this.activeCategory) {
          item.className = 'active'
        } else {
          item.className = 'notActive'
        }
      })
      return this.categories
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    .tag {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 504px;
        height: 178px;
        position: absolute;
        background-color: white;
        left: calc(50% - 504px/2);
        top: 178px;
        border-top-right-radius: 37px;
        border-top-left-radius: 37px;
        .header {
            padding-top: 41px;
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 63px;
            letter-spacing: 0em;
            text-align: left;
            margin: 0;
        }
        .text {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            margin: 0;
        }
    }
}
.categories {
    margin-top: 200px;
    justify-content: center;
    display: flex;
    .block {
        border: 1px solid #CDA274;
        border-radius: 18px;
        width: 880px;
        height: 75px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 0px;
    }
    .notActive {
        width: 219px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
    }
    .active {
        width: 219px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        background-color: #CDA274;
        color: #FFFFFF;
        border-radius: 18px;
    }
}
.projects {
    margin: 61px calc(50vw - 1200px/2) 200px calc(50vw - 1200px/2);
    width: 1200px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 30px;
}
</style>

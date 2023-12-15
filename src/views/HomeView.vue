<template>
  <div>
    <section class="main center">
      <h1 class="header">Let Your Home Be Unique</h1>
        <p class="text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
        <a href="#" class="button">
            <p>Get Started</p>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.43529L14.7232 8.29844M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
        </a>
    </section>
    <section class="projects center">
      <h1 class="header">Follow Our Projects</h1>
        <p class="text">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        <div class="block">
          <div class="block" v-for="(item, index) in projects" :key="index">
            <HomeProject :project="item"></HomeProject>
          </div>
        </div>
    </section>
    <section class="calculation center">
      <div class="item">
            <h1 class="number">12</h1>
            <p class="name">Years Of Experiance</p>
        </div>
        <div class="line"></div>
        <div class="item">
            <h1 class="number">85</h1>
            <p class="name">Success Project</p>
        </div>
        <div class="line"></div>
        <div class="item">
            <h1 class="number">15</h1>
            <p class="name">Active Project</p>
        </div>
        <div class="line"></div>
        <div class="item">
            <h1 class="number">95</h1>
            <p class="name">Happy CUstomers</p>
        </div>
    </section>
    <section class="articles center">
        <h1 class="header">Articles & News</h1>
        <p class="text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        <div class="block">
          <div class="item"  v-for="(item, index) in articles" :key="index">
            <HomeArticle :article="item"></HomeArticle>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import HomeProject from '@/components/HomeProject.vue'
import HomeArticle from '@/components/HomeArticle.vue'

export default {
  name: 'HomeView',
  components: {
    HomeProject,
    HomeArticle
  },
  data () {
    return {
      projects: this.$store.getters.getHomeProjects,
      articles: this.$store.getters.getHomeArticles
    }
  }
}
</script>

<style>
.main {
    position: relative;
    display: flex;
    gap: 18px;
    flex-direction: column;
    width: auto;
    margin-bottom: 96px;
    background: url('../assets/mainBG.png');
    background-repeat: no-repeat;
    padding: 208px 715px 208px 52px;
    border-radius: 50px;
    overflow: hidden;
    .header {
      font-family: DM Serif Display;
      font-size: 65px;
      font-weight: 400;
      line-height: 81px;
      letter-spacing: 0em;
      text-align: left;
      color: #292F36;
      width: 434px;
    }
    .text {
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      text-align: left;
      color: #4D5053;
    }
    .button {
      font-family: Jost;
      font-size: 18px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0.02em;
      text-align: center;
      color: #FFFFFF;
      background-color: #292F36;
      width: 220px;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 18px;
    }
}
.projects {
  display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 96px;
    .header {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #292F36;
        padding-bottom: 8px;
    }
    .text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: center;
        color: #4D5053;
        width: 737px;
        padding-bottom: 93px;
    }
    .block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 56px;
    }
}
.calculation {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #F4F0EC;
    height: 457px;
    margin: 0px;
    padding-left: calc(50vw - 1200px/2);
    padding-right: calc(50vw - 1200px/2);
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        .number {
            font-family: DM Serif Display;
            font-size: 85px;
            font-weight: 400;
            line-height: 106px;
            letter-spacing: 0.02em;
            text-align: left;
            color: #CDA274;
        }
        .name {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #4D5053;
        }
    }
    .line{
        height: 130px;
        width: 0px;
        border: 1px solid #CDA274;
    }
}
.articles {
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 96px;
    .header {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #292F36;
        padding-bottom: 12px;
    }
    .text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: center;
        color: #4D5053;
        width: 811px;
        padding-bottom: 52px;
    }
    .block {
        display: flex;
        gap: 27px;
    }
    .item {
        height: 521px;
        width: 382px;
        border: 1px solid #E7E7E7;
        border-radius: 62px;
        transition: 0.2s;
    }
    .item:hover {
        background-color: #F4F0EC;
    }
    .item:hover .link {
        background-color: #FFF;
    }
}
</style>

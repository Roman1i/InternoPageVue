<template>
  <div>
    <section class="banner">
      <div class="content">
            <h1 class="header">Articles & News</h1>
            <p class="text">Home / Blog</p>
        </div>
    </section>
    <section class="latest center">
      <h1 class="header">Latest Post</h1>
      <div class="content">
          <img class="latest__img" src="@/assets/latestPost.png" alt="">
          <div class="description">
              <h2 class="header">Low Cost Latest Invented Interior <br>Designing Ideas</h2>
              <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
              <div class="date">
                  <p class="text">26 December, 2022 </p>
                  <a class="link" href="#">
                      <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                  </a>
              </div>
          </div>
      </div>
    </section>
    <section class="news center">
        <h1 class="header">Articles & News</h1>
        <div class="block">
            <div v-for="(item, index) in this.news" :key="index">
              <BlogNews :news="item"></BlogNews>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import BlogNews from '@/components/BlogNews.vue'

export default {
  name: 'BlogView',
  components: {
    BlogNews
  },
  data () {
    return {
      news: this.$store.getters.getBlogNews
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 356px;
    background-image: url('../assets/blogBG.png');
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        height: 178px;
        width: 503px;
        border-radius: 37px 37px 0px 0px;
    }
    .header {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
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
}
.latest {
    display: flex;
    flex-direction: column;
    padding-top: 200px;
    .header {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
        padding-bottom: 27px;
    }
    .content {
        display: flex;
        align-items: center;
        gap: 65px;
        border: 1px solid #E7E7E7;
        border-radius: 62px;
        padding: 22px;
        .description {
            .header {
                font-family: DM Serif Display;
                font-size: 25px;
                font-weight: 400;
                line-height: 31px;
                letter-spacing: 0.02em;
                text-align: left;
                color: #292F36;
                padding-bottom: 22px;
            }
            .text {
                width: 469px;
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 33px;
                letter-spacing: 0.01em;
                text-align: left;
                color: #4D5053;
                padding-bottom: 41px;
            }
            .date {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .text {
                    font-family: Jost;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0.01em;
                    text-align: left;
                    color: #4D5053;
                }
                .link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 52px;
                    height: 52px;
                    border-radius: 50px;
                    background-color: #F4F0EC;
                }
            }
        }
    }
}
.news {
    padding-top: 150px;
    padding-bottom: 200px;
    .header {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
        padding-bottom: 30px;
    }
    .block {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }
}
</style>

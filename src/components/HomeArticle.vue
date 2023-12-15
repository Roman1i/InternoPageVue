<template>
    <a class="item" href="#">
        <div class="content">
            <img class="img" :src="this.article.imageSrc" alt="">
            <h2 class="text">{{ this.article.text }}</h2>
            <div class="bottom">
                <p class="date">{{ this.article.date }}</p>
                <div class="link">
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
  name: 'HomeArticle',
  props: { article: Object },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    padding: 21px;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    .text {
        width: 250px;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
        padding-top: 21px;
        padding-bottom: 15px;
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 65px;
        .date {
            font-family: Jost;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #4D5053;
            width: 223px;
        }
        .link {
            background-color: #F4F0EC;
            width: 52px;
            height: 52px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s;
        }
    }
}
</style>

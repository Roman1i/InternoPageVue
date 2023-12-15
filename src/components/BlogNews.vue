<template>
    <router-link to="/blog-details" class="item">
        <img class="img" :src="news.img" alt="">
        <div class="tag"><span>{{ this.news.tag }}</span></div>
        <h2 class="text">{{ this.news.text }}</h2>
        <div class="date">
            <p class="text">{{ this.news.date }}</p>
            <div href="#" class="link">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'BlogNews',
  props: { news: Object }
}
</script>

<style lang="scss" scoped>
.item {
    transition: 0.2s;
    box-sizing: border-box;
    width: 382px;
    height: 521px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
    display: flex;
    flex-direction: column;
    padding: 21px;
    position: relative;
    .tag {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-family: Jost;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
        background-color: #FFFFFF;
        width: 124px;
        height: 40px;
        border-radius: 8px 8px 8px 0px;
        left: 41px;
        top: 249px;
    }
    .text {
        text-align: left;
        padding-top: 11px;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #292F36;
        height: 93px;
        width: 305px;
        padding-bottom: 20px;
    }
    .date {
        padding-top: 10px;
        width: 340px;
        display: flex;
        justify-content: space-between;
        height: 52px;
        .text {
            font-family: Jost;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #4D5053;
            height: 52px;
        }
        .link {
            transition: 0.2s;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 52px;
            height: 52px;
            background-color: #F4F0EC;
            border-radius: 50px;
        }
    }
}
.item:hover {
    background-color: #F4F0EC;
}
.item:hover .link{
    background-color: #FFFFFF;
}
</style>

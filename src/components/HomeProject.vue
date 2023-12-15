<template>
    <div class="project">
        <img class="image" :src="this.project.imageSrc" alt="">
        <div class="info">
            <div class="description">
                <h2 class="name">{{ project.name }}</h2>
                <p class="type">{{ project.type }}</p>
            </div>
            <a class="link" href="#">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeProject',
  props: { project: Object },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
    height: 619px;
    width: 549px;
    border-top-right-radius: 50px;
    overflow: hidden;
    .image {
        padding-bottom: 24px;
    }
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .description {
            .name {
                font-family: DM Serif Display;
                font-size: 25px;
                font-weight: 400;
                line-height: 31px;
                letter-spacing: 0.02em;
                text-align: left;
                color: #292F36;
            }
            .type {
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 33px;
                letter-spacing: 0.01em;
                text-align: left;
                color: #4D5053;
            }
        }
        .link {
            background-color: #F4F0EC;
            width: 65px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
        }
    }
}
</style>

<template>
    <div class="home w100 clearfix" @click="isShowDialog = false">
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      selectLanguage(lang) {
        this.$i18n.locale = lang;
        localStorage.setItem('lang', lang)
      },
      goTrustWallet() {
        window.location.href = 'https://trustwallet.com/'
      },
      downloadAndroid() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite'
      },
      downloadIos() {
        window.location.href = 'https://apps.apple.com/app/apple-store/id1288339409?mt=8'
      },
  
    }
  }
  </script>
  <style lang="scss">
  .banner {
    position: relative;
    display: flex;
    justify-content: center;
  
    .banner_img {
      height: 41rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
    }
  
    .banner-content {
      width: 66rem;
      height: 41rem;
  
      header {
        height: 35px;
        margin-top: 20px;
        position: relative;
  
        img {
          width: 35px;
          border-radius: 10px;
        }
  
        .link_box {
          font-size: 14px;
          color: white;
          height: 100%;
          cursor: pointer;
        }
  
        .link_text {
          margin-left: 10px;
        }
  
        .lang_icon {
          width: 15px;
          margin-top: 10px;
        }
  
        .lang-text-box {
          cursor: pointer;
        }
  
        .language_dialog {
          position: absolute;
          width: 120px;
          height: 160px;
          background: #fff;
          right: 0px;
          top: 35px;
          z-index: 2000;
          border-radius: 4px;
  
          ul {
            li {
              width: 100%;
              height: 45px;
              line-height: 45px;
              color: #000;
              padding-left: 10px;
              border-bottom: 1px solid #dadee0;
              cursor: pointer;
            }
          }
        }
      }
  
      .banner_main {
        height: 600px;
  
        .banner_main_left {
          width: 450px;
          float: left;
          height: 600px;
  
          .banner_text_header {
            font-size: 35px;
            color: #fff;
            font-weight: 500;
            margin-top: 100px;
          }
  
          .banner_text_explain {
            font-size: 13px;
            color: #fff;
            margin-top: 50px;
            letter-spacing: 0.3px;
          }
  
          .download_btn_box {
            margin-top: 60px;
            display: flex;
  
            img {
              width: 150px;
              margin-right: 40px;
              cursor: pointer;
            }
          }
        }
  
        .banner_main_right {
          width: 600px;
          float: left;
          position: relative;
  
          .phone_img {
            width: 100%;
          }
        }
      }
    }
  }
  
  .info {
    display: flex;
    justify-content: center;
    background-image: url(../assets/img/dz_jmhb.png);
    background-size: 100% 100%;
    height: 430px;
  
    .info_content {
      width: 66rem;
  
      .info_title {
        font-size: 35px;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        margin-top: 30px;
      }
  
      .info_text {
        font-size: 13px;
        color: #000;
        display: flex;
        justify-content: center;
        height: 40px;
        margin-top: 10px;
      }
  
      .info_list_content {
        display: flex;
        flex-wrap: wrap;
  
        &>ul:first-child {
          margin-left: 8%;
        }
  
        &>ul:last-child {
          margin-left: 4%;
        }
  
        &>ul {
          width: 40%;
          border: 1px solid #dadee0;
          border-radius: 2px;
          margin-top: 30px;
  
          &>li {
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #dadee0;
            display: flex;
            align-items: center;
            padding-left: 20px;
  
            img {
              width: 15px;
              margin-right: 10px;
              font-size: 14px;
            }
          }
  
          &>li:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  
  }
  
  .cat {
    display: flex;
    justify-content: center;
    height: 500px;
    background-image: url(../assets/img/cat-food-bg.png);
    background-size: 100% 100%;
  
    .cat_content {
      width: 66rem;
      display: flex;
      flex-wrap: wrap;
  
      .cat_icon,
      .cat_text {
        margin-top: 65px;
      }
  
      .cat_text {
        color: #fff;
        padding-left: 100px;
  
        &>p {
          font-size: 35px;
        }
  
        &>p:first-child {
          margin-top: 50px;
        }
  
        &>p:last-child {
          font-size: 13px;
          display: block;
          width: 360px;
          margin-top: 40px;
        }
      }
    }
  }
  
  .zhifu {
    height: 400px;
    background-image: url(../assets/img/home_zhifu.png) !important;
  
    .zhifu_content {
      p {
        color: #000;
      }
  
      .cat_icon {
        width: 400px;
        margin-top: 30px;
      }
    }
  }
  
  .daoju {
    background-image: url(../assets/img/bg.png) !important;
  
    .daoju_content {
      .cat_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
  
        img {
          width: 330px;
        }
      }
  
      .cat_text {
        padding-left: 40px;
      }
    }
  }
  
  .download_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    color: #000;
    height: 500px;
  
    .download_box_title {
      font-size: 30px;
      margin-top: 30px;
    }
  
    .download_box_text {
      margin-top: 30px;
    }
  
    .download_step_list {
      margin-top: 30px;
      display: flex;
      width: 600px;
  
      .step_item {
        display: flex;
        flex-direction: column;
        align-items: center;
  
        img {
          width: 70%;
        }
  
        span {
          display: inline-block;
          margin-top: 20px;
        }
      }
    }
  
    .download_box_btn {
      display: flex;
      margin-top: 50px;
  
      img {
        cursor: pointer;
      }
  
      &>img:first-child {
        margin-right: 30px;
      }
    }
  }
  
  .footer {
    height: 200px;
    background: #0B65C6;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    .link_box_list {
      width: 290px;
      display: flex;
      height: 80px;
      align-items: center;
      margin-top: 20px;
  
      .link_box {
        font-size: 1rem;
        color: white;
        height: 35px;
        cursor: pointer;
  
        img {
          width: 35px;
          border-radius: 10px;
        }
      }
  
  
      .link_text {
        margin-left: 10px;
      }
    }
  
    .icon_list {
      width: 200px;
      display: flex;
  
      .icon-item {
        width: 50px;
        height: 30px;
  
        img {
          width: 25px;
        }
      }
    }
  
    .footer_text {
      margin-top: 20px;
      color: #fff;
    }
  }
  
  @media screen and (max-width:430px) {
    .banner {
      .banner-content {
        width: 95% !important;
        height: 60rem;
  
        .banner_main {
          height: 900px;
  
          .banner_main_left {
            width: 100%;
            height: 500px;
  
            .banner_text_header {
              font-size: 36px;
            }
          }
  
          .banner_main_right {
            width: 100%;
          }
        }
      }
  
      .banner_img {
        height: 60rem;
      }
    }
  
    .info {
      height: 600px;
  
      .info_content {
        .info_title {
          font-size: 25px;
          color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
        }
  
        .info_list_content {
          display: flex;
          flex-wrap: wrap;
  
          &>ul {
            width: 320px;
            margin-left: 35px !important;
          }
        }
      }
    }
  
    .cat {
      height: 800px;
  
      .cat_content {
        width: 100%;
  
        .cat_icon,
        .cat_text {
          margin-top: 0px;
          width: 100%;
        }
  
        img {
          margin-top: 60px;
        }
  
        .cat_text {
          padding-left: 0px;
          padding: 10px;
  
          &>p {
            //font-size: 45px;
          }
  
          &>p:first-child {
            margin-top: 20px;
          }
  
          &>p:last-child {
            width: 100%;
          }
        }
      }
    }
  
  
    .download_box {
      height: 1000px;
  
      .download_step_list {
        width: 80%;
        flex-wrap: wrap;
        justify-content: center;
  
        .step_item {
          width: 90%;
        }
      }
    }
  
  }
  </style>
  
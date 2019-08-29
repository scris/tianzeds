<template>
  <div id="app" class="container animated slideInUp">
    ＴｉａｎｚｅＤｓＱｉｕ<br>
    浙江省杭州第二中学学生<br>
    个人主要作品<br>
    <span class="grey">
      <a href="https://github.com/scris/switchable">Ｓｗｉｔｃｈａｂｌｅ</a><br>
      Ｌｉｎｘｖｕｅ<br>
      ＳｃｒｉｓＴａｓｋ<br>
    </span>
    技能<br>
    <span class="grey">
      ＨＴＭＬ与ＣＳＳ<br>
      ＪＳ与Ｖｕｅ<br>
      Ｅｌｅｃｔｒｏｎ<br>
      Ｃａｐａｃｉｔｏｒ<br>
      Ｃｏｒｄｏｖａ<br>
      Ｕｎｉｔｙ<br>
      ＰｒｅｍｉｅｒｅＰｒｏ<br>
      Ｐｈｏｔｏｓｈｏｐ<br>
    </span>
    <!--字符使用http://life.chacuo.net/convertban2quan转为全角-->
    <a href="https://github.com/scris">
      <svg t="1566531401413" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1101" width="200" height="200">
        <path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" p-id="1102">
        </path>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
}
</script>

<style>
body {
    background-color: #fdfdfd; 
    font-weight: 500;
    text-transform: uppercase;
    line-height: 200%;
    font-family: "Alibaba-PuHuiTi-Regular", "Alibaba PuHuiTi", Consolas, Menlo, monospace;
}

a, a:hover, a:active {
    text-decoration: none;
    outline: none;
    color: grey;
}

a:hover {
  color: darkslategray;
}

a:active {
  color: slategray;
}

.container {
    width: 84vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-content: center;
    margin-left: 8vw;
    margin-right: 8vw;
    margin-top: 10vh;
    margin-bottom: 10vh;
    padding-right: 0rem;
    letter-spacing: 0.78rem;
    font-size: 0.78rem;
}
.icon {
  width: 0.78rem;
  height: 0.78rem;
}

@media (min-width: 420px) {
    .container {
      max-width: 420px;
      letter-spacing: 1rem;
      font-size: 1rem;
      line-height: 200%;
    }    
    .icon {
      width: 1rem;
      height: 1rem;
    }
}

@media (min-width: 630px) {
    .container {
      max-width: 620px;
      letter-spacing: 1.5rem;
      font-size: 1.5rem;
      line-height: 200%;
    }    
    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }
}
  
@media (min-width: 768px) {
    .container {
      max-width: 768px;
      letter-spacing: 1.7rem;
      font-size: 1.7rem;
      line-height: 200%;
    }    
    .icon {
      width: 1.7rem;
      height: 1.7rem;
    }
}
  
@media (min-width: 992px) {
    .container {
      max-width: 992px;
      letter-spacing: 1.8rem;
      font-size: 1.8rem;
      line-height: 200%;
    }
     .icon {
      width: 1.8rem;
      height: 1.8rem;
    }
}
  
@media (min-width: 1200px) {
    .container {
      max-width: 1200px;
      letter-spacing: 2rem;
      font-size: 2rem;
      line-height: 200%;
    }
    .icon {
      width: 2rem;
      height: 2rem;
    }
}
.grey {
  color: gray;
}

.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both
}


@-webkit-keyframes slideInUp {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible
    }
}

@keyframes slideInUp {
    0% {
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible
    }
}

.slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp
}
</style>

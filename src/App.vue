<template>
  <div id="app" class="container animated slideInUp">
    ＴｉａｎｚｅＤｓＱｉｕ<br>
    浙江省杭州第二中学学生<br>
    个人主要作品
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
    <span>
      <a href="https://github.com/scris" target="_blank">
        <svg t="1566531401413" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1101" width="200" height="200">
          <path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" p-id="1102"></path>
        </svg>
      </a>
      <br>
      <a href="https://scris.top/" target="_blank">
        <svg height="476.404494" class="icon" viewBox="0 0 400 476.40449438" width="400" xmlns="http://www.w3.org/2000/svg">
          <path d="m73.034 2.042c-25.423 6.304-24.618 2.483-25.336 120.327-.86 141.309-18.649 125.714 144.435 126.618 66.74.369 122.188 1.514 123.217 2.543 2.903 2.903 1.84 184.683-1.101 188.227-2.703 3.257-225.335 4.437-230.259 1.22-5.771-3.771-5.935-15.621-.237-17.051 54.31-13.631 49.398-101.111-6.591-117.388-72.165-20.979-109.502 85.511-40.645 115.924l10.674 4.715.004 11.692c.01 36.613-.827 36.412 151.681 36.412 143.432 0 139.118.508 147.214-17.331 5.801-12.782 6.93-211.761 1.278-225.289-6.698-16.031-3.728-15.676-141.609-16.931l-123.454-1.123-1.979-7.642c-3.391-13.098-1.119-165.148 2.533-169.544 5.176-6.231 230.569-5.62 233.916.634 3.828 7.152 2.676 11.361-3.782 13.817-60.521 23.01-42.261 118.623 22.701 118.865 66.477.248 88.092-88.823 28.346-116.807-10.84-5.077-11.01-5.319-12.505-17.741-4.443-36.913 3.545-34.987-147.041-35.442-68.595-.207-127.752.376-131.46 1.295m279.139 82.61c4.349 2.064 9.807 6.867 12.129 10.674 14.392 23.601-11.899 53.202-36.125 40.674-33.299-17.219-9.845-67.407 23.996-51.348m-277.786 257.556c15.468 10.392 16.914 29.861 3.233 43.542-16.439 16.44-45.714 5.029-46.585-18.159-.912-24.262 23.629-38.632 43.352-25.383" fill-rule="evenodd"/>
        </svg>
      </a>
    </span>
    <!--字符使用http://life.chacuo.net/convertban2quan转为全角-->
  </div>
</template>

<script>
import Darkmode from 'darkmode-js';
export default {
  name: 'app',
  components: {},
  mounted: function() {
    new Darkmode().showWidget();
  }
}
</script>

<style>
.darkmode--activated {
    color: #fdfdfd;
}

body {
    background-color: #fdfdfd; 
    color: black;
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

.darkmode--activated a {
    color: lightgrey;
}

.darkmode--activated a:hover {
    color: slategray;
}

.darkmode--activated a:active {
    color: lightslategray;
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
.darkmode--activated .icon {
    fill: whitesmoke;
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
  color: grey;
}

.darkmode--activated .grey {
    color: lightgrey;
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

.reset {
    letter-spacing: 0rem;
}

</style>

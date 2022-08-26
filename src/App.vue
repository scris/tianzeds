<template>
  <div id="app" class="container">
    <div class="section">
      <div class="title">
        Tianze Ds
      </div>
      <div class="line desc">
        Enthusiast for creating things, and building great apps that're benificial to
        people's lives.
      </div>
      <div class="line education">
        Undergraduate of BUPT, Beijing, China.
      </div>
    </div>
    <div class="section section-flex">
      <div class="section-title">Technology&nbsp;</div>
      <div class="section-content">
        <div class="line">
          - Mostly Used
        </div>
        <div class="kind">
          Flutter&nbsp;<span class="tech">for Mobile/Desktop Apps</span>
        </div>
        <div class="kind">
          Electron&nbsp;<span class="tech">for Desktop Apps</span>
        </div>
        <div class="kind">Vue&nbsp;<span class="tech">for Websites</span></div>
        <div class="line line-below">
          - And Others
        </div>
        <div class="kind">
          <span class="less-use"
            >HTML, CSS, Vanilla JS, Pytorch, Git, Photoshop, Unity, Premiere
            Pro, QT, Capacitor, Lightroom ...</span>
        </div>
      </div>
    </div>
    <div class="section section-flex">
      <div class="section-title">Projects&nbsp;</div>
      <div class="section-content">
        <div id="focam">
          <div class="kind">
            - Focam, Plannium&nbsp;<span class="tech">Grade 12 - freshman year</span>
          </div>
          <div class="line-desc kind-desc">
            &nbsp;&nbsp;Using Flutter and Electron, under pre-alpha development. </div>
        </div>
        <div id="lika" class="line-below">
          <div class="kind">
            - Lika AI Work&nbsp;<span class="tech">before freshman year</span>
          </div>
          <div class="line-desc kind-desc">
            &nbsp;&nbsp;Using Pytorch. Built the software part of a low-cost low-image-resolution fabric anomaly detection system with another 12th-grader on top of Maix-II and STFPM. </div>
        </div>
        <div id="timona" class="line-below">
          <div class="kind">
            - Timona&nbsp;<span class="tech">during Grade 11-12</span>
          </div>
          <div class="line-desc kind-desc">
            &nbsp;&nbsp;Using Flutter, in private beta. One of the strongest ways to keep you on schedule, and live fully of your self-planned times.</div>
          <div class="line-desc tech">
            &nbsp;&nbsp;<a href="https://s2.loli.net/2022/08/26/Mo7zSU9KWhnYylP.png" target="_blank">[Screenshot]</a>
          </div>
        </div>
        <div id="mrnoplay" class="line-below">
          <div class="kind">
            - Mr. Noplay&nbsp;<span class="tech">during Grade 10</span>
          </div>
          <div class="line-desc kind-desc">
            &nbsp;&nbsp;Using Electron. Give an end to no-end rests and play times. With a extra-strict way to work to keep users on the schedule, and a vivid user interface.
          </div>
          <div class="line-desc tech">
            &nbsp;&nbsp;<a href="https://github.com/mrnoplay/mrnoplay" target="_blank">[GitHub]</a>&nbsp;<a href="https://mrnoplay.tianzeds.com/" target="_blank">[Website]</a>&nbsp;<a href="https://i.loli.net/2020/02/09/XewHqoUimbFtPRO.jpg" target="_blank">[Older Version]</a>
          </div>
        </div>
        <div id="switchable" class="line-below">
          <div class="kind">
            - Switchable&nbsp;<span class="tech">during Grade 9</span>
          </div>
          <div class="line-desc kind-desc">
            &nbsp;&nbsp;Using Electron, archived. A plan-based alarm, allowing you to create amount of daily plans, then quickly switch from one to another.</div>
          <div class="line-desc tech">
            &nbsp;&nbsp;<a href="https://github.com/scris/switchable" target="_blank">[GitHub]</a>&nbsp;<a href="https://s2.loli.net/2022/08/26/UkWZjidsT5ol3cA.png" target="_blank">[Screenshot]</a>
          </div>
        </div>
        <div id="mixbank" class="line-below">
          <div class="kind">
            - Mixbank&nbsp;<span class="tech">during Grade 8</span>
          </div>
          <div class="line-desc kind-desc">
            &nbsp;&nbsp;Using Unity. Try your best to click faster in order to get a terrific score!</div>
          <div class="line-desc tech">
            &nbsp;&nbsp;<a href="https://i.loli.net/2018/02/26/5a9371bf6d192.jpeg" target="_blank">[Screenshot]</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-content shallow">
        Copyright &copy; Tianze Ds Qiu 2022. GitHub <a href="https://github.com/scris" target="_blank">@scris</a>.
      </div>
    </div>
  </div>
</template>

<script>
import Darkmode from "darkmode-js";
export default {
  name: "app",
  components: {},
  mounted: function() {
    // new Darkmode().showWidget();
  },
};
</script>

<style lang="scss">
$base: 0.51em;
$green: green;
$black: #445a51;
$grey: #66bf9a;
$grey2: #39bc85;
$grey3: #16a66a;
$shallow: #8eb0a2;

.darkmode--activated {
  color: #fdfdfd;
}

body {
  background-color: #fdfdfd;
  color: $black;
  font-weight: 500;
  font-family: "", monospace;
  line-height: 110%;
}

.title {
  font-size: $base * 4;
  line-height: 210%;
  background: #02be70;
  -webkit-background-clip: text;
  color: transparent;
}

.line {
  color: $black;
  padding-bottom: $base * 1.4;
}

.line-desc {
  color: $black;
  padding-bottom: $base * 0.9;
}

.line-below {
  padding-top: $base * 1.8;
}

.section {
  padding-bottom: $base * 5.6;
}

.section-flex {
  display: flex;
  transform: translateX(-1.5rem);
  width: 90vw;
}

.section-title {
  padding-right: 1rem;
  text-align: right;
  color: $grey;
}

.section-content {
  width: 56vw;
}

.tech {
  color: $grey2;
}

.less-use {
  color: $grey3;
}

.kind {
  padding-bottom: $base * 0.8;
}

.kind-desc {
  color: $shallow;
}

.shallow {
  color: $shallow;
}

a,
a:hover,
a:active {
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
  width: 52vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  margin-left: 26vw;
  margin-right: 22vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  padding-right: 0rem;
  font-size: $base;
}

.icon {
  width: 0.78rem;
  height: 0.78rem;
}

.darkmode--activated .icon {
  fill: whitesmoke;
}

@media (max-width: 630px) {
  .container {
    margin-left: 13vw;
    margin-right: 9vw;
  }
}

@media (min-width: 420px) {
  .container {
    font-size: $base * 1.6;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
}

@media (min-width: 630px) {
  .container {
    font-size: $base * 1.7;
    line-height: 130%;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .section-title {
    padding-right: 1rem;
    width: 7rem;
  }
  .section-flex {
    display: flex;
    transform: translateX(-8rem);
  }
}

@media (min-width: 768px) {
  .container {
    font-size: $base * 1.8;
    line-height: 140%;
  }
  .icon {
    width: 1.7rem;
    height: 1.7rem;
  }
}

@media (min-width: 992px) {
  .container {
    font-size: $base * 1.9;
    line-height: 145%;
  }
  .icon {
    width: 1.8rem;
    height: 1.8rem;
  }
  .section-title {
    padding-right: 1rem;
    width: 10rem;
  }
  .section-flex {
    display: flex;
    transform: translateX(-11rem);
  }
}

@media (min-width: 1200px) {
  .container {
    font-size: $base * 2;
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
  animation-fill-mode: both;
}

@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }
}

@keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}

.reset {
  letter-spacing: 0rem;
}
</style>

<template>
  <div id="app">
    <div class="grid"></div>
    <div class="container">
      <div class="section">
        <div class="title">
          Tianze Ds
        </div>
        <div class="line title-desc title-below">
          Enthusiast of creating things, and building great apps that are beneficial to
          people's lives.
        </div>
        <div class="line education title-below">
          Undergraduate of BUPT, Beijing, China. Based in Hangzhou.
        </div>
      </div>
      <div class="section section-flex section-tech">
        <div class="section-title">Technology&nbsp;</div>
        <div class="section-content">
          <div class="line kinds">
            Mostly Used
          </div>
          <div class="kind">
            Flutter&nbsp;<span class="tech">for Mobile/Desktop Apps</span>
          </div>
          <div class="kind">
            Electron&nbsp;<span class="tech">for Desktop Apps</span>
          </div>
          <div class="kind">Vue&nbsp;<span class="tech">for Websites</span></div>
          <div class="line line-below kinds">
            And Others
          </div>
          <div class="kind">
          <span class="less-use"
          >HTML, CSS, Vanilla JS, Pytorch, Git, Photoshop, Unity, Premiere
            Pro, QT, Capacitor, Lightroom ...</span>
          </div>
        </div>
      </div>
      <div class="section section-flex section-proj">
        <div class="section-title">Projects&nbsp;</div>
        <div class="section-content">
          <div id="focam">
            <div class="kind">
              Focam, Plannium&nbsp;<span class="tech">Grade 12 - freshman year</span>
            </div>
            <div class="line-desc kind-desc">
              Using Flutter and Electron, under pre-alpha development.
            </div>
          </div>
          <div id="lika" class="line-below">
            <div class="kind">
              Lika AI Work&nbsp;<span class="tech">before freshman year</span>
            </div>
            <div class="line-desc kind-desc">
              Using Pytorch. Built the software part of a low-cost low-image-resolution fabric anomaly
              detection system with another 12th-grader on top of Sipeed Maix-II and STFPM.
            </div>
          </div>
          <div id="timona" class="line-below">
            <div class="kind">
              Timona&nbsp;<span class="tech">during Grade 11-12</span>
            </div>
            <div class="line-desc kind-desc">
              Using Flutter, in private beta. One of the strongest ways to keep you on schedule, and live
              fully of your self-planned times.
            </div>
            <div class="line-desc">
              <div class="line-desc links">
                <a href="https://s2.loli.net/2022/08/26/Mo7zSU9KWhnYylP.png" target="_blank">Screenshot</a>
              </div>
            </div>
            <div id="mrnoplay" class="line-below">
              <div class="kind">
                Mr. Noplay&nbsp;<span class="tech">during Grade 10</span>
              </div>
              <div class="line-desc kind-desc">
                Using Electron. Give an end to no-end rests and play times. With a extra-strict way to work to
                keep users on the schedule, and a vivid user interface.
              </div>
              <div class="line-desc links">
                <a href="https://github.com/mrnoplay/mrnoplay" target="_blank">GitHub</a>
                <span> / </span>
                <a href="https://mrnoplay.tianzeds.com/" target="_blank">Website</a>
                <span> / </span>
                <a href="https://i.loli.net/2020/02/09/XewHqoUimbFtPRO.jpg" target="_blank">Older Version</a>
              </div>
            </div>
            <div id="switchable" class="line-below">
              <div class="kind">
                Switchable&nbsp;<span class="tech">during Grade 9</span>
              </div>
              <div class="line-desc kind-desc">
                Using Electron, archived. A plan-based alarm, allowing you to create amount of daily plans,
                then quickly switch from one to another.
              </div>
              <div class="line-desc links">
                <a href="https://github.com/scris/switchable" target="_blank">GitHub</a>
                <span> / </span>
                <a href="https://s2.loli.net/2022/08/26/UkWZjidsT5ol3cA.png" target="_blank">Screenshot</a>
              </div>
            </div>
            <div id="mixbank" class="line-below">
              <div class="kind">
                Mixbank&nbsp;<span class="tech">during Grade 8</span>
              </div>
              <div class="line-desc kind-desc">
                Using Unity. Try your best to click faster in order to get a terrific score!
              </div>
              <div class="line-desc links">
                <a href="https://i.loli.net/2018/02/26/5a9371bf6d192.jpeg" target="_blank">Screenshot</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-about">
        <div class="section-content about">
          <span>Copyright &copy; Tianze Ds Qiu 2019-2022. GitHub </span>
          <a href="https://github.com/scris" target="_blank">@scris</a>
          <span>.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {},
  mounted: function () {
  },
};
</script>

<style lang="scss">
$base: 0.51em;
$opacity: 0.64;

body {
  background: linear-gradient(to left top, #118a6d, #259f6d, #41a25c, #6d9f62);
  color: white;
  font-family: "SF Compact Display", ClearSans, sans-serif;
  padding: 0;
  margin: 0;
  background-size: 440% 440%;
  animation: Gradient 10s ease infinite;
}

@media (prefers-color-scheme: dark) {
  body {
    color: #efefef;
    background: linear-gradient(to left top, #176552, #2a7e5b, #3d7e4f);
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

.grid {
  background: -webkit-linear-gradient(top, transparent 59px, whitesmoke 60px),
  -webkit-linear-gradient(left, transparent 59px, whitesmoke 60px);
  background-size: 60px 60px;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 420px;
}

.title {
  font-size: $base * 4;
  line-height: 210%;
  font-weight: 700;
  margin-top: 100px;
}

.title-desc {
  line-height: 140%;
  font-size: $base * 2.6;
  font-weight: 500;
}

.education {
  line-height: 140%;
  font-size: $base * 1.6;
  font-weight: 500;
}

.line {
  padding-bottom: $base * 1.4;
}

.line-desc {
  padding-bottom: $base * 0.9;
}

.links {
  font-size: $base * 1.6;
}

.links span {
  opacity: $opacity;
}

.line-below {
  padding-top: $base * 1.8;
}

.section {
  padding-bottom: $base * 5.6;
}

.section-title {
  padding-bottom: $base * 1.9;
  font-size: $base * 2.8;
  font-weight: 600;
}

.kinds {
  font-size: $base * 2.3;
}

.section-content {
  font-weight: 500;
}

.section-proj .section-content {
  font-weight: 400;
}

.about {
  font-weight: 500;
  font-size: $base * 1.6;
}

.about span {
  opacity: $opacity;
}

.section-tech {
  padding-top: 60px;
}

.tech {
  font-weight: 200;
  opacity: $opacity;
  font-size: $base * 1.8;
  padding-left: $base * 0.3;
}

.less-use {
  font-weight: 300;
  opacity: $opacity;
}

.kind {
  padding-bottom: $base * 0.5;
  font-weight: 400;
}

.section-proj .kind {
  font-weight: 500;
}

.kind-desc {
  font-size: $base * 1.6;
  font-weight: 400;
  opacity: $opacity;
}

a,
a:hover,
a:active {
  text-decoration: none;
  outline: none;
  color: white;
}

a:hover {
  color: ghostwhite;
}

a:active {
  color: whitesmoke;
}

.container {
  width: 64vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  margin-left: 20vw;
  margin-right: 16vw;
  margin-bottom: 10vh;
  padding-right: 0rem;
  font-size: $base;
}

.icon {
  width: 0.78rem;
  height: 0.78rem;
}

@media (max-width: 501px) {
  .grid {
    height: 480px;
  }
}

@media (max-width: 630px) {
  .container {
    width: 76vw;
    margin-left: 13vw;
    margin-right: 9vw;
  }
}

@media (max-width: 420px) {
  .container {
    font-size: $base * 2.3;
  }
}

@media (min-width: 420px) {
  .container {
    font-size: $base * 2.6;
  }
}

@media (min-width: 630px) {
  .container {
    font-size: $base * 2.7;
  }
}

@media (min-width: 768px) {
  .container {
    font-size: $base * 2.8;
  }
}

@media (min-width: 992px) {
  .container {
    font-size: $base * 2.9;
  }
}

@media (min-width: 1200px) {
  .container {
    font-size: $base * 3;
  }
}

.grey {
  color: grey;
}

.reset {
  letter-spacing: 0rem;
}
</style>

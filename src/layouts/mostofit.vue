<style lang="scss">
.topBari1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-bottom: solid 1px rgba(gray, .2);
  padding: 5px;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  .fedher {
    display: flex;
    align-items: center;
    stroke: gray;
  }
  svg {
    display: flex;
    stroke: rgba(gray, .7);
    width: 40px;
    height: 20px;
    margin: 0 10px;
  }
  .menu {
    display: flex;
    align-items: center;
  }
  .leftside {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: -2px;
    p {
      width: 100%;
      height: 100%;
    }
    svg {
      stroke: white;
      fill: white;
    }
     :first-child {
      border: solid 1px red;
      border-radius: 7px;
      padding: 2px 10px;
      margin-right: 4px;
      background-color: red;
    }
  }
  .input {
    display: flex;
    .search {
      border: solid 1px rgba(gray, .5);
      padding: 5px 20px;
      display: flex;
      align-items: center;
      background-color: whitesmoke;
      svg {
        stroke: rgba(gray, .6);
        width: 16px;
        height: 16px;
      }
    }
    input {
      width: 500px;
      padding: 5px 20px;
      font-size: 16px;
      border: solid 1px rgba(gray, .5);
      border-radius: 0;
    }
  }
}

.home {
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  .topBari2 {
    position: fixed;
    right: 0;
    border-bottom: solid 1px rgba(gray, .2);
    border-left: solid 1px rgba(gray, .2);
    height: max-content;
    background-color: white;
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .hts {
      width: 25%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      :first-child {
        border-bottom: solid 1px red;
      }
    }
  }
  .anash {
    position: sticky;
    top:50px;
    display: flex;
    flex: 1;
    z-index: 2;
    max-width: 200px;
    flex-direction: column;
    background-color: white;
    height: 100vh;
    padding: 5px 20px;
    border-right: solid 1px rgba(gray, .2);
    :first-child {
      border: none;
    }
    ul {
      list-style-type: none;
      margin:0;
      padding: 10px;
      border-top: solid 1px rgba(gray, .3);
      :first-child{
        color:red;
      }
      li{
        padding: 5px;
      }
    }
  }
}

</style>
<template>
  <div>
    <div class="topBari1">
      <div class="menu">
        <span @click="shfaqMenu()" ><feather-icon type="menu"></feather-icon></span>
        <span class="leftside"><feather-icon type="play"></feather-icon><p>YouTube</p></span>
      </div>
      <div class="input">
        <input type="text" placeholder="Search">
        <div class="search">
          <feather-icon type="search"></feather-icon>
        </div>
      </div>
      <div class="fedher">
        <span><feather-icon type="upload"></feather-icon></span>
        <span><feather-icon type="bell"></feather-icon></span>
        <span><feather-icon type="image"></feather-icon></span>
      </div>
    </div>
    <div class="home">
      <div class="topBari2">
        <div class="hts">
          <span>Home</span>
          <span>Trending</span>
          <span>Subscriptions</span>
        </div>
      </div>
      <div class="anash" v-if="menuja">
        <ul>
          <li>Home</li>
          <li>My Channel</li>
          <li>Trending</li>
          <li>Subscriptions</li>
          <li>Youtube Red</li>
        </ul>
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
        <ul>
          <li>Subscriptions</li>
        </ul>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    menuja:true,
  }),
  methods:{
    shfaqMenu(){
      this.menuja=!this.menuja;

    }
  },
};
</script>

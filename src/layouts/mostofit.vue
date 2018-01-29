<style lang="scss" scoped>

.topBari1 {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction:row;
  width: 100%;
  height: 5%;
  padding: 5px;
  background-color: white;
  align-items:center;
  justify-content:space-around;
  .fedher{
    display: flex;
    align-items:center;
    stroke:gray;
  }
  svg{
    display: flex;
    stroke:rgba(gray, .7);
    width: 20px;
    height: 20px;
    margin:0 10px;
  }
  .menu{
    display: flex;  
    align-items:center;
  }
  .leftside{
    display: flex;
    align-items:center;
    font-weight: 500;
    font-size:22px;
    letter-spacing: -2px;
    p{
      width: 100%;
      height: 100%;
    }
    svg{
      stroke:white;
      fill:white;
      width: 15px;
      height: 15px;
    }
    :first-child{
      border:solid 1px red;
      border-radius: 7px;
      padding:2px 10px;
      margin-right:4px;
      background-color: red;

    }
  }
  .input{
    display: flex;
    .search{
      border: solid 1px rgba(gray, .5);
      padding: 3px 20px;
      display: flex;
      align-items:center;
      background-color: whitesmoke;
      svg{
        stroke:rgba(gray, .6);
        width: 16px;
        height:16px;
      }
    }
    input{
      width: 500px;
      padding: 3px 20px;
      font-size: 16px;
    }      
  }
}  
.topBari2{
  position: fixed;
  top:6%;
  border:solid 1px rgba(gray, .2);
  height:max-content;
  background-color: white;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  .hts{
    width: 25%;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    align-items:center;
    justify-content:space-between;
    :first-child{
      border-bottom: solid 1px red;
    }
  }
}


</style>

<template>
  <div>
    <div id="topBari">
      <div class="topBari1">
        <div class="menu">
          <span ><feather-icon type="menu"></feather-icon></span>
          <span class="leftside" ><feather-icon type="play"></feather-icon><p>YouTube</p></span>
        </div>
        <div class="input">
          <input type="text" placeholder="Search">
          <div  class="search"><feather-icon type="search"></feather-icon></div>
        </div>
        <div class="fedher" > 
          <span><feather-icon type="upload"></feather-icon></span>
          <span><feather-icon type="bell"></feather-icon></span>
          <span><feather-icon type="image"></feather-icon></span>
        </div>
      </div>  
      
      <div class="topBari2">
        <div>
        </div>
        <div class="hts">
          <span>Home</span>
          <span>Trending</span>
          <span>Subscriptions</span>
        </div>
      </div>
    </div>
    <slot></slot> 
  </div>
</template>
<script>


  export default {
  };
</script>

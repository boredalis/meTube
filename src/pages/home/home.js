/* ============
 * Home Page
 * ============
 *
 * todo: add documentation here!
 */

export default {
  components: {
    layout: require('@/layouts/mostofit.vue'),
    channels: require('@/components/channels/channels.vue'),
    subscriptions: require('@/components/subscriptions/subscriptions.vue'),
  },
  data: () => ({
    qanelat: [{
        emri: "SomeChannel",
        arsyja: "Recommended for you",
        videot: [{
            fotoja: 'https://pre00.deviantart.net/bc36/th/pre/i/2015/036/3/4/bro_fist_pewdiepie_by_cutedeath5522-d8grei3.jpg',
            emriIvideos: 'Just some youtube video name to prove',
            emriIqanellit: 'Pdp',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'https://ae01.alicdn.com/kf/HTB1gLzHKFXXXXaoXFXXq6xXFXXXw/Lovedoki-New-Homemade-DIY-Transparent-Stamp-Seal-Scrapbook-Planner-Agenda-Diary-DIY-Spare-Parts-Creative-Cute.jpg_640x640.jpg',
            emriIvideos: 'DIY !',
            emriIqanellit: 'someGirl',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'https://www.thewrap.com/wp-content/uploads/2016/09/1200.jpg',
            emriIvideos: 'cool stuff and memes',
            emriIqanellit: 'someGirl',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'https://upload.wikimedia.org/wikipedia/commons/7/72/BuzzfeedUnsolvedLogo.jpg.png',
            emriIvideos: 'Buzzfeed unsolved',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'https://thumb9.shutterstock.com/display_pic_with_logo/4427560/515538502/stock-vector-pop-music-text-art-colorful-calligraphy-happy-illustration-funny-notes-and-vynil-music-sound-515538502.jpg',
            emriIvideos: 'Recent Pop Music and Rock ',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'https://thumb9.shutterstock.com/display_pic_with_logo/4427560/515538502/stock-vector-pop-music-text-art-colorful-calligraphy-happy-illustration-funny-notes-and-vynil-music-sound-515538502.jpg',
            emriIvideos: 'Recent Pop Music and Rock ',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          }, {
            fotoja: 'https://thumb9.shutterstock.com/display_pic_with_logo/4427560/515538502/stock-vector-pop-music-text-art-colorful-calligraphy-happy-illustration-funny-notes-and-vynil-music-sound-515538502.jpg',
            emriIvideos: 'Recent Pop Music and Rock ',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          }, {
            fotoja: 'https://i.ytimg.com/vi/m5ywtdtbEfc/hqdefault.jpg',
            emriIvideos: ' 10 question that science cant',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          }, {
            fotoja: 'https://pre00.deviantart.net/bc36/th/pre/i/2015/036/3/4/bro_fist_pewdiepie_by_cutedeath5522-d8grei3.jpg',
            emriIvideos: 'Just something',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },

        ],
      },
      {
        emri: "SomeWeirdChannel",
        arsyja: "Recommended for you",
        videot: [{
            fotoja: 'http://thebeautyguru.me/wp-content/uploads/2013/09/logo.png',
            emriIvideos: 'beauty guru',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'http://thebeautyguru.me/wp-content/uploads/2013/09/logo.png',
            emriIvideos: 'beauty guru',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'http://thebeautyguru.me/wp-content/uploads/2013/09/logo.png',
            emriIvideos: 'beauty guru',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
        ],
      },
      {
        emri: "SomeCoolChannel",
        arsyja: "Recommended for you",
        videot: [{
            fotoja: 'http://www.lportepilot.ca/media/photologue/photos/cache/soccer-thinkstock-copy_large.jpg',
            emriIvideos: 'Sport and stuff',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'http://www.lportepilot.ca/media/photologue/photos/cache/soccer-thinkstock-copy_large.jpg',
            emriIvideos: 'Sport and stuff',
            emriIqanellit: 'someGuy',
            views: '112432 views',
            publikimi: '4 months ago',
          },
          {
            fotoja: 'http://www.lportepilot.ca/media/photologue/photos/cache/soccer-thinkstock-copy_large.jpg',
            emriIvideos: 'Sport and stuff',
            emriIqanellit: 'someGirl',
            views: '112432 views',
            publikimi: '4 months ago',
          },
        ],
      },
    ],

  }),
  mounted() {
    console.log('Home page has been mounted!');
  },
};

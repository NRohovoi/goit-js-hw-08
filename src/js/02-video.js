    import throttle from 'lodash.throttle';

    import Vimeo from '@vimeo/player';

    const iframe = document.querySelector('iframe');

    const player = new Vimeo(iframe);
 
     player.on('timeupdate', function (event) {
        localStorage.setItem("videoplayer-current-time", event.seconds);
         
        console.log('played the video!');
    });
    
        
    const currentTime = localStorage.getItem("videoplayer-current-time");
    
    let onCurrentTime = JSON.parse(currentTime);
    
     if (onCurrentTime) {
       player.setCurrentTime(onCurrentTime)
     } else {
       onCurrentTime = 0;
 };
 
player.setCurrentTime(onCurrentTime);
    
      document.addEventListener(
      player,
      throttle(() => {
        console.log("Scroll handler call every 1000ms");
      }, 1000)
    );
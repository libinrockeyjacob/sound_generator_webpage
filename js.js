function qclick(){
  document.getElementById('Q').play()
    document.getElementById('display').innerText = "Heater 1"
  }
  function wclick(){
  document.getElementById('W').play()
    document.getElementById('display').innerText = "Heater 2"
  }
  function eclick(){
  document.getElementById('E').play()
    document.getElementById('display').innerText = "Heater 3"
  }
  
  function aclick(){
  document.getElementById('A').play()
    document.getElementById('display').innerText = "Heater 4"
  }
  function sclick(){
  document.getElementById('S').play()
    document.getElementById('display').innerText = "Clap"
  }
  function dclick(){
  document.getElementById('D').play()
    document.getElementById('display').innerText = "Open-HH"
  }
  function zclick(){
  document.getElementById('Z').play()
    document.getElementById('display').innerText = "Kick-n-Hat"
  }
  function xclick(){
  document.getElementById('X').play()
    document.getElementById('display').innerText = "Kick"
  }
  function cclick(){
  document.getElementById('C').play()
    document.getElementById('display').innerText = "Closed-HH"
  }
  
  function a(e) {
    if(e.key == 'q' || e.key == 'Q'){
      document.getElementById('Q').play()
      document.getElementById('display').innerText = "Heater 1"
    }
     if(e.key == 'w' || e.key == 'W'){
      document.getElementById('W').play()
       document.getElementById('display').innerText = "Heater 2"
    }
     if(e.key == 'e' || e.key == 'E'){
      document.getElementById('E').play()
       document.getElementById('display').innerText = "Heater 3"
    }
     if(e.key == 'a' || e.key == 'A'){
      document.getElementById('A').play()
       document.getElementById('display').innerText = "Heater 4"
    }
     if(e.key == 's' || e.key == 'S'){
      document.getElementById('S').play()
       document.getElementById('display').innerText = "Clap"
    }
     if(e.key == 'd' || e.key == 'D'){
      document.getElementById('D').play()
       document.getElementById('display').innerText = "Open-HH"
    }
     if(e.key == 'z' || e.key == 'Z'){
      document.getElementById('Z').play()
       document.getElementById('display').innerText = "Kick=n-Hat"
    }
     if(e.key == 'x' || e.key == 'X'){
      document.getElementById('X').play()
       document.getElementById('display').innerText = "Kick"
    }
     if(e.key == 'c' || e.key == 'C'){
      document.getElementById('C').play()
       document.getElementById('display').innerText = "Closed-HH"
    }
    
  }
  window.addEventListener('keydown',a)
  
  
   
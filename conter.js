let count =10;
let interval=setInterval(function(){
    if (count>=1){
        count--
        console.log("countdown begins",count)
    }else{
       clearInterval(interval)
    }
},1000)

// set Timeout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Download Progress UI</title>

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    }

    body{
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#111;
    }

    .download-box{
      width:300px;
      background:#222;
      padding:30px;
      border-radius:15px;
      text-align:center;
      color:white;
    }

    /* Download Icon */

    .icon{
      font-size:60px;
      margin-bottom:20px;
    }

    /* Progress Bar */

    .progress-container{
      width:100%;
      height:20px;
      background:#444;
      border-radius:20px;
      overflow:hidden;
      margin-top:20px;
    }

    .progress{
      width:0%;
      height:100%;
      background:limegreen;
      border-radius:20px;
    }

    h2{
      margin-top:15px;
    }

    button{
      margin-top:20px;
      padding:10px 20px;
      border:none;
      border-radius:10px;
      cursor:pointer;
      background:royalblue;
      color:white;
      font-size:16px;
    }

  </style>
</head>

<body>

  <div class="download-box">

    <div class="icon">
      ⬇
    </div>

    <h2 id="percent">0%</h2>

    <div class="progress-container">
      <div class="progress" id="progress"></div>
    </div>

    <button id="btn">Download</button>

  </div>

</body>
</html>
```



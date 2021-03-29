function handleTickInit(tick) {

    Tick.helper.interval(function(){
        var d = Tick.helper.date();
        tick.value = {
            sep: '.',
            hours: d.getHours(),
            minutes: d.getMinutes(),
            seconds: d.getSeconds()
        };
    });
  
  }
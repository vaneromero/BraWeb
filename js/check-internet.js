Offline.options = {
    checkOnLoad: false
  };
  Offline.on('up', function() {
    window.location.reload();
   
  });
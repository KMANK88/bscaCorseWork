var apiURL = ("/instagrams");

var component = new Vue({
  el : "#app",
  data : {instagrams: null,
  newTitle: null,
  newImage: null
  },
created: function(){
  this.fetchData();
},
  methods : {
    fetchData: function(){
      var self = this;
      $.ajax({
        url: apiURL,
        method: "GET"


      }).done(function(response){
        self.instagrams = response.data;
        console.log(self.instagrams);
      })
    },
    submitInstagram: function(){
      var self= this;
      var item = {
        title: this.newTitle,
        img: this.newImage
      }
      $.ajax({
        url: apiURL,
        method: "POST",
        data: item

      }).done(function(response){
        self.fetchData();
        console.log(response);
      });
    }
  }
});
console.log(component);

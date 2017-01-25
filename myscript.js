var imported = document.createElement('script');
imported.src = 'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js';
document.head.appendChild(imported);

var NYTD = {
      data : {},
      render_section_front : function (params){
        this.data = params;
        this.parseData();
      },
      parseData : function(){
        
        var headline = this.data.page.content[1].collections[0].assets[0].headline;
        var summary = this.data.page.content[1].collections[0].assets[0].summary;
        var byline = this.data.page.content[1].collections[0].assets[0].byline;
        console.log(byline);

        var imageRetrieved = 'http://www.nytimes.com/'+this.data.page.content[1].collections[0].assets[0].images[0].types[4].content
        //www.nytimes.com

        //adding to dom elements
        $(".headline").append('<div>' + headline + '</div>');
        $(".summary").append('<div>' + summary + '</div>');
        $(".byline").append('<div>' + byline + '</div>');
        $( "<img>" ).attr( "src", imageRetrieved ).appendTo( "#images" );

        var output = '';

        for (var i = 0; i <= this.data.page.content.length; i++) {
            for (key in this.data.page.content[i]) {
                if (this.data.page.content[i].hasOwnProperty(key)) {
                    output +=  key ;
                } // hasOwnProperty check
            } // for each object
        } //for each array element

        var headlines = document.getElementsByClassName('headline');
        headlines.innerHTML = output;
      }
    };
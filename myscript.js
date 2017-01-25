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
        
        var storyHolder = document.getElementById("storyBits");

        // var header = document.createElement('div');
        // var summary = document.createElement('div');
        // var byline = document.createElement('div');

        

        for(var i=0;i<this.data.page.content[1].collections.length; i++){
            var cl1 = this.data.page.content[1].collections[i].assets;
            //var image1 = this.data.page.content[1].collections[i].assets[i].images[i].types;
            //var image1 = 'http://www.nytimes.com/'+this.data.page.content[1].collections[i].assets[i].images[0].types[4].content;

                for (var k=0; k<cl1.length; k++){
                    var header = document.createElement('div');
                    var summary = document.createElement('div');
                    var byline = document.createElement('div');

                    header.className = 'header';
                    summary.className ='summary';
                    byline.className = 'byline';

                    var breakin = document.createElement("br") 

                    var divs = [header, byline, summary, breakin];

                    var docFrag = document.createDocumentFragment();
                    //console.log(cl1[k].headline);
                    //var header = $(".headline").append('<div>' + cl1[k].headline + '</div>');
                    //var summarized = $(".summary").append('<div>' + cl1[k].summary + '</div>');
                    //var byliner = $(".byline").append('<div>' + cl1[k].byline + '</div>');
                    if (cl1[k].headline == "Only rank in summary collections"){
                        //nada
                    }
                    else if (cl1[k].headline == "" && cl1[k].summary == "" && cl1[k].byline == ""){
                        console.log(cl1[k].headline);

                        header.innerHTML = "";

                        byline.innerHTML = "";

                        summary.innerHTML = "";
                    }
                    else {
                        
                        header.innerHTML = cl1[k].headline;

                        byline.innerHTML = cl1[k].byline;

                        summary.innerHTML = cl1[k].summary;

                        for(var l = 0; l < divs.length; l++) {
                          docFrag.appendChild(divs[l]);
                          storyHolder.appendChild(docFrag );
                          console.log(storyHolder);
                          //console.log('wha?'); // Note that this does NOT go to the DOM
                        }
                        //storyHolder.appendChild(docFrag);
                    //$('storyBits').append(header + '</br>' + summarized + '</br>' + byliner + '</br>');
                        // $(".headline").append('<div>' + cl1[k].headline + '</div>');
                        // $(".summary").append('<div>' + cl1[k].summary + '</div>');
                        // $(".byline").append('<div>' + cl1[k].byline + '</div>');
                    
                    
                    //$( "<img>" ).attr( "src", cl1[k].image1 ).appendTo( "#images" );
                    }

                }
      
       
    }
        for(var j=0;j<this.data.page.content[2].collections.length; j++){
            var cl2 = this.data.page.content[2].collections[j].assets;
                for (var m=0; m<cl2.length; m++){
                    var header = document.createElement('div');
                    var summary = document.createElement('div');
                    var byline = document.createElement('div');

                    header.className = 'header';
                    summary.className ='summary';
                    byline.className = 'byline';

                    var breakin = document.createElement("br") 

                    var divs = [header, byline, summary, breakin];

                    var docFrag = document.createDocumentFragment();
                    //console.log(cl1[k].headline);
                    //var header = $(".headline").append('<div>' + cl1[k].headline + '</div>');
                    //var summarized = $(".summary").append('<div>' + cl1[k].summary + '</div>');
                    //var byliner = $(".byline").append('<div>' + cl1[k].byline + '</div>');
                     if (cl2[m].headline == "Only rank in summary collections"){
                        //nada
                    }
                    else if (cl2[m].headline == undefined && cl2[m].summary == undefined && cl2[m].byline == undefined){
                        header.innerHTML = "";

                        byline.innerHTML = "";

                        summary.innerHTML = "";
                    }
                    else{
                        
                        header.innerHTML = cl2[m].headline;

                        byline.innerHTML = cl2[m].byline;

                        summary.innerHTML = cl2[m].summary;

                        for(var l = 0; l < divs.length; l++) {
                          docFrag.appendChild(divs[l]);
                          storyHolder.appendChild(docFrag );
                          console.log(storyHolder); // Note that this does NOT go to the DOM
                        }
                    //console.log(cl2[j].headline);
                    // if (cl2[j].headline == undefined){
                    //     //console.log('hi2');
                    // }else{
                    // $(".headline").append('<div>' + cl2[j].headline + '</div>');
                    // }
                }
            // for (var k=0; i<cl2.length; i++){
            //     console.log(cl1[i].headline);
            //console.log(this.data.page.content[1].collections.length);
           // console.log(cl2.length);
            //console.log(cl2[i]);
        }


        
        // var headline = this.data.page.content[1].collections[0].assets[0].headline;
        // var summary = this.data.page.content[1].collections[0].assets[0].summary;
        // var byline = this.data.page.content[1].collections[0].assets[0].byline;
        // console.log(byline);

        // var imageRetrieved = 'http://www.nytimes.com/'+this.data.page.content[1].collections[0].assets[0].images[0].types[4].content

        // //adding to dom elements
        // $(".headline").append('<div>' + headline + '</div>');
        // $(".summary").append('<div>' + summary + '</div>');
        // $(".byline").append('<div>' + byline + '</div>');
        // $( "<img>" ).attr( "src", imageRetrieved ).appendTo( "#images" );

        // var output = '';

        // for (var i = 0; i <= this.data.page.content.length; i++) {
        //     for (key in this.data.page.content[i]) {
        //         if (this.data.page.content[i].hasOwnProperty(key)) {
        //             output +=  key ;
        //         } // hasOwnProperty check
        //     } // for each object
        // } //for each array element

        // var headlines = document.getElementsByClassName('headline');
        // headlines.innerHTML = output;
      }
    }
}
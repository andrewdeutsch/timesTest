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

        //accessing the first batch of content
        for(var i=0;i<this.data.page.content[1].collections.length; i++){

            var cl1 = this.data.page.content[1].collections[i].assets;
            //var image1 = 'http://www.nytimes.com/'+ cl1[i].images[0].types[2].content;
                for (var k=0; k<cl1.length; k++){
                    


                    var header = document.createElement('div');
                    var summary = document.createElement('div');
                    var byline = document.createElement('div');
                    var oImg = document.createElement('img');
                    var aTag = document.createElement('a');

                    header.className = 'header';
                    summary.className ='summary';
                    byline.className = 'byline';
                   // oImg.className = 'image';
                    aTag.setAttribute('href', cl1[k].url);

                    var divs = [header, oImg, byline, summary];
                    
                    //console.log();
                    
                    // var pathToImg = cl1[k].images[0].types[1].content;
                    // var image1 = 'http://www.nytimes.com/'+ pathToImg; 

                    if (typeof cl1[k].images[0] == 'undefined'){
                        //console.log('loadIt');
                    }else{
                        var pathToImg = cl1[k].images[0].types[1].content;
                        var image1 = 'http://www.nytimes.com/'+ pathToImg; 
                        console.log(oImg);
                        oImg.src = image1;
                        storyHolder.appendChild(oImg); 
                    }
                    

                   

                    var docFrag = document.createDocumentFragment();

                    //console.log(cl1[k].images[0].types[1].content);

                    

                    
                    

                    if (cl1[k].headline == "Only rank in summary collections" ){
                        header.innerHTML = "";
                        byline.innerHTML = "";
                        summary.innerHTML = "";

                    }else if (cl1[k].headline == undefined){
                        header.innerHTML = "";
                        byline.innerHTML = "";
                        summary.innerHTML = "";
                    }
                    else {
                        aTag.innerHTML = cl1[k].headline;
                        header.appendChild(aTag);
                        // if(oImg.src == undefined){

                        // }else{
                        //     oImg.src = image1;
                        // }
                        
                        //oImg.appendChild(image1);
                        //oImg.appendChild(image1);
                        //oImg.innerHTML = 'http://www.nytimes.com/'+ cl1[k].images[0].types[2].content;
                        byline.innerHTML = cl1[k].byline;
                        summary.innerHTML = cl1[k].summary;
                        for(var l = 0; l < divs.length; l++) {
                          docFrag.appendChild(divs[l]);
                          storyHolder.appendChild(docFrag );
                        }
                    }
                }
      
       
    }
        //accessing the second batch of content
        for(var j=0;j<this.data.page.content[2].collections.length; j++){
            var cl2 = this.data.page.content[2].collections[j].assets;
                for (var m=0; m<cl2.length; m++){
                    var header = document.createElement('div');
                    var summary = document.createElement('div');
                    var aTag = document.createElement('a');
                    var byline = document.createElement('div');

                    header.className = 'header';
                    summary.className ='summary';
                    byline.className = 'byline';
                    aTag.setAttribute('href', cl2[m].url);

                    var divs = [header, byline, summary];

                    var docFrag = document.createDocumentFragment();
                    
                     if (cl2[m].headline == "Only rank in summary collections" ){ 
                        header.innerHTML = "";
                        byline.innerHTML = "";
                        summary.innerHTML = "";

                    }else if (cl2[m].headline == undefined){
                        header.innerHTML = "";
                        byline.innerHTML = "";
                        summary.innerHTML = "";
                    }
                    else if (cl2[m].byline == undefined){
                        console.log('cl2[m].byline is undefined');
                        byline.innerHTML = "";
                    }
                    else{
                        aTag.innerHTML = cl2[m].headline;
                        header.appendChild(aTag);
                        byline.innerHTML = cl2[m].byline;
                        summary.innerHTML = cl2[m].summary;

                        for(var l = 0; l < divs.length; l++) {
                          docFrag.appendChild(divs[l]);
                          storyHolder.appendChild(docFrag );
                        }
  
                }

        }

      }
    }
}
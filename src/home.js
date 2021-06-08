import "./home.css"
import React, { useState ,useEffect }  from 'react'
import Photo from './photo'
import { useStateValue } from "./stateprovider";
import "./reducer";
 

function Home() {
    const [Photos_Set, setPhotos_Set] = useState([]);
    const [{query}, dispatch] = useStateValue();
    useEffect(() => {
        
        var res=getqueryPhoto(query);
        var result=[];
        res.then(function(Result)
        {
            console.log(Result.photos.photo[0]);
            result=Result;
            var final_urls=getUrls(result.photos.photo);
            setPhotos_Set(final_urls);
        });

    }, [query])

    

    useEffect(() => {
        var res=getRandomPhoto();
        console.log(res);
        var result=[];
        res.then(function(Result)
        {
            console.log(Result.photos.photo[0]);
            result=Result;
            var final_urls=getUrls(result.photos.photo);
            setPhotos_Set(final_urls);
        });
        
    }, [])

    function getUrls(urls) {
            var final_urls=[];
            var i,j;
            for (i = 0; i < urls.length/3 -1; i++) {
                var temp_urls=[]
                for(j=3*i;j<3*i+3;j++)
                {
                    var item=urls[j];
                    var id=item.id;
                    var secret = item.secret;
                    var server_id =item.server;

                    var temp_url = "https://live.staticflickr.com/"+server_id+"/"+id+"_" +secret+".jpg";
                    temp_urls.push(temp_url);
                }
                final_urls.push(temp_urls);
            }
         //   console.log(final_urls);
            



            return final_urls;
    
}

  function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
     }
  return response;
    }

    async function getRandomPhoto() {
        var api_key="2718ca7e34e51addb3fe49a261de32cf";
         const endpoint = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key='+api_key +'&per_page=10000&format=json&nojsoncallback=1';

  // Creates a new Headers object.


    let response = await fetch(endpoint);
    const json = await validateResponse(response).json();

    return json;
}


    async function getqueryPhoto(query) {
        var api_key="2718ca7e34e51addb3fe49a261de32cf";
         const endpoint = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key +'&text='+query+'&per_page=10000&format=json&nojsoncallback=1';

  // Creates a new Headers object.


    let response = await fetch(endpoint);
    const json = await validateResponse(response).json();

    return json;
}
    return (
    <div className="home">
        <div className="home__container">

            {Photos_Set.map(item => (
            <div className="home__row">
                <Photo image={item[0]}/>
                <Photo image={item[1]}/>
                <Photo image={item[2]}/>
            </div>
                


          ))}


        

        </div>
    </div>
    )
}

export default Home

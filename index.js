  const url = 'https://www.instagram.com/chabelooficial/?__a=1';

  const myfetch = fetch(url);




  myfetch.then(data => data.json())
         .then(data => {
            const  user = data.user.username;
              const biog = data.user.biography;
              const post = [...data.user.media.nodes];
              console.log(`User: ${user}`);
              console.log(`biography: ${biog}`);
              post.sort((a,b)=>{
                return (a.likes.count - b.likes.count)*-1;
              });
              post.forEach((post)=>{
                console.log(`Nikes: ${post.likes.count}, Caption: ${post.caption}, Comments: ${post.comments.count}`);
              });
         }
  );

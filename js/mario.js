 //pemiere section*/
                var complewebContainer= document.getElementById('comprendre-le-web');
                var html5etcssContainer= document.getElementById('html5-et-css3'); 
                var phpetmysqlContainer = document.getElementById('php-et-mysql'); 
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyC4680cFhK-XJUWH82eR22ELzJcORAgDGg",
                authDomain: "bachique-e5839.firebaseapp.com",
                databaseURL: "https://bachique-e5839.firebaseio.com",
                projectId: "bachique-e5839",
                storageBucket: "bachique-e5839.appspot.com",
                messagingSenderId: "634042300738"
              };
              firebase.initializeApp(config);
  function myFunction(){
    firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    
    
      firebase.auth().onAuthStateChanged(function(user) {
           if (user) {
          
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var token = uid;
          const messRef = firebase.database().ref().child('/message');
          messRef.on('child_added',function(snapshot){
             var AccueilContainer = document.getElementById('mess');
                 AccueilContainer.innerText = snapshot.val();
                });      var coderavecjsContainer= document.getElementById('coder-avec-javascript'); 
                var bootstrapContainer= document.getElementById('bootstrap');
                var lesclepreuContainer= document.getElementById('les-cles-pour-reussir-son-referencement');    
                var creevsiteavecpContainer= document.getElementById('creez-votre-premier-site-avec-wordpress'); 
                var pavecwordpressContainer= document.getElementById('professionnel-avec-wordpress'); 
                var lessolutioncmsContainer= document.getElementById('decouvrez-les-solutions-cms'); 
                var gestiondeprojetContainer= document.getElementById('bases-de-la-gestion-de-projet'); 
                /*second*/
              var certificatContainer= document.getElementById('certificate');
              var ionicContainer= document.getElementById('ionic'); 
              var multimediaContainer = document.getElementById('multimedia'); 
              var cadrerunprojetContainer= document.getElementById('cadrer-un-projet'); 
              var creezdespagesContainer= document.getElementById('creez-des-pages-interactif');
              var surfezinconicoContainer= document.getElementById('surfez-incognito-sur-internet');    
              var codeavecgitContainer= document.getElementById('code-avec-git-et-github'); 
              var devejavascriptContainer= document.getElementById('developpements-javascript-avec-jquery'); 
              var integratiowebContainer= document.getElementById('integration-web'); 
              var lancesonsiteContainer= document.getElementById('lancer-son-propre-site-web'); 
                  
              //les deux google
              var certificationGooglepourlesPros= document.getElementById('certification_Google_pour_les_Pros'); 
              var certificateGooglepro= document.getElementById('certificate_google_pro'); 
            
              //les images du site

              var bachusContainer= document.getElementById('bachus');
              var prechezvousContainer= document.getElementById('prechezvous'); 
              var nathalieContainer= document.getElementById('nathalie');
                
             
             
                  
              /*premiere section*/
              complewebContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcomprendre-le-web2.png?alt=media&token=e612a56f-bfbe-4773-ac97-b26b598b6014";
              html5etcssContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fhtml5-et-css3.png?alt=media&token=f7724c94-34e5-4b4a-aa4f-eb6c644b651d"; 
              phpetmysqlContainer.src ="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fphp-et-mysql.png?alt=media&token=49f74566-d55f-43cd-bc87-533af8408163"; 
              coderavecjsContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcoder-avec-javascript.png?alt=media&token=160060b3-999e-4b08-b332-6d5c73a86730"; 
              bootstrapContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fbootstrap.png?alt=media&token=6c93cec5-8c98-4175-805e-1af7916c7d30";
              lesclepreuContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fles-cles-pour-reussir-son-referencement-web.png?alt=media&token=97acb956-0a99-4b37-8489-997f458d8b23";    
              creevsiteavecpContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcreez-votre-premier-site-avec-wordpress.png?alt=media&token=ddff4a20-3f12-4278-bbcb-f7e82cda491b"; 
              pavecwordpressContainer.src= "https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fprofessionnel-avec-wordpress.png?alt=media&token=ade557b7-a12d-45d3-b6d8-b3fd2737aebf"; 
              lessolutioncmsContainer.src= "https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fdecouvrez-les-solutions-cms.png?alt=media&token=18f3310a-61fe-476d-a684-18136db47c78"; 
              gestiondeprojetContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fbases-de-la-gestion-de-projet.png?alt=media&token=98753c39-0135-457d-8f9b-7f612c497993"; 

              var storageRef = firebase.storage().ref();             
              certificatContainer.src = "https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fbases-de-la-gestion-de-projet.png?alt=media&token=98753c39-0135-457d-8f9b-7f612c497993";
              ionicContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fionic.png?alt=media&token=e85c2839-4137-4e5f-b641-2b4eb9d86172";
              multimediaContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Forganisez-votre-projet-multimedia.png?alt=media&token=4b846ffa-d00b-4903-b073-1ab5e7e360b7";
              cadrerunprojetContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcadrer-un-projet-multimedia.png?alt=media&token=37363999-36fe-4945-93c9-af285f27dc7d";
              creezdespagesContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcoder-avec-javascript.png?alt=media&token=160060b3-999e-4b08-b332-6d5c73a86730";
              surfezinconicoContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fsurfez-incognito-sur-internet-avec-le-reseau-tor.png?alt=media&token=75e424cc-1e9c-40e8-82e0-f33338742622";
              codeavecgitContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcode-avec-git-et-github.png?alt=media&token=be56fa9c-50ae-4c9e-b748-451f0175ca85";
              devejavascriptContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fdeveloppements-javascript-avec-jquery.png?alt=media&token=994b9e35-952e-43f9-821c-fb59d2a103ab";
              integratiowebContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fintegration-web_1_.png?alt=media&token=6a775f3c-8586-4b7b-8b5d-0b63e4973e90";
              lancesonsiteContainer.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Flancer-son-propre-site-web.png?alt=media&token=24e6d3e0-0d5b-4bf1-afad-22cb4677b766";

              certificationGooglepourlesPros.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2FCertification_Google_pour_les_Pros.png?alt=media&token=3d64e462-6f20-4aa3-b0de-c619a4156ed9";
              certificateGooglepro.src="https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/images%2Fcertificate_google_pro.png?alt=media&token=930ce91a-fe7f-46b7-909b-ddd99d5cc3a8";

              bachusContainer.src= "https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/bachus.png?alt=media&token=256cbefd-fe81-4519-80e2-68a2d0dd1769";
              
              prechezvousContainer.src= "https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/prechezvous.png?alt=media&token=682c83fc-8e24-4fa6-be34-52b9b57efb34"; 
              nathalieContainer.src= "https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/nathalie.png?alt=media&token=3d16a61b-2d9f-417d-b788-777ab69e6d29";
             
              

   
}
});

}
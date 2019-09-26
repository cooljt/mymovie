(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(271)},243:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},268:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),s=a.n(i),l=(a(120),a(121),a(10)),o=a(13),c=a(18),m=a(17),u=a(19),d=a(275),v=a(274),p=a(273),f=a(53),h=Object(f.a)(),E=a(20),g=a.n(E),N=a(51),w=a.n(N),b=a(52),y=a.n(b),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).keywordChange=function(e){a.setState({keyword:e.target.value})},a.toResult=function(){h.push("/SEARCH/"+a.state.keyword)},a.state={keyword:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container w-75"},r.a.createElement("h1",null,"Search Movies"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"form-control border-0"},r.a.createElement(g.a,{variant:"outlined",onChange:this.keywordChange,fullWidth:!0,label:"Keyword",InputProps:{startAdornment:r.a.createElement(w.a,{position:"start"},r.a.createElement(y.a,null))}})),r.a.createElement("div",{className:"input-group-append mt-3 ml-2"},r.a.createElement("button",{className:"btn btn-primary rounded",onClick:this.toResult},"Search"))))}}]),t}(r.a.Component),S="https://omdbapi.com?apikey=aaf3dc59&",j=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"findMovieByKeyword",value:function(e){return fetch(S+"s="+e).then(function(e){return e.json()})}},{key:"findMovieByID",value:function(e){return fetch(S+"i="+e).then(function(e){return e.json()})}}]),e}(),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toDetail=function(){h.push("/DETAIL/"+a.state.selectedItem)},a.renderMovieItems=function(){return a.props.movies.Search.map(function(e){return r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{onMouseEnter:function(){return a.setState({selectedItem:e.imdbID})},onClick:a.toDetail,className:a.state.selectedItem===e.imdbID?"list-group-item active":"list-group-item"},r.a.createElement("img",{src:e.Poster,alt:"",className:"mr-2",width:"50px"}),e.Title))})},a.state={selectedItem:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-2"},this.props.movies.hasOwnProperty("Search")&&this.renderMovieItems(),!this.props.movies.hasOwnProperty("Search")&&r.a.createElement("p",null,"Please search again !"))}}]),t}(r.a.Component),O=a(21),M=a.n(O),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).keywordChange=function(e){a.setState({keyword:e.target.value})},a.toResult=function(){j.findMovieByKeyword(a.state.keyword).then(function(e){return a.setState({movies:e,searching:!1})}),h.push("/SEARCH/"+a.state.keyword)},a.state={searching:!0,keyword:"",movies:{Search:[]},resultKeyword:a.props.match.params.keyword},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.findMovieByKeyword(this.state.resultKeyword).then(function(t){return e.setState({movies:t,searching:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container w-75"},r.a.createElement("h1",null,"Search Movies"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"form-control border-0"},r.a.createElement(g.a,{variant:"outlined",onChange:this.keywordChange,fullWidth:!0,label:"Keyword",InputProps:{startAdornment:r.a.createElement(w.a,{position:"start"},r.a.createElement(y.a,null))}})),r.a.createElement("div",{className:"input-group-append mt-3 ml-2"},r.a.createElement("button",{className:"btn btn-primary rounded",onClick:this.toResult},"Search"))),!this.state.searching&&r.a.createElement(I,{movies:this.state.movies}),this.state.searching&&r.a.createElement(M.a,{className:"mt-5",variant:"h3"},"Searching...."))}}]),t}(r.a.Component),T="https://movietable-server.herokuapp.com/api/movie",C=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"addMovie",value:function(e,t){return fetch(T+"/"+t,{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})}},{key:"findAllMovies",value:function(){return fetch(T).then(function(e){return e.json()})}},{key:"findAllReviews",value:function(e){return fetch(T+"/"+e+"/review").then(function(e){return e.json()})}},{key:"findMovieByimdbID",value:function(e){return fetch(T+"/"+e).then(function(e){return e.json()})}},{key:"fanLikeMovie",value:function(e,t){return fetch(T+"/"+e+"/"+t+"/like").then(function(e){return e.json()})}}]),e}(),x="https://movietable-server.herokuapp.com/api/fan",D=function e(){Object(l.a)(this,e),this.register=function(e){return fetch(x+"/register",{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},this.login=function(e){return fetch(x+"/login",{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},this.updateProfile=function(e){return fetch(x+"/profile",{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"PUT"}).then(function(e){return e.json()})},this.logoutUser=function(){return fetch(x+"/logout",{headers:{"Content-Type":"application/json"},method:"POST"})},this.getLikedMovies=function(e){return fetch(x+"/"+e+"/movies").then(function(e){return e.json()})},this.getAllReviews=function(e){return fetch(x+"/"+e+"/reviews").then(function(e){return e.json()})},this.findAllFans=function(){return fetch(x+"/all").then(function(e){return e.json()})}},A=function(e){var t=e.saveReview;return r.a.createElement("div",{className:"w-100"},r.a.createElement("textarea",{className:"w-100",rows:"4",cols:"50",placeholder:"Your review",id:"movie_review"}),r.a.createElement("button",{className:"btn btn-primary float-right",onClick:function(){var e=document.getElementById("movie_review").value.trim();t(e),document.getElementById("movie_review").value=""}},"Post"))},P=a(23),B=a.n(P),L=function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,null,[{key:"addReview",value:function(e,t){return fetch("https://movietable-server.herokuapp.com/api/review/"+t,{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})}}]),e}(),U=a(105),F=a.n(U),_=function(e){var t=e.user,a=e.review;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(F.a,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6otvEkGLOAqWORBtQVPih0k2fAmZvs4WYkAzBqvmf7Ncb2t-VQ"})),r.a.createElement("p",{className:"text-center"},t)),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,a)))},H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).addMovie=function(){var e={title:a.state.movie.Title,imdbID:a.movieId,numLikes:0,numDislikes:0};C.addMovie(e,a.props.user.username).then(function(e){return a.setState({movieInDB:!0})})},a.likeMovie=function(){C.fanLikeMovie(a.movieId,a.props.user.username).then(function(e){return a.setState({movieLiked:!0})})},a.renderInfo=function(){return Object.keys(a.state.movie).filter(function(e){return"Ratings"!==e&&"Title"!==e&&"imdbID"!==e&&"Type"!==e&&"DVD"!==e&&"Website"!==e&&"Response"!==e&&"Year"!==e&&"Poster"!==e&&"Plot"!==e}).map(function(e){return r.a.createElement("li",{className:"list-group-item border-0 pt-0"},r.a.createElement("b",null,e),": ",a.state.movie[e])})},a.saveReview=function(e){var t={writer:a.props.user.username,movieTitle:a.state.movie.Title,createTime:(new Date).getTime(),text:e};L.addReview(t,a.movieId).then(function(e){var t=a.state.reviews;t.push(e),a.setState({reviews:t})})},a.renderReviews=function(){return r.a.createElement("div",{className:"w-100"},r.a.createElement("h4",null,"Fan Reviews:"),r.a.createElement("ul",{className:"list-group"},a.state.reviews.map(function(e,t){return r.a.createElement("li",{onMouseEnter:function(){return a.setState({currentReview:t})},onMouseLeave:function(){return a.setState({currentReview:-1})},onClick:function(){return h.push("/PROFILE/"+e.writer)},className:a.state.currentReview===t?"list-group-item border-0 active":"list-group-item border-0"},r.a.createElement(_,{user:e.writer,review:e.text}))})))},a.movieId=a.props.match.params.id,a.state={movie:{},reviews:[],movieInDB:!1,movieLiked:!1,currentReview:-1},a.userService=new D,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.findMovieByID(this.movieId).then(function(t){return e.setState({movie:t})}),C.findAllReviews(this.movieId).then(function(t){return e.setState({reviews:t})}),C.findMovieByimdbID(this.movieId).then(function(t){0!==t.id&&e.setState({movieInDB:!0})}),this.userService.getLikedMovies(this.props.user.username).then(function(t){for(var a=0;a<t.length;a++)t[a].imdbID===e.movieId&&e.setState({movieLiked:!0})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h1",null,this.state.movie.Title)),r.a.createElement("div",{className:"col-4"},this.props.login&&"ADMIN"===this.props.user.userType&&!this.state.movieInDB&&r.a.createElement("button",{onClick:function(){return e.addMovie()},className:"btn btn-primary mt-2 float-right"},"Recommend"),this.props.login&&"ADMIN"===this.props.user.userType&&this.state.movieInDB&&r.a.createElement("p",{className:"btn btn-warning disabled mt-2 float-right"},"Movie Recommended"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4 pl-0"},r.a.createElement("img",{src:this.state.movie.Poster,width:"100%"}),r.a.createElement("div",{className:"d-flex justify-content-center mt-2"},r.a.createElement("a",{className:"btn btn-warning",href:this.state.movie.Website,target:"_blank"},"Movie Website")),r.a.createElement("div",{className:"d-flex justify-content-center mt-2"},this.props.login&&this.state.movieInDB&&"FAN"===this.props.user.userType&&!this.state.movieLiked&&r.a.createElement("i",{className:"fa fa-thumbs-up fa-2x text-primary",onClick:function(){return e.likeMovie()}}),this.props.login&&this.state.movieInDB&&"FAN"===this.props.user.userType&&this.state.movieLiked&&r.a.createElement("i",{className:"fa fa-thumbs-up fa-2x text-success"}),this.props.login&&this.state.movieInDB&&"FAN"===this.props.user.userType&&this.state.movieLiked&&r.a.createElement("div",{className:"d-flex"},r.a.createElement("p",{className:"ml-2 pt-1"},"Liked"),r.a.createElement("i",{className:"fa fa-check text-danger"})))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("ul",{className:"list-group"},this.renderInfo()),r.a.createElement("p",null,r.a.createElement("i",null,this.state.movie.Plot)))),r.a.createElement("div",{className:"row mt-2 pt-2 border-top",id:"review_section"},0!==this.state.reviews.length&&this.renderReviews(),0===this.state.reviews.length&&r.a.createElement("h4",null,"No reviews")),r.a.createElement("div",{className:"row mt-2 mb-5 justify-content-center"},this.props.login&&"FAN"===this.props.user.userType&&this.state.movieInDB&&r.a.createElement(A,{saveReview:this.saveReview}),this.props.login&&"FAN"===this.props.user.userType&&!this.state.movieInDB&&r.a.createElement(B.a,{elevation:10,className:"p-3 text-center"},r.a.createElement(M.a,{variant:"h5"},"Please wait for the movie be recommended before writing review.")),!this.props.login&&r.a.createElement(B.a,{elevation:10,className:"p-3 text-center"},r.a.createElement(M.a,{variant:"h5"},"Please login to write review."))))}}]),t}(r.a.Component),J=(a(243),a(24)),V=a.n(J),G=a(37),K=a.n(G),W=a(36),q=a.n(W),Y=a(35),z=a.n(Y),Q=function(e){var t=e.loginUser;return r.a.createElement("div",{className:"login d-flex flex-column justify-content-center"},r.a.createElement("div",{className:"d-flex justify-content-center mb-5"},r.a.createElement(B.a,{elevation:10,className:"w-50 p-5 text-center"},r.a.createElement(M.a,{variant:"h5"},"Movie Table"))),r.a.createElement("div",{className:"container",id:"login_section"},r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},r.a.createElement("i",{className:"fa fa-file-movie-o mb-2 fa-4x"})),r.a.createElement("div",{className:"alert alert-danger d-none",role:"alert",id:"alert"},"Username or Password is wrong! Please try again!"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"text",label:"Username",id:"login-username",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"password",placeholder:"Password",label:"Password",id:"login-password",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement(q.a,{className:"w-100"},r.a.createElement(z.a,null,"Role"),r.a.createElement(K.a,{native:!0,variant:"outlined",id:"login-role",className:"w-100"},r.a.createElement("option",{value:"FAN"},"Fan"),r.a.createElement("option",{value:"ADMIN"},"MovieCreator")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(V.a,{variant:"contained",color:"primary",className:"w-100",onClick:function(){var e=document.getElementById("login-username").value.trim(),a=document.getElementById("login-password").value,n=document.getElementById("login-role").value;t({username:e,password:a,userType:n}).then(function(e){e?h.push("/"):document.getElementById("alert").className="alert alert-danger"})}},"Sign In"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement(p.a,{to:"/"},r.a.createElement("span",{className:"float-left"},"Cancel"))),r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-5"},r.a.createElement(p.a,{to:"/register"},r.a.createElement("span",{className:"float-right"},"Register Account")))))))},Z=(a(254),function(e){var t=e.registerUser;return r.a.createElement("div",{className:"register d-flex justify-content-center"},r.a.createElement("div",{className:"container",id:"register_section"},r.a.createElement("div",{className:"d-flex flex-row justify-content-center mb-5"},r.a.createElement("i",{className:"fa fa-registered fa-4x"})),r.a.createElement("div",{className:"alert alert-danger d-none",role:"alert",id:"alert"},"Username is existed! Please choose another username!"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"text",label:"Username",variant:"filled",id:"register-username",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"password",label:"Password",variant:"filled",id:"register-password",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"password",label:"Verify Password",variant:"filled",id:"verify-password",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement(q.a,{className:"w-100"},r.a.createElement(z.a,null,"Role"),r.a.createElement(K.a,{native:!0,variant:"outlined",id:"register-role",className:"w-100"},r.a.createElement("option",{value:"FAN"},"Fan"),r.a.createElement("option",{value:"ADMIN"},"MovieCreator")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(V.a,{color:"primary",variant:"contained",className:"w-100",onClick:function(){var e=document.getElementById("register-password").value.trim(),a=document.getElementById("verify-password").value.trim(),n=document.getElementById("register-username").value.trim(),r=document.getElementById("register-role").value;""===n||""===e?alert("All field is required!"):e!==a?alert("Input passwords do not match please re-enter!"):t({username:n,password:e,userType:r}).then(function(e){e?h.push("/SEARCH"):document.getElementById("alert").className="alert alert-danger"})}},"Sign Up"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(p.a,{to:"/"},r.a.createElement("span",{className:"float-left"},"Cancel"))),r.a.createElement("div",{className:"col-6"},r.a.createElement(p.a,{to:"/LOGIN"},r.a.createElement("span",{className:"float-right"},"Login")))))))}),X="https://movietable-server.herokuapp.com/api/admin",$=function e(){Object(l.a)(this,e),this.register=function(e){return fetch(X+"/register",{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},this.login=function(e){return fetch(X+"/login",{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},this.updateProfile=function(e){return fetch(X+"/profile",{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"PUT"}).then(function(e){return e.json()})},this.logoutUser=function(){return fetch(X+"/logout",{headers:{"Content-Type":"application/json"},method:"POST"})},this.getRecommendMovies=function(e){return fetch(X+"/"+e+"/recommended").then(function(e){return e.json()})}},ee=(a(255),a(256),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).renderMovies=function(){return r.a.createElement("ul",{className:"list-group"},a.state.likedMovie.map(function(e,t){return r.a.createElement("li",{onMouseEnter:function(){return a.setState({currentSelectMovie:e.title})},onMouseLeave:function(){return a.setState({currentSelectMovie:""})},onClick:function(){return h.push("/DETAIL/"+e.imdbID)},className:a.state.currentSelectMovie===e.title?"list-group-item border-0 active":"list-group-item border-0"},r.a.createElement("i",{className:"fa fa-file-movie-o"})," ",e.title)}))},a.renderReviews=function(){return r.a.createElement("ul",{className:"list-group"},a.state.reviews.map(function(e,t){return r.a.createElement("li",{className:"list-group-item border-0"},e.movieTitle,": ",e.text)}))},"undefined"===typeof a.props.user?a.currentUser=a.props.match.params.username:a.currentUser=a.props.user,a.state={likedMovie:[],reviews:[],currentSelectMovie:""},a.service=new D,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllReviews(this.currentUser).then(function(t){return e.setState({reviews:t})}),this.service.getLikedMovies(this.currentUser).then(function(t){e.setState({likedMovie:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null," ",r.a.createElement("i",{className:"fa fa-info fa-2x mr-2 mb-2"})," ",this.currentUser,"'s Information "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 border-right",id:"liked_movie_section"},r.a.createElement("p",null,r.a.createElement("b",null,this.currentUser," liked movies "),r.a.createElement("i",{className:"fa fa-thumbs-up"})," "),0!==this.state.likedMovie.length&&this.renderMovies()),r.a.createElement("div",{className:"col-6",id:"review_section"},r.a.createElement("p",null,r.a.createElement("b",null,this.currentUser,"'s movie reviews "),r.a.createElement("i",{className:"fa fa-pencil"})),0!==this.state.reviews.length&&this.renderReviews())))}}]),t}(r.a.Component)),te=a(38),ae=a.n(te),ne=function(e){var t=e.user,a=e.updateProfile;return r.a.createElement("div",{className:"profile justify-content-center"},r.a.createElement("div",{className:"container",id:"profile_section"},r.a.createElement("div",{className:"d-flex flex-row mb-2 justify-content-center"},r.a.createElement("i",{className:"fa fa-user-circle fa-4x"})),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"alert alert-success d-none w-100",role:"alert",id:"alert"},"Profile successfully saved!")),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"text",label:"Username",variant:"filled",defaultValue:t.username,id:"profile-username",disabled:!0,className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"text",label:"First Name",variant:"filled",defaultValue:t.firstName,id:"profile-firstName",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"text",label:"Last Name",variant:"filled",defaultValue:t.lastName,id:"profile-lastName",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"email",label:"Email",variant:"filled",defaultValue:t.email,id:"profile-email",className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(g.a,{type:"text",variant:"filled",label:"Role",defaultValue:"ADMIN"===t.userType?"MovieCreator":t.userType,id:"profile-userType",disabled:!0,className:"w-100"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement(V.a,{className:"w-100",variant:"contained",color:"primary",onClick:function(){var e=document.getElementById("profile-firstName").value,n=document.getElementById("profile-email").value,r=document.getElementById("profile-lastName").value;t.firstName=e,t.email=n,t.lastName=r,a(t).then(function(e){e&&(document.getElementById("alert").className="alert alert-success w-100")})}},"Update")),r.a.createElement("div",{className:"form-group row"},r.a.createElement(p.a,{to:"/",className:"w-100"},r.a.createElement(V.a,{className:"w-100",variant:"contained",color:"secondary"},"Back"))))),r.a.createElement(ae.a,null),r.a.createElement("div",{className:"mt-3 pb-5"},"FAN"===t.userType&&r.a.createElement(ee,{user:t.username})))},re=a(106),ie=a.n(re),se=a(107),le=a.n(se),oe=a(108),ce=a.n(oe),me=a(109),ue=a.n(me),de=a(110),ve=a.n(de),pe=a(70),fe=a.n(pe),he=a(71),Ee=a.n(he),ge=a(72),Ne=a.n(ge),we=a(73),be=a.n(we),ye=a(111),ke=a.n(ye),Se=a(112),je=a.n(Se),Ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={left:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w-100 mb-3"},r.a.createElement(ie.a,{position:"static",color:"primary",className:{}},r.a.createElement(le.a,null,this.props.login&&r.a.createElement(ce.a,{color:"inherit","aria-label":"Menu",onClick:function(){return e.setState({left:!0})}},r.a.createElement(ue.a,null)),r.a.createElement(M.a,{className:"flex-grow-1",variant:"h6",color:"inherit"},"MovieTable"),r.a.createElement(V.a,{color:"inherit",onClick:function(){return h.push("/")}},"Home"),r.a.createElement(V.a,{color:"inherit",onClick:function(){return h.push("/SEARCH")}},"Search"),!this.props.login&&r.a.createElement(V.a,{color:"inherit",onClick:function(){return h.push("/LOGIN")}},"Login"),this.props.login&&r.a.createElement(M.a,{variant:"h6",color:"inherit"},"Hi ",this.props.user.username))),r.a.createElement(ve.a,{open:this.state.left,onClose:function(){return e.setState({left:!1})}},r.a.createElement("div",{tabIndex:0,role:"button"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{button:!0,onClick:function(){e.setState({left:!1}),h.push("/PROFILE")}},r.a.createElement(Ne.a,null,r.a.createElement(ke.a,null)),r.a.createElement(be.a,null,"Profile")),r.a.createElement(ae.a,null),r.a.createElement(Ee.a,{button:!0,onClick:function(){e.props.logoutUser(),e.setState({left:!1}),h.push("/")}},r.a.createElement(Ne.a,null,r.a.createElement(je.a,null)),r.a.createElement(be.a,null,"Logout"))))))}}]),t}(r.a.Component),Oe=(a(268),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).renderMovies=function(){return r.a.createElement("ul",{className:"list-group random_display"},a.state.movies.map(function(e,t){return r.a.createElement("li",{onMouseEnter:function(){return a.setState({selectedMovie:e.imdbID})},onMouseLeave:function(){return a.setState({selectedMovie:""})},onClick:function(){return h.push("/DETAIL/"+a.state.selectedMovie)},className:a.state.selectedMovie===e.imdbID?"list-group-item active border-0":"list-group-item border-0"},r.a.createElement("i",{className:"fa fa-file-movie-o"})," ",e.title)}))},a.renderReviews=function(){return r.a.createElement("ul",{className:"list-group"},a.state.userReview.map(function(e,t){return r.a.createElement("li",{className:"list-group-item border-0"},r.a.createElement("i",{className:"fa fa-pencil"})," ",e.movieTitle,": ",e.text)}))},a.renderRecomend=function(){return r.a.createElement("ul",{className:"list-group"},a.state.recommend.map(function(e,t){return r.a.createElement("li",{onMouseEnter:function(){return a.setState({selectedRecommend:e.imdbID})},onMouseLeave:function(){return a.setState({selectedRecommend:""})},onClick:function(){return h.push("/DETAIL/"+a.state.selectedRecommend)},className:a.state.selectedRecommend===e.imdbID?"list-group-item active border-0":"list-group-item border-0"},e.title)}))},a.state={movies:[],userReview:[],selectedMovie:{},recommend:[],selectedRecommend:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.findAllMovies().then(function(t){return e.setState({movies:t})}),this.props.login&&"FAN"===this.props.user.userType&&this.props.userService.getAllReviews(this.props.user.username).then(function(t){e.setState({userReview:t})}),this.props.login&&"ADMIN"===this.props.user.userType&&this.props.userService.getRecommendMovies(this.props.user.username).then(function(t){e.setState({recommend:t})})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Movie Table"),r.a.createElement("h6",null,"Movie Table is a place where you can search and talk about movies just like sitting around a table with your friends.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 border-right",id:"random_movie_display"},r.a.createElement("h5",{className:"random_display"},r.a.createElement("i",null,"--10 discussed movies on the table--")),this.renderMovies()),!this.props.login&&r.a.createElement("div",{className:"col-6",id:"user_favor"},r.a.createElement(B.a,{elevation:10,className:"w-50 p-4 text-center",id:"need_login"},r.a.createElement(M.a,{variant:"h6"},"Login To See Customized Info."))),this.props.login&&"FAN"===this.props.user.userType&&r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("i",null,this.props.user.username," reviewed movies:")),0!==this.state.userReview.length&&this.renderReviews()),this.props.login&&"ADMIN"===this.props.user.userType&&r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("i",null,this.props.user.username," recommened movies:")),0!==this.state.recommend.length&&this.renderRecomend())))}}]),t}(r.a.Component)),Me=a(113),Re=a.n(Me);function Te(e){var t,a,n=0;e.setup=function(){e.createCanvas(400,400),e.background(0),e.colorMode(e.HSB),e.angleMode(e.DEGREES)},e.draw=function(){e.noStroke(),e.fill(0,255,255),e.translate(e.width/2,e.height/2),t=16*e.pow(e.sin(n),3)*10,a=-10*(13*e.cos(n)-5*e.cos(2*n)-3*e.cos(3*n)-e.cos(4*n)),e.ellipse(t,a,3,3),(n+=.5)>=360&&e.noLoop()}}r.a.Component;var Ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).registerUser=function(e){return"FAN"===e.userType?a.userService=new D:a.userService=new $,a.userService.register(e).then(function(e){return console.log(e),0!==e.id&&(a.setState({user:e,login:!0}),!0)})},a.loginUser=function(e){return"FAN"===e.userType?a.userService=new D:a.userService=new $,a.userService.login(e).then(function(e){return 0!==e.id&&(a.setState({user:e,login:!0}),!0)})},a.updateProfile=function(e){return a.userService.updateProfile(e).then(function(e){return a.setState({user:e}),!0})},a.logout=function(){a.userService.logoutUser(),a.setState({user:{},login:!1})},a.state={user:{},login:!1},a.userService=new D,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{history:h},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(Ie,{login:this.state.login,user:this.state.user,logoutUser:this.logout}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(v.a,{path:"/HOME",exact:!0,redner:function(){return r.a.createElement(Oe,{login:e.state.login,user:e.state.user,userService:e.userService})}}),r.a.createElement(v.a,{path:"/",exact:!0,render:function(){return r.a.createElement(Oe,{login:e.state.login,user:e.state.user,userService:e.userService})}}),r.a.createElement(v.a,{path:"/SEARCH",exact:!0,render:function(){return r.a.createElement(k,null)}}),r.a.createElement(v.a,{path:"/SEARCH/:keyword",render:function(e){return r.a.createElement(R,e)}}),r.a.createElement(v.a,{path:"/DETAIL/:id",render:function(t){return r.a.createElement(H,Object.assign({},t,{login:e.state.login,user:e.state.user}))}}),r.a.createElement(v.a,{path:"/LOGIN",render:function(){return r.a.createElement(Q,{loginUser:e.loginUser})}}),r.a.createElement(v.a,{path:"/REGISTER",render:function(){return r.a.createElement(Z,{registerUser:e.registerUser})}}),r.a.createElement(v.a,{path:"/PROFILE/:username",render:function(e){return r.a.createElement(ee,e)}}),r.a.createElement(v.a,{path:"/PROFILE",exact:!0,render:function(){return e.state.login?r.a.createElement(ne,{user:e.state.user,updateProfile:e.updateProfile}):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(B.a,{className:"text-center w-50 mt-5 pt-3",elevation:"20"},r.a.createElement("p",null,"You must ",r.a.createElement(p.a,{to:"/LOGIN"},"login")," first to see your profile")))}}))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(Ce,null),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.79a8c8b6.chunk.js.map
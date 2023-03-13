function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Carousel {
    constructor(el, _options = {}) {_defineProperty(this, "getSettings",
  () => {
    return this.settings;
  });_defineProperty(this, "reInitWithOptions",
  
  (options = {}) => {
    this.carousel.classList.remove('initialized');
    this.track.classList.add('C-track--reinit');
    this.settings = {
      ...this.getSettings(),
      ...options };
  
  
    this.init();
    this.onResizeActions();
    this.track.classList.remove('C-track--reinit');
  });_defineProperty(this, "goTo",index => {
    this.setState({
      currentSlide: index },
    () => {
      //console.log('Current slide is now: ', this.state.currentSlide);
    });
  });
  const DEFAULTS = { 
    infinite: true, 
    slideSelector: '.C-slide', 
    initialSlideIndex: 0, 
    vertical: false 
  };
  this.carousel = el;
  this.settings = { 
    ...DEFAULTS, 
    ..._options 
  };
  this.slides = document.querySelectorAll(
    this.settings.slideSelector
  );
  this.state = { 
    currentSlide: this.settings.initialSlideIndex 
  };
  this.track = null;
  this.navigation = null;
  this.navigationButtons = []; 
  // Init
  this.init();
}
setState(newState, callback = () => undefined) {
  this.state = {
     ...this.state, 
     ...newState };
     this.updateCarousel();
     return callback();
    }
    init() {
      const { 
        carousel, 
        slides 
      } 
      = this;
      const { 
        vertical 
      } = this.settings;
      carousel.classList.remove('C-carousel--vertical');
      carousel.classList.remove('C-carousel--horizontal');
      if (vertical) {
        carousel.classList.add('C-carousel--horizontal');
        slides.forEach(slide => {slide.style.float = 'left';
      });
    } 
    else {
      carousel.classList.add('C-carousel--vertical');
    }
    this.onInitActions();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.onResizeActions();
      }, 100);});}
      onInitActions() {
        this.createSlideTrack();
        this.createNavigation();
        this.createNavigationButtons();
        this.updateCarousel();
        this.carousel.classList.add('initialized');
      }
      onResizeActions() {
        this.setSlideTrackDimensions();
      }createSlideTrack() {
        const { 
          slides, 
          carousel, 
          track 
        } = this; // Do not re-create track if it exists
  if (!track) {
    const track = document.createElement('div');
    track.classList.add('C-track');
    slides.forEach(slide => {
      track.appendChild(slide);
    });
    carousel.appendChild(track);
    this.track = track;
  }
  this.setSlideTrackDimensions();
}setSlideTrackDimensions() {
  const { 
    track, slides 
  } = this;slides.forEach(slide => {
    slide.style.transition = 'none';
  });
  const numberOfSlides = slides.length;
  if (!track) {
    return;
  }
  const { 
    vertical 
  } = this.settings;
  console.log("DTOS "+[slides.length])
  const height = [...slides].reduce((acc, slide) => acc + slide.offsetHeight, 0);
  const width = [...slides].reduce((acc, slide) => acc + slide.offsetWidth, 0);
  track.style.transition = 'none';
  if (!!vertical) {
    track.style.width = 100 + '%';
    track.style.height = height + 'px';
  } 
  else {
    track.style.width = 100+ '%';
    track.style.height = height / numberOfSlides + 'px';
  }
  track.style.transition = '';
  slides.forEach(slide => {
    slide.style.transition = '';
  });}updateTrackPosition() {
    const { slides, track } = this;const numberOfSlides = slides.length;const basePercentage = 100 / numberOfSlides;const { vertical } = this.settings;const { currentSlide } = this.state;const translateValue = !!vertical ? `translateY(-${basePercentage * currentSlide}%)` : `translateX(-${basePercentage * currentSlide}%)`;track.style.transform = translateValue;}createNavigation() {const { slides, carousel, navigation } = this;if (!navigation) {
      const navigationContainer = document.createElement('div');
      navigationContainer.classList.add('C-navigation');[...slides].forEach((slide, index) => {navigationContainer.appendChild(this.createNavigationDot(index));});carousel.appendChild(navigationContainer);this.navigation = navigationContainer;}}createNavigationDot(index) {const { currentSlide } = this.state;const navigationDot = document.createElement('div');navigationDot.classList.add('C-navigation__dot');navigationDot.setAttribute('data-slideIndex', index);navigationDot.addEventListener('click', () => {this.goTo(index);});return navigationDot;}
      createNavigationButtons() {
        const createNavigationButton = buttonType => {const { carousel } = this;const navigationButton = document.createElement('button');navigationButton.setAttribute('type', 'button');
      navigationButton.classList.add('C-carousel-navigation-button');navigationButton.classList.add(`C-carousel-navigation-button--${buttonType}`);navigationButton.addEventListener('click', () => {const { slides } = this;const { currentSlide } = this.state;const numberOfSLides = slides.length;const lastSlideIndex = numberOfSLides - 1;if (buttonType === 'next') {const slideToGo = currentSlide + 1;if (slideToGo > lastSlideIndex) {if (!!this.settings.infinite) {return this.goTo(0);}return;} else {this.goTo(slideToGo);}} else {const slideToGo = currentSlide - 1;if (slideToGo < 0) {if (!!this.settings.infinite) {return this.goTo(lastSlideIndex);}return;} else {this.goTo(slideToGo);}}});navigationButton.textContent = buttonType;carousel.appendChild(navigationButton);this.navigationButtons.push(navigationButton);};if (this.navigationButtons.length <= 0) {
        }}
        updateNavigation() {const { navigation } = this;const { currentSlide } = this.state;const navigationDots = navigation.querySelectorAll('.C-navigation__dot');navigationDots.forEach(dot => {const dotIndex = parseInt(dot.getAttribute('data-slideIndex'), 10);if (dotIndex === currentSlide) {dot.classList.add('active');} else {dot.classList.remove('active');}});}updateSlides() {const { slides } = this;const { currentSlide } = this.state;slides.forEach((slide, index) => {if (index === currentSlide) {slide.classList.add('active');} else {slide.classList.remove('active');}});}updateCarousel() {
  this.updateTrackPosition();
  this.updateNavigation();
  this.updateSlides();
  }}
  const registeredCarousels = [];
  const carousels = document.querySelectorAll('.C-carousel');
  carousels.forEach((carousel, index) => {
  registeredCarousels.push({
  id: `C-carousel-${index}`,
  carousel: new Carousel(carousel, {
    vertical: true }) });
  });
/*------------ records-------- */
const tasksContainer7 = document.getElementById("card-slider");
const tasksContainer9 = document.getElementById("resultado");
const tasksContainer20 = document.getElementById("resultado1");
const tasksContainer21 = document.getElementById("resultado2");
const tasksContainer22 = document.getElementById("resultado3");
const tasksContainer23 = document.getElementById("resultado4");
const tasksContainer30 = document.getElementById("resultado5");
const tasksContainer31 = document.getElementById("resultado6");
const tasksContainer32 = document.getElementById("resultado7");
const tasksContainer40 = document.getElementById("resultado8");
const tasksContainer41 = document.getElementById("resultado9");


const getTasks1 = () => db.collection("Records").orderBy("puntaje", "desc").limit(3);
const onGetTasks1 = (callback) => db.collection("Records").orderBy("puntaje", "desc").limit(3).onSnapshot(callback);
const getTasks2 = () => db.collection("Records").orderBy("puntaje", "desc").get();
const onGetTasks2 = (callback) => db.collection("Records").orderBy("puntaje", "desc").onSnapshot(callback);
const getTasks20 = () => db.collection("Records").orderBy("minusculas", "desc").get();
const onGetTasks20 = (callback) => db.collection("Records").orderBy("minusculas", "desc").onSnapshot(callback);
const getTasks21 = () => db.collection("Records").orderBy("mayusculas", "desc").get();
const onGetTasks21 = (callback) => db.collection("Records").orderBy("mayusculas", "desc").onSnapshot(callback);
const getTasks22 = () => db.collection("Records").orderBy("simbolos", "desc").get();
const onGetTasks22 = (callback) => db.collection("Records").orderBy("simbolos", "desc").onSnapshot(callback);
const getTasks23 = () => db.collection("Records").orderBy("numeros", "desc").get();
const onGetTasks23 = (callback) => db.collection("Records").orderBy("numeros", "desc").onSnapshot(callback);

const getTasks30 = () => db.collection("Records").orderBy("minsimB", "desc").get();
const onGetTasks30 = (callback) => db.collection("Records").orderBy("minsimB", "desc").onSnapshot(callback);
const getTasks31 = () => db.collection("Records").orderBy("mayusculasA", "desc").get();
const onGetTasks31 = (callback) => db.collection("Records").orderBy("mayusculasA", "desc").onSnapshot(callback);
const getTasks32 = () => db.collection("Records").orderBy("numerosA", "desc").get();
const onGetTasks32 = (callback) => db.collection("Records").orderBy("numerosA", "desc").onSnapshot(callback);

const getTasks40 = () => db.collection("Records").orderBy("minsim", "desc").get();
const onGetTasks40 = (callback) => db.collection("Records").orderBy("minsim", "desc").onSnapshot(callback);
const getTasks41 = () => db.collection("Records").orderBy("maynum", "desc").get();
const onGetTasks41 = (callback) => db.collection("Records").orderBy("maynum", "desc").onSnapshot(callback);

var c = 0;
var d = 1;
var f = 1;
var g = 0;
var h = 1;
var i = 0;
var j = 1;
var k = 0;
var l = 1;
var m = 0;
var n = 1;
var o = 0;
var p = 1;
var q = 0;
var r = 1;
var s = 0;
var t = 1;
var v = 0;
var w = 1;
var x = 0;
window.addEventListener("DOMContentLoaded", async (e) => {

  onGetTasks1((querySnapshot) => {
    tasksContainer7.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task2 = doc.data();
      if (b == 0) {

        if (task2.foto == 0) {
          var name = "nina"
        } else if (task2.foto == 1) {
          var name = "nino"
        }
        else if (task2.foto == 2) {
          var name = "jovena"
        }
        else if (task2.foto == 3) {
          var name = "joveno"
        }

        else if (task2.foto == 4) {
          var name = "adulta"
        }
        else if (task2.foto == 5) {
          var name = "adulto"
        }
        else if (task2.foto == 6) {
          var name = "abuelo"
        }
        else if (task2.foto == 7) {
          var name = "abuela"
        }
        else if (task2.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task2.puntaje.toString().length
        if (punto < 5) {
          var resultado = task2.puntaje + " pts"
        } else if (punto >= 5) {
          var uno = task2.puntaje.toString().substring(0, 2)
          var dos = task2.puntaje.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        tasksContainer7.innerHTML += `
        <div class='carousel__item'>
        <div class='carousel__item-head' style="background-color: #e6d436;">
          <img src="img/prime.png" width="100%">
        </div>
        <div class='carousel__item-body'>
          <p class='title'>${task2.usuario}</p>
          <p class="titulitos">Puntaje: <p class="titulitos1">${resultado}</p>
          <p class="titulitos" >User ID: <p class="titulitos1">${task2.uid}</p></p>
        </div>
        <div class='carousel__item-head1'style="background-color: #e6d436;">
        <img src="img/${name}.png" width="100%">
      </div>
      </div>
     `         ,
          b = 1;
      }
       else if (b == 1) {
        if (task2.foto == 0) {
          var name = "nina"
        } else if (task2.foto == 1) {
          var name = "nino"
        }
        else if (task2.foto == 2) {
          var name = "jovena"
        }
        else if (task2.foto == 3) {
          var name = "joveno"
        }

        else if (task2.foto == 4) {
          var name = "adulta"
        }
        else if (task2.foto == 5) {
          var name = "adulto"
        }
        else if (task2.foto == 6) {
          var name = "abuelo"
        }
        else if (task2.foto == 7) {
          var name = "abuela"
        }
        else if (task2.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task2.puntaje.toString().length
        if (punto < 5) {
          var resultado = task2.puntaje + " pts"
        } else if (punto >= 5) {
          var uno = task2.puntaje.toString().substring(0, 2)
          var dos = task2.puntaje.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        tasksContainer7.innerHTML += `
        <div class='carousel__item'>
        <div class='carousel__item-head' style="  background-color: #98a7a4;">
          <img src="img/segu.png" width="100%">
        </div>
        <div class='carousel__item-body'>
          <p class='title'>${task2.usuario}</p>
          <p class="titulitos">Puntaje: <p class="titulitos1">${resultado}</p>
          <p class="titulitos" >User ID: <p class="titulitos1">${task2.uid}</p></p>
        </div>
        <div class='carousel__item-head1'style="  background-color: #98a7a4;">
            <img src="img/${name}.png" width="100%">
          </div>
      </div>
`          ,
          b = 2;
      }
      else if (b == 2) {
        if (task2.foto == 0) {
          var name = "nina"
        } else if (task2.foto == 1) {
          var name = "nino"
        }
        else if (task2.foto == 2) {
          var name = "jovena"
        }
        else if (task2.foto == 3) {
          var name = "joveno"
        }

        else if (task2.foto == 4) {
          var name = "adulta"
        }
        else if (task2.foto == 5) {
          var name = "adulto"
        }
        else if (task2.foto == 6) {
          var name = "abuelo"
        }
        else if (task2.foto == 7) {
          var name = "abuela"
        }
        else if (task2.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task2.puntaje.toString().length
        if (punto < 5) {
          var resultado = task2.puntaje + " pts"
        } else if (punto >= 5) {
          var uno = task2.puntaje.toString().substring(0, 2)
          var dos = task2.puntaje.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        tasksContainer7.innerHTML += `
      <div class='carousel__item'>
      <div class='carousel__item-head' style="  background-color: #77520e;">
        <img src="img/terc.png" width="100%">
      </div>
      <div class='carousel__item-body'>
      <p class='title'>${task2.usuario}</p>
      <p class="titulitos">Puntaje: <p class="titulitos1">${resultado}</p>
      <p class="titulitos" >User ID: <p class="titulitos1">${task2.uid}</p></p>
    </div>
      <div class='carousel__item-head1'style="  background-color: #77520e;">
      <img src="img/${name}.png" width="100%">
    </div>
    </div>
`    
}  
 });
  });

  onGetTasks2((querySnapshot) => {
    tasksContainer9.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task2 = doc.data();
      if (c == 0) {
        if (d == 1) {
          if (task2.foto == 0) {
            var name = "nina"
          } else if (task2.foto == 1) {
            var name = "nino"
          }
          else if (task2.foto == 2) {
            var name = "jovena"
          }
          else if (task2.foto == 3) {
            var name = "joveno"
          }

          else if (task2.foto == 4) {
            var name = "adulta"
          }
          else if (task2.foto == 5) {
            var name = "adulto"
          }
          else if (task2.foto == 6) {
            var name = "abuelo"
          }
          else if (task2.foto == 7) {
            var name = "abuela"
          }
          else if (task2.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task2.puntaje.toString().length
          if (punto < 5) {
            var resultado = task2.puntaje + " pts"
          } else if (punto >= 5) {
            var uno = task2.puntaje.toString().substring(0, 2)
            var dos = task2.puntaje.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer9.innerHTML += `
          <tr>
          <td class=label><img src="img/prime.png" width="25%"  >
          <img src="img/${name}.png" width="25%"  ></td>
          <td class=label>${task2.usuario}</td>
          <td class=label>${resultado}</td>
                    </tr>
        `         ,
            d = d + 1
        } else if (d == 2) {
          if (task2.foto == 0) {
            var name = "nina"
          } else if (task2.foto == 1) {
            var name = "nino"
          }
          else if (task2.foto == 2) {
            var name = "jovena"
          }
          else if (task2.foto == 3) {
            var name = "joveno"
          }

          else if (task2.foto == 4) {
            var name = "adulta"
          }
          else if (task2.foto == 5) {
            var name = "adulto"
          }
          else if (task2.foto == 6) {
            var name = "abuelo"
          }
          else if (task2.foto == 7) {
            var name = "abuela"
          }
          else if (task2.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task2.puntaje.toString().length
          if (punto < 5) {
            var resultado = task2.puntaje + " pts"
          } else if (punto >= 5) {
            var uno = task2.puntaje.toString().substring(0, 2)
            var dos = task2.puntaje.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer9.innerHTML += `
          <tr>
          <td class=label><img src="img/segu.png" width="25%"  ><img src="img/${name}.png" width="25%"  ></td>
   
          <td class=label>${task2.usuario}</td>
          <td class=label>${resultado}</td>
                    </tr>
        `         ,
            d = d + 1
        } else if (d == 3) {
          if (task2.foto == 0) {
            var name = "nina"
          } else if (task2.foto == 1) {
            var name = "nino"
          }
          else if (task2.foto == 2) {
            var name = "jovena"
          }
          else if (task2.foto == 3) {
            var name = "joveno"
          }

          else if (task2.foto == 4) {
            var name = "adulta"
          }
          else if (task2.foto == 5) {
            var name = "adulto"
          }
          else if (task2.foto == 6) {
            var name = "abuelo"
          }
          else if (task2.foto == 7) {
            var name = "abuela"
          }
          else if (task2.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task2.puntaje.toString().length
          if (punto < 5) {
            var resultado = task2.puntaje + " pts"
          } else if (punto >= 5) {
            var uno = task2.puntaje.toString().substring(0, 2)
            var dos = task2.puntaje.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer9.innerHTML += `
          <tr>
          <td class=label><img src="img/terc.png" width="25%"  ><img src="img/${name}.png" width="25%"  ></td>
          <td class=label>${task2.usuario}</td>
          <td class=label>${resultado}</td>
                    </tr>
        `         ,
            d = d + 1
          c = 1
        }

      }
      else if (c == 1) {
        var puest1 = d
      

        if (task2.foto == 0) {
          var name = "nina"
        } else if (task2.foto == 1) {
          var name = "nino"
        }
        else if (task2.foto == 2) {
          var name = "jovena"
        }
        else if (task2.foto == 3) {
          var name = "joveno"
        }

        else if (task2.foto == 4) {
          var name = "adulta"
        }
        else if (task2.foto == 5) {
          var name = "adulto"
        }
        else if (task2.foto == 6) {
          var name = "abuelo"
        }
        else if (task2.foto == 7) {
          var name = "abuela"
        }
        else if (task2.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task2.puntaje.toString().length
        if (punto < 5) {
          var resultado = task2.puntaje + " pts"
        } else if (punto >= 5) {
          var uno = task2.puntaje.toString().substring(0, 2)
          var dos = task2.puntaje.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        tasksContainer9.innerHTML += `
    
        <tr>
        <td class=label>${puest1} <img src="img/${name}.png" width="25%"></td>
  
        <td class=label>${task2.usuario}</td>
        <td class=label>${resultado} </td>
        
          </tr>
`          , d = d + 1
      }

    });
  });
  onGetTasks20((querySnapshot) => {
    tasksContainer20.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task20 = doc.data();
  
      if (g == 0) {
        if (f == 1) {
          if (task20.foto == 0) {
            var name = "nina"
          } else if (task20.foto == 1) {
            var name = "nino"
          }
          else if (task20.foto == 2) {
            var name = "jovena"
          }
          else if (task20.foto == 3) {
            var name = "joveno"
          }

          else if (task20.foto == 4) {
            var name = "adulta"
          }
          else if (task20.foto == 5) {
            var name = "adulto"
          }
          else if (task20.foto == 6) {
            var name = "abuelo"
          }
          else if (task20.foto == 7) {
            var name = "abuela"
          }
          else if (task20.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task20.minusculas.toString().length
          if (punto < 5) {
            var resultado = task20.minusculas + " pts"
          } else if (punto >= 5) {
            var uno = task20.minusculas.toString().substring(0, 2)
            var dos = task20.minusculas.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer20.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            f = f + 1
        } else if (f == 2) {
          if (task20.foto == 0) {
            var name = "nina"
          } else if (task20.foto == 1) {
            var name = "nino"
          }
          else if (task20.foto == 2) {
            var name = "jovena"
          }
          else if (task20.foto == 3) {
            var name = "joveno"
          }

          else if (task20.foto == 4) {
            var name = "adulta"
          }
          else if (task20.foto == 5) {
            var name = "adulto"
          }
          else if (task20.foto == 6) {
            var name = "abuelo"
          }
          else if (task20.foto == 7) {
            var name = "abuela"
          }
          else if (task20.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task20.minusculas.toString().length
          if (punto < 5) {
            var resultado1 = task20.minusculas + " pts"
          } else if (punto >= 5) {
            var uno = task20.minusculas.toString().substring(0, 2)
            var dos = task20.minusculas.toString().substring(2, 3)
            var resultado1 = uno + "." + dos + " k pts"
          }

          tasksContainer20.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
          
            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado1}</td>
                      </tr>
          `         ,
            f = f + 1
        } else if (f == 3) {
          if (task20.foto == 0) {
            var name = "nina"
          } else if (task20.foto == 1) {
            var name = "nino"
          }
          else if (task20.foto == 2) {
            var name = "jovena"
          }
          else if (task20.foto == 3) {
            var name = "joveno"
          }

          else if (task20.foto == 4) {
            var name = "adulta"
          }
          else if (task20.foto == 5) {
            var name = "adulto"
          }
          else if (task20.foto == 6) {
            var name = "abuelo"
          }
          else if (task20.foto == 7) {
            var name = "abuela"
          }
          else if (task20.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task20.minusculas.toString().length
          if (punto < 5) {
            var resultado2 = task20.minusculas + " pts"
          } else if (punto >= 5) {
            var uno = task20.minusculas.toString().substring(0, 2)
            var dos = task20.minusculas.toString().substring(2, 3)
            var resultado2 = uno + "." + dos + " k pts"
          }

          tasksContainer20.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
   
            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado2}</td>
                      </tr>
          `         ,
            f = f + 1
          g = 1
        }

      }
      else if (g == 1) {
        var puest1 = f
   
        if (task20.foto == 0) {
          var name = "nina"
        } else if (task20.foto == 1) {
          var name = "nino"
        }
        else if (task20.foto == 2) {
          var name = "jovena"
        }
        else if (task20.foto == 3) {
          var name = "joveno"
        }

        else if (task20.foto == 4) {
          var name = "adulta"
        }
        else if (task20.foto == 5) {
          var name = "adulto"
        }
        else if (task20.foto == 6) {
          var name = "abuelo"
        }
        else if (task20.foto == 7) {
          var name = "abuela"
        }
        else if (task20.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task20.minusculas.toString().length
        if (punto < 5) {
          var resultado3 = task20.minusculas + " pts"
        } else if (punto >= 5) {
          var uno = task20.minusculas.toString().substring(0, 2)
          var dos = task20.minusculas.toString().substring(2, 3)
          var resultado3 = uno + "." + dos + " k pts"
        }
        tasksContainer20.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
    
          <td class=label>${task20.usuario}</td>
          <td class=label>${resultado3} </td>
          
            </tr>
  `          , f = f + 1
      }

    });
  });
  onGetTasks21((querySnapshot) => {
    tasksContainer21.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task21 = doc.data();
      if (i == 0) {
        if (h == 1) {
          if (task21.foto == 0) {
            var name = "nina"
          } else if (task21.foto == 1) {
            var name = "nino"
          }
          else if (task21.foto == 2) {
            var name = "jovena"
          }
          else if (task21.foto == 3) {
            var name = "joveno"
          }

          else if (task21.foto == 4) {
            var name = "adulta"
          }
          else if (task21.foto == 5) {
            var name = "adulto"
          }
          else if (task21.foto == 6) {
            var name = "abuelo"
          }
          else if (task21.foto == 7) {
            var name = "abuela"
          }
          else if (task21.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task21.mayusculas.toString().length
          if (punto < 5) {
            var resultado = task21.mayusculas + " pts"
          } else if (punto >= 5) {
            var uno = task21.mayusculas.toString().substring(0, 2)
            var dos = task21.mayusculas.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer21.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task21.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            h = h + 1
        } else if (h == 2) {
          if (task21.foto == 0) {
            var name = "nina"
          } else if (task21.foto == 1) {
            var name = "nino"
          }
          else if (task21.foto == 2) {
            var name = "jovena"
          }
          else if (task21.foto == 3) {
            var name = "joveno"
          }

          else if (task21.foto == 4) {
            var name = "adulta"
          }
          else if (task21.foto == 5) {
            var name = "adulto"
          }
          else if (task21.foto == 6) {
            var name = "abuelo"
          }
          else if (task21.foto == 7) {
            var name = "abuela"
          }
          else if (task21.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task21.mayusculas.toString().length
          if (punto < 5) {
            var resultado = task21.mayusculas + " pts"
          } else if (punto >= 5) {
            var uno = task21.mayusculas.toString().substring(0, 2)
            var dos = task21.mayusculas.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer21.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
       
            <td class=label>${task21.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            h = h + 1
        } else if (h == 3) {
          if (task21.foto == 0) {
            var name = "nina"
          } else if (task21.foto == 1) {
            var name = "nino"
          }
          else if (task21.foto == 2) {
            var name = "jovena"
          }
          else if (task21.foto == 3) {
            var name = "joveno"
          }

          else if (task21.foto == 4) {
            var name = "adulta"
          }
          else if (task21.foto == 5) {
            var name = "adulto"
          }
          else if (task21.foto == 6) {
            var name = "abuelo"
          }
          else if (task21.foto == 7) {
            var name = "abuela"
          }
          else if (task21.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task21.mayusculas.toString().length
          if (punto < 5) {
            var resultado = task21.mayusculas + " pts"
          } else if (punto >= 5) {
            var uno = task21.mayusculas.toString().substring(0, 2)
            var dos = task21.mayusculas.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }


          tasksContainer21.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
        
            <td class=label>${task21.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            h = h + 1
          i = 1
        }

      }
      else if (i == 1) {
        var puest1 = h
        if (task21.foto == 0) {
          var name = "nina"
        } else if (task21.foto == 1) {
          var name = "nino"
        }
        else if (task21.foto == 2) {
          var name = "jovena"
        }
        else if (task21.foto == 3) {
          var name = "joveno"
        }

        else if (task21.foto == 4) {
          var name = "adulta"
        }
        else if (task21.foto == 5) {
          var name = "adulto"
        }
        else if (task21.foto == 6) {
          var name = "abuelo"
        }
        else if (task21.foto == 7) {
          var name = "abuela"
        }
        else if (task21.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task21.mayusculas.toString().length
        if (punto < 5) {
          var resultado = task21.mayusculas + " pts"
        } else if (punto >= 5) {
          var uno = task21.mayusculas.toString().substring(0, 2)
          var dos = task21.mayusculas.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }

        tasksContainer21.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
          <td class=label>${task21.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , h = h + 1
      }

    });
  });
  onGetTasks22((querySnapshot) => {
    tasksContainer22.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task22 = doc.data();
      if (k == 0) {
        if (j == 1) {
          if (task22.foto == 0) {
            var name = "nina"
          } else if (task22.foto == 1) {
            var name = "nino"
          }
          else if (task22.foto == 2) {
            var name = "jovena"
          }
          else if (task22.foto == 3) {
            var name = "joveno"
          }

          else if (task22.foto == 4) {
            var name = "adulta"
          }
          else if (task22.foto == 5) {
            var name = "adulto"
          }
          else if (task22.foto == 6) {
            var name = "abuelo"
          }
          else if (task22.foto == 7) {
            var name = "abuela"
          }
          else if (task22.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task22.simbolos.toString().length
          if (punto < 5) {
            var resultado = task22.simbolos + " pts"
          } else if (punto >= 5) {
            var uno = task22.simbolos.toString().substring(0, 2)
            var dos = task22.simbolos.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer22.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
       
            <td class=label>${task22.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            j = j + 1
        } else if (j == 2) {
          if (task22.foto == 0) {
            var name = "nina"
          } else if (task22.foto == 1) {
            var name = "nino"
          }
          else if (task22.foto == 2) {
            var name = "jovena"
          }
          else if (task22.foto == 3) {
            var name = "joveno"
          }

          else if (task22.foto == 4) {
            var name = "adulta"
          }
          else if (task22.foto == 5) {
            var name = "adulto"
          }
          else if (task22.foto == 6) {
            var name = "abuelo"
          }
          else if (task22.foto == 7) {
            var name = "abuela"
          }
          else if (task22.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task22.simbolos.toString().length
          if (punto < 5) {
            var resultado = task22.simbolos + " pts"
          } else if (punto >= 5) {
            var uno = task22.simbolos.toString().substring(0, 2)
            var dos = task22.simbolos.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer22.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
                 <td class=label>${task22.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            j = j + 1
        } else if (j == 3) {
          if (task22.foto == 0) {
            var name = "nina"
          } else if (task22.foto == 1) {
            var name = "nino"
          }
          else if (task22.foto == 2) {
            var name = "jovena"
          }
          else if (task22.foto == 3) {
            var name = "joveno"
          }

          else if (task22.foto == 4) {
            var name = "adulta"
          }
          else if (task22.foto == 5) {
            var name = "adulto"
          }
          else if (task22.foto == 6) {
            var name = "abuelo"
          }
          else if (task22.foto == 7) {
            var name = "abuela"
          }
          else if (task22.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task22.simbolos.toString().length
          if (punto < 5) {
            var resultado = task22.simbolos + " pts"
          } else if (punto >= 5) {
            var uno = task22.simbolos.toString().substring(0, 2)
            var dos = task22.simbolos.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }


          tasksContainer22.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
      
            <td class=label>${task22.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            j = j + 1
          k = 1
        }

      }
      else if (k == 1) {
        var puest1 = j
        if (task22.foto == 0) {
          var name = "nina"
        } else if (task22.foto == 1) {
          var name = "nino"
        }
        else if (task22.foto == 2) {
          var name = "jovena"
        }
        else if (task22.foto == 3) {
          var name = "joveno"
        }

        else if (task22.foto == 4) {
          var name = "adulta"
        }
        else if (task22.foto == 5) {
          var name = "adulto"
        }
        else if (task22.foto == 6) {
          var name = "abuelo"
        }
        else if (task22.foto == 7) {
          var name = "abuela"
        }
        else if (task22.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task22.simbolos.toString().length
        if (punto < 5) {
          var resultado = task22.simbolos + " pts"
        } else if (punto >= 5) {
          var uno = task22.simbolos.toString().substring(0, 2)
          var dos = task22.simbolos.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }

        tasksContainer22.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
          <td class=label>${task22.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , j = j + 1
      }

    });
  });
  onGetTasks23((querySnapshot) => {
    tasksContainer23.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task23 = doc.data();
      if (m == 0) {
        if (l == 1) {
          if (task23.foto == 0) {
            var name = "nina"
          } else if (task23.foto == 1) {
            var name = "nino"
          }
          else if (task23.foto == 2) {
            var name = "jovena"
          }
          else if (task23.foto == 3) {
            var name = "joveno"
          }

          else if (task23.foto == 4) {
            var name = "adulta"
          }
          else if (task23.foto == 5) {
            var name = "adulto"
          }
          else if (task23.foto == 6) {
            var name = "abuelo"
          }
          else if (task23.foto == 7) {
            var name = "abuela"
          }
          else if (task23.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task23.numeros.toString().length
          if (punto < 5) {
            var resultado = task23.numeros + " pts"
          } else if (punto >= 5) {
            var uno = task23.numeros.toString().substring(0, 2)
            var dos = task23.numeros.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer23.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
         
            <td class=label>${task23.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            l = l + 1
        } else if (l == 2) {
          if (task23.foto == 0) {
            var name = "nina"
          } else if (task23.foto == 1) {
            var name = "nino"
          }
          else if (task23.foto == 2) {
            var name = "jovena"
          }
          else if (task23.foto == 3) {
            var name = "joveno"
          }

          else if (task23.foto == 4) {
            var name = "adulta"
          }
          else if (task23.foto == 5) {
            var name = "adulto"
          }
          else if (task23.foto == 6) {
            var name = "abuelo"
          }
          else if (task23.foto == 7) {
            var name = "abuela"
          }
          else if (task23.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task23.numeros.toString().length
          if (punto < 5) {
            var resultado = task23.numeros + " pts"
          } else if (punto >= 5) {
            var uno = task23.numeros.toString().substring(0, 2)
            var dos = task23.numeros.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer23.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
            <td class=label>${task23.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            l = l + 1
        } else if (l == 3) {
          if (task23.foto == 0) {
            var name = "nina"
          } else if (task23.foto == 1) {
            var name = "nino"
          }
          else if (task23.foto == 2) {
            var name = "jovena"
          }
          else if (task23.foto == 3) {
            var name = "joveno"
          }

          else if (task23.foto == 4) {
            var name = "adulta"
          }
          else if (task23.foto == 5) {
            var name = "adulto"
          }
          else if (task23.foto == 6) {
            var name = "abuelo"
          }
          else if (task23.foto == 7) {
            var name = "abuela"
          }
          else if (task23.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task23.numeros.toString().length
          if (punto < 5) {
            var resultado = task23.numeros + " pts"
          } else if (punto >= 5) {
            var uno = task23.numeros.toString().substring(0, 2)
            var dos = task23.numeros.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer23.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
  
            <td class=label>${task23.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            l = l + 1
          m = 1
        }

      }
      else if (m == 1) {
        var puest1 = l
        if (task23.foto == 0) {
          var name = "nina"
        } else if (task23.foto == 1) {
          var name = "nino"
        }
        else if (task23.foto == 2) {
          var name = "jovena"
        }
        else if (task23.foto == 3) {
          var name = "joveno"
        }

        else if (task23.foto == 4) {
          var name = "adulta"
        }
        else if (task23.foto == 5) {
          var name = "adulto"
        }
        else if (task23.foto == 6) {
          var name = "abuelo"
        }
        else if (task23.foto == 7) {
          var name = "abuela"
        }
        else if (task23.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task23.numeros.toString().length
        if (punto < 5) {
          var resultado = task23.numeros + " pts"
        } else if (punto >= 5) {
          var uno = task23.numeros.toString().substring(0, 2)
          var dos = task23.numeros.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        tasksContainer23.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
          <td class=label>${task23.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , l = l + 1
      }

    });
  });
  onGetTasks30((querySnapshot) => {
    tasksContainer30.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task30 = doc.data();
      if (o == 0) {
        if (n == 1) {
          if (task30.foto == 0) {
            var name = "nina"
          } else if (task30.foto == 1) {
            var name = "nino"
          }
          else if (task30.foto == 2) {
            var name = "jovena"
          }
          else if (task30.foto == 3) {
            var name = "joveno"
          }

          else if (task30.foto == 4) {
            var name = "adulta"
          }
          else if (task30.foto == 5) {
            var name = "adulto"
          }
          else if (task30.foto == 6) {
            var name = "abuelo"
          }
          else if (task30.foto == 7) {
            var name = "abuela"
          }
          else if (task30.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task30.minsimB.toString().length
          if (punto < 5) {
            var resultado = task30.minsimB + " pts"
          } else if (punto >= 5) {
            var uno = task30.minsimB.toString().substring(0, 2)
            var dos = task30.minsimB.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer30.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
 
            <td class=label>${task30.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            n = n + 1
        } else if (n == 2) {
          if (task30.foto == 0) {
            var name = "nina"
          } else if (task30.foto == 1) {
            var name = "nino"
          }
          else if (task30.foto == 2) {
            var name = "jovena"
          }
          else if (task30.foto == 3) {
            var name = "joveno"
          }

          else if (task30.foto == 4) {
            var name = "adulta"
          }
          else if (task30.foto == 5) {
            var name = "adulto"
          }
          else if (task30.foto == 6) {
            var name = "abuelo"
          }
          else if (task30.foto == 7) {
            var name = "abuela"
          }
          else if (task30.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task30.minsimB.toString().length
          if (punto < 5) {
            var resultado1 = task30.minsimB + " pts"
          } else if (punto >= 5) {
            var uno = task30.minsimB.toString().substring(0, 2)
            var dos = task30.minsimB.toString().substring(2, 3)
            var resultado1 = uno + "." + dos + " k pts"
          }

          tasksContainer30.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
    
            <td class=label>${task30.usuario}</td>
            <td class=label>${resultado1}</td>
                      </tr>
          `         ,
            n = n + 1
        } else if (n == 3) {
          if (task30.foto == 0) {
            var name = "nina"
          } else if (task30.foto == 1) {
            var name = "nino"
          }
          else if (task30.foto == 2) {
            var name = "jovena"
          }
          else if (task30.foto == 3) {
            var name = "joveno"
          }

          else if (task30.foto == 4) {
            var name = "adulta"
          }
          else if (task30.foto == 5) {
            var name = "adulto"
          }
          else if (task30.foto == 6) {
            var name = "abuelo"
          }
          else if (task30.foto == 7) {
            var name = "abuela"
          }
          else if (task30.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task30.minsimB.toString().length
          if (punto < 5) {
            var resultado2 = task30.minsimB + " pts"
          } else if (punto >= 5) {
            var uno = task30.minsimB.toString().substring(0, 2)
            var dos = task30.minsimB.toString().substring(2, 3)
            var resultado2 = uno + "." + dos + " k pts"
          }

          tasksContainer30.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
          <td class=label>${task30.usuario}</td>
            <td class=label>${resultado2}</td>
                      </tr>
          `         ,
            n = n + 1
          o = 1
        }

      }
      else if (o == 1) {
        var puest1 = n
        if (task30.foto == 0) {
          var name = "nina"
        } else if (task30.foto == 1) {
          var name = "nino"
        }
        else if (task30.foto == 2) {
          var name = "jovena"
        }
        else if (task30.foto == 3) {
          var name = "joveno"
        }

        else if (task30.foto == 4) {
          var name = "adulta"
        }
        else if (task30.foto == 5) {
          var name = "adulto"
        }
        else if (task30.foto == 6) {
          var name = "abuelo"
        }
        else if (task30.foto == 7) {
          var name = "abuela"
        }
        else if (task30.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task30.minsimB.toString().length
        if (punto < 5) {
          var resultado3 = task30.minsimB + " pts"
        } else if (punto >= 5) {
          var uno = task30.minsimB.toString().substring(0, 2)
          var dos = task30.minsimB.toString().substring(2, 3)
          var resultado3 = uno + "." + dos + " k pts"
        }
        tasksContainer30.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
    
          <td class=label>${task30.usuario}</td>
          <td class=label>${resultado3} </td>
          
            </tr>
  `          , n = n + 1
      }

    });
  });
  onGetTasks31((querySnapshot) => {
    tasksContainer31.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task31 = doc.data();
      if (q == 0) {
        if (p == 1) {
          if (task31.foto == 0) {
            var name = "nina"
          } else if (task31.foto == 1) {
            var name = "nino"
          }
          else if (task31.foto == 2) {
            var name = "jovena"
          }
          else if (task31.foto == 3) {
            var name = "joveno"
          }

          else if (task31.foto == 4) {
            var name = "adulta"
          }
          else if (task31.foto == 5) {
            var name = "adulto"
          }
          else if (task31.foto == 6) {
            var name = "abuelo"
          }
          else if (task31.foto == 7) {
            var name = "abuela"
          }
          else if (task31.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task31.mayusculasA.toString().length
          if (punto < 5) {
            var resultado = task31.mayusculasA + " pts"
          } else if (punto >= 5) {
            var uno = task31.mayusculasA.toString().substring(0, 2)
            var dos = task31.mayusculasA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer31.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task31.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            p = p + 1
        } else if (p == 2) {
          if (task31.foto == 0) {
            var name = "nina"
          } else if (task31.foto == 1) {
            var name = "nino"
          }
          else if (task31.foto == 2) {
            var name = "jovena"
          }
          else if (task31.foto == 3) {
            var name = "joveno"
          }

          else if (task31.foto == 4) {
            var name = "adulta"
          }
          else if (task31.foto == 5) {
            var name = "adulto"
          }
          else if (task31.foto == 6) {
            var name = "abuelo"
          }
          else if (task31.foto == 7) {
            var name = "abuela"
          }
          else if (task31.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task31.mayusculasA.toString().length
          if (punto < 5) {
            var resultado = task31.mayusculasA + " pts"
          } else if (punto >= 5) {
            var uno = task31.mayusculasA.toString().substring(0, 2)
            var dos = task31.mayusculasA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }


          tasksContainer31.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
 
            <td class=label>${task31.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            p = p + 1
        } else if (p == 3) {
          if (task31.foto == 0) {
            var name = "nina"
          } else if (task31.foto == 1) {
            var name = "nino"
          }
          else if (task31.foto == 2) {
            var name = "jovena"
          }
          else if (task31.foto == 3) {
            var name = "joveno"
          }

          else if (task31.foto == 4) {
            var name = "adulta"
          }
          else if (task31.foto == 5) {
            var name = "adulto"
          }
          else if (task31.foto == 6) {
            var name = "abuelo"
          }
          else if (task31.foto == 7) {
            var name = "abuela"
          }
          else if (task31.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task31.mayusculasA.toString().length
          if (punto < 5) {
            var resultado = task31.mayusculasA + " pts"
          } else if (punto >= 5) {
            var uno = task31.mayusculasA.toString().substring(0, 2)
            var dos = task31.mayusculasA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer31.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task31.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            p = p + 1
          q = 1
        }

      }
      else if (q == 1) {
        var puest1 = p
        if (task31.foto == 0) {
          var name = "nina"
        } else if (task31.foto == 1) {
          var name = "nino"
        }
        else if (task31.foto == 2) {
          var name = "jovena"
        }
        else if (task31.foto == 3) {
          var name = "joveno"
        }

        else if (task31.foto == 4) {
          var name = "adulta"
        }
        else if (task31.foto == 5) {
          var name = "adulto"
        }
        else if (task31.foto == 6) {
          var name = "abuelo"
        }
        else if (task31.foto == 7) {
          var name = "abuela"
        }
        else if (task31.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task31.mayusculasA.toString().length
        if (punto < 5) {
          var resultado = task31.mayusculasA + " pts"
        } else if (punto >= 5) {
          var uno = task31.mayusculasA.toString().substring(0, 2)
          var dos = task31.mayusculasA.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }

        tasksContainer31.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
 
          <td class=label>${task31.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , p = p + 1
      }

    });
  });
  onGetTasks32((querySnapshot) => {
    tasksContainer32.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task32 = doc.data();
      if (s == 0) {
        if (r == 1) {
          if (task32.foto == 0) {
            var name = "nina"
          } else if (task32.foto == 1) {
            var name = "nino"
          }
          else if (task32.foto == 2) {
            var name = "jovena"
          }
          else if (task32.foto == 3) {
            var name = "joveno"
          }

          else if (task32.foto == 4) {
            var name = "adulta"
          }
          else if (task32.foto == 5) {
            var name = "adulto"
          }
          else if (task32.foto == 6) {
            var name = "abuelo"
          }
          else if (task32.foto == 7) {
            var name = "abuela"
          }
          else if (task32.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task32.numerosA.toString().length
          if (punto < 5) {
            var resultado = task32.numerosA + " pts"
          } else if (punto >= 5) {
            var uno = task32.numerosA.toString().substring(0, 2)
            var dos = task32.numerosA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer32.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
       
            <td class=label>${task32.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            r = r + 1
        } else if (r == 2) {
          if (task32.foto == 0) {
            var name = "nina"
          } else if (task32.foto == 1) {
            var name = "nino"
          }
          else if (task32.foto == 2) {
            var name = "jovena"
          }
          else if (task32.foto == 3) {
            var name = "joveno"
          }

          else if (task32.foto == 4) {
            var name = "adulta"
          }
          else if (task32.foto == 5) {
            var name = "adulto"
          }
          else if (task32.foto == 6) {
            var name = "abuelo"
          }
          else if (task32.foto == 7) {
            var name = "abuela"
          }
          else if (task32.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task32.numerosA.toString().length
          if (punto < 5) {
            var resultado = task32.numerosA + " pts"
          } else if (punto >= 5) {
            var uno = task32.numerosA.toString().substring(0, 2)
            var dos = task32.numerosA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer32.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
    
            <td class=label>${task32.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            r = r + 1
        } else if (r == 3) {
          if (task32.foto == 0) {
            var name = "nina"
          } else if (task32.foto == 1) {
            var name = "nino"
          }
          else if (task32.foto == 2) {
            var name = "jovena"
          }
          else if (task32.foto == 3) {
            var name = "joveno"
          }

          else if (task32.foto == 4) {
            var name = "adulta"
          }
          else if (task32.foto == 5) {
            var name = "adulto"
          }
          else if (task32.foto == 6) {
            var name = "abuelo"
          }
          else if (task32.foto == 7) {
            var name = "abuela"
          }
          else if (task32.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task32.numerosA.toString().length
          if (punto < 5) {
            var resultado = task32.numerosA + " pts"
          } else if (punto >= 5) {
            var uno = task32.numerosA.toString().substring(0, 2)
            var dos = task32.numerosA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
          tasksContainer32.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task32.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            r = r + 1
          s = 1
        }

      }
      else if (s == 1) {
        var puest1 = r
        if (task32.foto == 0) {
          var name = "nina"
        } else if (task32.foto == 1) {
          var name = "nino"
        }
        else if (task32.foto == 2) {
          var name = "jovena"
        }
        else if (task32.foto == 3) {
          var name = "joveno"
        }

        else if (task32.foto == 4) {
          var name = "adulta"
        }
        else if (task32.foto == 5) {
          var name = "adulto"
        }
        else if (task32.foto == 6) {
          var name = "abuelo"
        }
        else if (task32.foto == 7) {
          var name = "abuela"
        }
        else if (task32.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task32.numerosA.toString().length
        if (punto < 5) {
          var resultado = task32.numerosA + " pts"
        } else if (punto >= 5) {
          var uno = task32.numerosA.toString().substring(0, 2)
          var dos = task32.numerosA.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        tasksContainer32.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
    
          <td class=label>${task32.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , r = r + 1
      }

    });
  });
  onGetTasks40((querySnapshot) => {
    tasksContainer40.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task40 = doc.data();
      if (v == 0) {
        if (t == 1) {
          if (task40.foto == 0) {
            var name = "nina"
          } else if (task40.foto == 1) {
            var name = "nino"
          }
          else if (task40.foto == 2) {
            var name = "jovena"
          }
          else if (task40.foto == 3) {
            var name = "joveno"
          }

          else if (task40.foto == 4) {
            var name = "adulta"
          }
          else if (task40.foto == 5) {
            var name = "adulto"
          }
          else if (task40.foto == 6) {
            var name = "abuelo"
          }
          else if (task40.foto == 7) {
            var name = "abuela"
          }
          else if (task40.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task40.minsim.toString().length
          if (punto < 5) {
            var resultado = task40.minsim + " pts"
          } else if (punto >= 5) {
            var uno = task40.minsim.toString().substring(0, 2)
            var dos = task40.minsim.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer40.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task40.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            t = t + 1
        } else if (t == 2) {
          if (task40.foto == 0) {
            var name = "nina"
          } else if (task40.foto == 1) {
            var name = "nino"
          }
          else if (task40.foto == 2) {
            var name = "jovena"
          }
          else if (task40.foto == 3) {
            var name = "joveno"
          }

          else if (task40.foto == 4) {
            var name = "adulta"
          }
          else if (task40.foto == 5) {
            var name = "adulto"
          }
          else if (task40.foto == 6) {
            var name = "abuelo"
          }
          else if (task40.foto == 7) {
            var name = "abuela"
          }
          else if (task40.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task40.minsim.toString().length
          if (punto < 5) {
            var resultado = task40.minsim + " pts"
          } else if (punto >= 5) {
            var uno = task40.minsim.toString().substring(0, 2)
            var dos = task40.minsim.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }


          tasksContainer40.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
            <td class=label>${task40.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            t = t + 1
        } else if (t == 3) {
          if (task40.foto == 0) {
            var name = "nina"
          } else if (task40.foto == 1) {
            var name = "nino"
          }
          else if (task40.foto == 2) {
            var name = "jovena"
          }
          else if (task40.foto == 3) {
            var name = "joveno"
          }

          else if (task40.foto == 4) {
            var name = "adulta"
          }
          else if (task40.foto == 5) {
            var name = "adulto"
          }
          else if (task40.foto == 6) {
            var name = "abuelo"
          }
          else if (task40.foto == 7) {
            var name = "abuela"
          }
          else if (task40.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task40.minsim.toString().length
          if (punto < 5) {
            var resultado = task40.minsim + " pts"
          } else if (punto >= 5) {
            var uno = task40.minsim.toString().substring(0, 2)
            var dos = task40.minsim.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }


          tasksContainer40.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task40.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            t = t + 1
          v = 1
        }

      }
      else if (v == 1) {
        var puest1 = t
        if (task40.foto == 0) {
          var name = "nina"
        } else if (task40.foto == 1) {
          var name = "nino"
        }
        else if (task40.foto == 2) {
          var name = "jovena"
        }
        else if (task40.foto == 3) {
          var name = "joveno"
        }

        else if (task40.foto == 4) {
          var name = "adulta"
        }
        else if (task40.foto == 5) {
          var name = "adulto"
        }
        else if (task40.foto == 6) {
          var name = "abuelo"
        }
        else if (task40.foto == 7) {
          var name = "abuela"
        }
        else if (task40.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task40.minsim.toString().length
        if (punto < 5) {
          var resultado = task40.minsim + " pts"
        } else if (punto >= 5) {
          var uno = task40.minsim.toString().substring(0, 2)
          var dos = task40.minsim.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }

        tasksContainer40.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>

          <td class=label>${task40.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , t = t + 1
      }

    });
  });
  onGetTasks41((querySnapshot) => {
    tasksContainer41.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task41 = doc.data();

      if (x == 0) {
        if (w == 1) {
          if (task41.foto == 0) {
            var name = "nina"
          } else if (task41.foto == 1) {
            var name = "nino"
          }
          else if (task41.foto == 2) {
            var name = "jovena"
          }
          else if (task41.foto == 3) {
            var name = "joveno"
          }

          else if (task41.foto == 4) {
            var name = "adulta"
          }
          else if (task41.foto == 5) {
            var name = "adulto"
          }
          else if (task41.foto == 6) {
            var name = "abuelo"
          }
          else if (task41.foto == 7) {
            var name = "abuela"
          }
          else if (task41.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task41.maynum.toString().length
          if (punto < 5) {
            var resultado = task41.maynum + " pts"
          } else if (punto >= 5) {
            var uno = task41.maynum.toString().substring(0, 2)
            var dos = task41.maynum.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer41.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
      
            <td class=label>${task41.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            w = w + 1
        } else if (w == 2) {
          if (task41.foto == 0) {
            var name = "nina"
          } else if (task41.foto == 1) {
            var name = "nino"
          }
          else if (task41.foto == 2) {
            var name = "jovena"
          }
          else if (task41.foto == 3) {
            var name = "joveno"
          }

          else if (task41.foto == 4) {
            var name = "adulta"
          }
          else if (task41.foto == 5) {
            var name = "adulto"
          }
          else if (task41.foto == 6) {
            var name = "abuelo"
          }
          else if (task41.foto == 7) {
            var name = "abuela"
          }
          else if (task41.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task41.maynum.toString().length
          if (punto < 5) {
            var resultado = task41.maynum + " pts"
          } else if (punto >= 5) {
            var uno = task41.maynum.toString().substring(0, 2)
            var dos = task41.maynum.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer41.innerHTML += `
            <tr>
            <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
 
            <td class=label>${task41.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            w = w + 1
        } else if (w == 3) {
          if (task41.foto == 0) {
            var name = "nina"
          } else if (task41.foto == 1) {
            var name = "nino"
          }
          else if (task41.foto == 2) {
            var name = "jovena"
          }
          else if (task41.foto == 3) {
            var name = "joveno"
          }

          else if (task41.foto == 4) {
            var name = "adulta"
          }
          else if (task41.foto == 5) {
            var name = "adulto"
          }
          else if (task41.foto == 6) {
            var name = "abuelo"
          }
          else if (task41.foto == 7) {
            var name = "abuela"
          }
          else if (task41.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task41.maynum.toString().length
          if (punto < 5) {
            var resultado = task41.maynum + " pts"
          } else if (punto >= 5) {
            var uno = task41.maynum.toString().substring(0, 2)
            var dos = task41.maynum.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }

          tasksContainer41.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>

            <td class=label>${task41.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
            w = w + 1
          x = 1
        }

      }
      else if (x == 1) {
        var puest1 = w
        if (task41.foto == 0) {
          var name = "nina"
        } else if (task41.foto == 1) {
          var name = "nino"
        }
        else if (task41.foto == 2) {
          var name = "jovena"
        }
        else if (task41.foto == 3) {
          var name = "joveno"
        }

        else if (task41.foto == 4) {
          var name = "adulta"
        }
        else if (task41.foto == 5) {
          var name = "adulto"
        }
        else if (task41.foto == 6) {
          var name = "abuelo"
        }
        else if (task41.foto == 7) {
          var name = "abuela"
        }
        else if (task41.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task41.maynum.toString().length
        if (punto < 5) {
          var resultado = task41.maynum + " pts"
        } else if (punto >= 5) {
          var uno = task41.maynum.toString().substring(0, 2)
          var dos = task41.maynum.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }

        tasksContainer41.innerHTML += `
      
          <tr>
          <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>

          <td class=label>${task41.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , w = w + 1
      }

    });
  });
});
/*-----Metodos buscar y restablecer de records------*/

function buscar1() {
    const db = firebase.firestore();
    var inputValue = document.getElementById("buscar").value;
    const tasksContainer10 = document.getElementById("resultado");
    var c = 0;
    var d = 1;
    if(inputValue != ""){
      db.collection("Records").where("correo", "==", inputValue).onSnapshot((querySnapshot) => {
        tasksContainer10.innerHTML = "";
        document.getElementById("buscar").value = "";
        querySnapshot.forEach((doc) => {
          const task2 = doc.data();
          if (c == 0) {
            if (d == 1) {
              if (task2.foto == 0) {
                var name = "nina"
              } else if (task2.foto == 1) {
                var name = "nino"
              }
              else if (task2.foto == 2) {
                var name = "jovena"
              }
              else if (task2.foto == 3) {
                var name = "joveno"
              }
    
              else if (task2.foto == 4) {
                var name = "adulta"
              }
              else if (task2.foto == 5) {
                var name = "adulto"
              }
              else if (task2.foto == 6) {
                var name = "abuelo"
              }
              else if (task2.foto == 7) {
                var name = "abuela"
              }
              else if (task2.foto == 8) {
                var name = 'indefinido'
              }
              var punto = task2.puntaje.toString().length
              if (punto < 5) {
                var resultado = task2.puntaje + " pts"
              } else if (punto >= 5) {
                var uno = task2.puntaje.toString().substring(0, 2)
                var dos = task2.puntaje.toString().substring(2, 3)
                var resultado = uno + "." + dos + " k pts"
              }
    
              tasksContainer10.innerHTML += `
              <tr>
              <td class=label><img src="img/logopa1.png" width="25%"><img src="img/${name}.png" width="25%"></td>
       
              <td class=label>${task2.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
                d = d + 1
            } else if (d == 2) {
              if (task2.foto == 0) {
                var name = "nina"
              } else if (task2.foto == 1) {
                var name = "nino"
              }
              else if (task2.foto == 2) {
                var name = "jovena"
              }
              else if (task2.foto == 3) {
                var name = "joveno"
              }
    
              else if (task2.foto == 4) {
                var name = "adulta"
              }
              else if (task2.foto == 5) {
                var name = "adulto"
              }
              else if (task2.foto == 6) {
                var name = "abuelo"
              }
              else if (task2.foto == 7) {
                var name = "abuela"
              }
              else if (task2.foto == 8) {
                var name = 'indefinido'
              }
              var punto = task2.puntaje.toString().length
              if (punto < 5) {
                var resultado = task2.puntaje + " pts"
              } else if (punto >= 5) {
                var uno = task2.puntaje.toString().substring(0, 2)
                var dos = task2.puntaje.toString().substring(2, 3)
                var resultado = uno + "." + dos + " k pts"
              }
    
              tasksContainer10.innerHTML += `
              <tr>
              <td class=label><img src="img/logopa1.png" width="25%"><img src="img/${name}.png" width="25%"  ></td>
         
              <td class=label>${task2.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
                d = d + 1
            } else if (d == 3) {
              if (task2.foto == 0) {
                var name = "nina"
              } else if (task2.foto == 1) {
                var name = "nino"
              }
              else if (task2.foto == 2) {
                var name = "jovena"
              }
              else if (task2.foto == 3) {
                var name = "joveno"
              }
    
              else if (task2.foto == 4) {
                var name = "adulta"
              }
              else if (task2.foto == 5) {
                var name = "adulto"
              }
              else if (task2.foto == 6) {
                var name = "abuelo"
              }
              else if (task2.foto == 7) {
                var name = "abuela"
              }
              else if (task2.foto == 8) {
                var name = 'indefinido'
              }
              var punto = task2.puntaje.toString().length
              if (punto < 5) {
                var resultado = task2.puntaje + " pts"
              } else if (punto >= 5) {
                var uno = task2.puntaje.toString().substring(0, 2)
                var dos = task2.puntaje.toString().substring(2, 3)
                var resultado = uno + "." + dos + " k pts"
              }
    
              tasksContainer10.innerHTML += `
              <tr>
              <td class=label><img src="img/logopa1.png" width="25%"><img src="img/${name}.png" width="25%"></td>
      
              <td class=label>${task2.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
                d = d + 1
              c = 1
            }
    
          }
          else if (c == 1) {
            var puest1 = d
        
    
            if (task2.foto == 0) {
              var name = "nina"
            } else if (task2.foto == 1) {
              var name = "nino"
            }
            else if (task2.foto == 2) {
              var name = "jovena"
            }
            else if (task2.foto == 3) {
              var name = "joveno"
            }
    
            else if (task2.foto == 4) {
              var name = "adulta"
            }
            else if (task2.foto == 5) {
              var name = "adulto"
            }
            else if (task2.foto == 6) {
              var name = "abuelo"
            }
            else if (task2.foto == 7) {
              var name = "abuela"
            }
            else if (task2.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task2.puntaje.toString().length
            if (punto < 5) {
              var resultado = task2.puntaje + " pts"
            } else if (punto >= 5) {
              var uno = task2.puntaje.toString().substring(0, 2)
              var dos = task2.puntaje.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
            tasksContainer10.innerHTML += `
        
            <tr>
            <td class=label><img src="img/logopa1.png" width="25%"><img src="img/${name}.png" width="25%"></td>
            <td class=label>${task2.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , d = d + 1
          }
    
        });
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
    
        Toast.fire({
          icon: 'error',
    
          title: 'El correo no existe'
    
        })
        reset1();
      });
    }
    else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
  
      Toast.fire({
        icon: 'error',
  
        title: 'Ingrese un correo para buscar'
  
      })
    }
  }
  
  function reset1() {
    const db = firebase.firestore();
    const tasksContainer11 = document.getElementById("resultado");
    var c = 0;
    var d = 1;
    db.collection("Records").orderBy("puntaje", "desc").onSnapshot((querySnapshot) => {
      tasksContainer11.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task2 = doc.data();
        if (c == 0) {
          if (d == 1) {
            if (task2.foto == 0) {
              var name = "nina"
            } else if (task2.foto == 1) {
              var name = "nino"
            }
            else if (task2.foto == 2) {
              var name = "jovena"
            }
            else if (task2.foto == 3) {
              var name = "joveno"
            }
  
            else if (task2.foto == 4) {
              var name = "adulta"
            }
            else if (task2.foto == 5) {
              var name = "adulto"
            }
            else if (task2.foto == 6) {
              var name = "abuelo"
            }
            else if (task2.foto == 7) {
              var name = "abuela"
            }
            else if (task2.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task2.puntaje.toString().length
            if (punto < 5) {
              var resultado = task2.puntaje + " pts"
            } else if (punto >= 5) {
              var uno = task2.puntaje.toString().substring(0, 2)
              var dos = task2.puntaje.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer11.innerHTML += `
            <tr>
            <td class=label><img src="img/prime.png" width="25%"  ><img src="img/${name}.png" width="25%"  ></td>
  
            <td class=label>${task2.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
              d = d + 1
          } else if (d == 2) {
            if (task2.foto == 0) {
              var name = "nina"
            } else if (task2.foto == 1) {
              var name = "nino"
            }
            else if (task2.foto == 2) {
              var name = "jovena"
            }
            else if (task2.foto == 3) {
              var name = "joveno"
            }
  
            else if (task2.foto == 4) {
              var name = "adulta"
            }
            else if (task2.foto == 5) {
              var name = "adulto"
            }
            else if (task2.foto == 6) {
              var name = "abuelo"
            }
            else if (task2.foto == 7) {
              var name = "abuela"
            }
            else if (task2.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task2.puntaje.toString().length
            if (punto < 5) {
              var resultado = task2.puntaje + " pts"
            } else if (punto >= 5) {
              var uno = task2.puntaje.toString().substring(0, 2)
              var dos = task2.puntaje.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer11.innerHTML += `
            <tr>
             <td class=label><img src="img/segu.png" width="25%"  ><img src="img/${name}.png" width="25%"  ></td>
  
            <td class=label>${task2.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
              d = d + 1
          } else if (d == 3) {
            if (task2.foto == 0) {
              var name = "nina"
            } else if (task2.foto == 1) {
              var name = "nino"
            }
            else if (task2.foto == 2) {
              var name = "jovena"
            }
            else if (task2.foto == 3) {
              var name = "joveno"
            }
  
            else if (task2.foto == 4) {
              var name = "adulta"
            }
            else if (task2.foto == 5) {
              var name = "adulto"
            }
            else if (task2.foto == 6) {
              var name = "abuelo"
            }
            else if (task2.foto == 7) {
              var name = "abuela"
            }
            else if (task2.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task2.puntaje.toString().length
            if (punto < 5) {
              var resultado = task2.puntaje + " pts"
            } else if (punto >= 5) {
              var uno = task2.puntaje.toString().substring(0, 2)
              var dos = task2.puntaje.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer11.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="25%"  ><img src="img/${name}.png" width="25%"  ></td>
            <td class=label>${task2.usuario}</td>
            <td class=label>${resultado}</td>
                      </tr>
          `         ,
              d = d + 1
            c = 1
          }
  
        }
        else if (c == 1) {
          var puest1 = d
  
          if (task2.foto == 0) {
            var name = "nina"
          } else if (task2.foto == 1) {
            var name = "nino"
          }
          else if (task2.foto == 2) {
            var name = "jovena"
          }
          else if (task2.foto == 3) {
            var name = "joveno"
          }
  
          else if (task2.foto == 4) {
            var name = "adulta"
          }
          else if (task2.foto == 5) {
            var name = "adulto"
          }
          else if (task2.foto == 6) {
            var name = "abuelo"
          }
          else if (task2.foto == 7) {
            var name = "abuela"
          }
          else if (task2.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task2.puntaje.toString().length
          if (punto < 5) {
            var resultado = task2.puntaje + " pts"
          } else if (punto >= 5) {
            var uno = task2.puntaje.toString().substring(0, 2)
            var dos = task2.puntaje.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
          tasksContainer11.innerHTML += `
      
          <tr>
          <td class=label>${puest1} <img src="img/${name}.png" width="25%"></td>

          <td class=label>${task2.usuario}</td>
          <td class=label>${resultado} </td>
          
            </tr>
  `          , d = d + 1
        }
      });
    });
  }
  function buscar2() {
    const db = firebase.firestore();
    var inputValue = document.getElementById("buscar1").value;
    const tasksContainer20 = document.getElementById("resultado1");
    const tasksContainer21 = document.getElementById("resultado2");
    const tasksContainer22 = document.getElementById("resultado3");
    const tasksContainer23 = document.getElementById("resultado4");
  if(inputValue!=""){
    db.collection("Records").where("correo", "==", inputValue).onSnapshot((querySnapshot) => {
      tasksContainer20.innerHTML = "";
      tasksContainer21.innerHTML = "";
      tasksContainer22.innerHTML = "";
      tasksContainer23.innerHTML = "";
      document.getElementById("buscar1").value = "";
      querySnapshot.forEach((doc) => {
        const task20 = doc.data();
        if (task20.foto == 0) {
          var name = "nina"
        } else if (task20.foto == 1) {
          var name = "nino"
        }
        else if (task20.foto == 2) {
          var name = "jovena"
        }
        else if (task20.foto == 3) {
          var name = "joveno"
        }
  
        else if (task20.foto == 4) {
          var name = "adulta"
        }
        else if (task20.foto == 5) {
          var name = "adulto"
        }
        else if (task20.foto == 6) {
          var name = "abuelo"
        }
        else if (task20.foto == 7) {
          var name = "abuela"
        }
        else if (task20.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task20.minusculas.toString().length
        var punto1 = task20.mayusculas.toString().length
        var punto2 = task20.simbolos.toString().length
        var punto3 = task20.numeros.toString().length
        if (punto < 5) {
          var resultado = task20.minusculas + " pts"
        }
        else if (punto >= 5) {
          var uno = task20.minusculas.toString().substring(0, 2)
          var dos = task20.minusculas.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        if (punto1 < 5) {
          var resultado1 = task20.mayusculas + " pts"
        } else if (punto1 >= 5) {
          var uno1 = task20.mayusculas.toString().substring(0, 2)
          var dos1 = task20.mayusculas.toString().substring(2, 3)
  
          var resultado1 = uno1 + "." + dos1 + " k pts"
        }
  
        if (punto2 < 5) {
          var resultado2 = task20.simbolos + " pts"
        } else if (punto2 >= 5) {
          var uno2 = task20.simbolos.toString().substring(0, 2)
          var dos2 = task20.simbolos.toString().substring(2, 3)
          var resultado2 = uno2 + "." + dos2 + " k pts"
        }
  
        if (punto3 < 5) {
          var resultado3 = task20.numeros + " pts"
        } else if (punto3 >= 5) {
          var uno3 = task20.numeros.toString().substring(0, 2)
          var dos3 = task20.numeros.toString().substring(2, 3)
          var resultado3 = uno3 + "." + dos3 + " k pts"
        }
  
        tasksContainer20.innerHTML += `
              <tr>
              <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
           
              <td class=label>${task20.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `
        tasksContainer21.innerHTML += `
            <tr>
            <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
           
            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado1}</td>
                      </tr>
          `
        tasksContainer22.innerHTML += `
          <tr>
          <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
           
          <td class=label>${task20.usuario}</td>
          <td class=label>${resultado2}</td>
                    </tr>
        `
        tasksContainer23.innerHTML += `
        <tr>
        <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
           
        <td class=label>${task20.usuario}</td>
        <td class=label>${resultado3}</td>
                  </tr>
      `
      });
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  
    Toast.fire({
      icon: 'error',
  
      title: 'El correo no existe'
  
    })
    reset2();
  });
  }
  else{
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
  
    title: 'Ingrese un correo para buscar'
  
  })
  }
  }
  function reset2() {
    const db = firebase.firestore();
    const tasksContainer20 = document.getElementById("resultado1");
    const tasksContainer21 = document.getElementById("resultado2");
    const tasksContainer22 = document.getElementById("resultado3");
    const tasksContainer23 = document.getElementById("resultado4");
    var f = 1;
    var g = 0;
    var h = 1;
    var i = 0;
    var j = 1;
    var k = 0;
    var l = 1;
    var m = 0;
    db.collection("Records").orderBy("minusculas", "desc").onSnapshot((querySnapshot) => {
      tasksContainer20.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const task20 = doc.data();
        
        if (g == 0) {
          if (f == 1) {
            if (task20.foto == 0) {
              var name = "nina"
            } else if (task20.foto == 1) {
              var name = "nino"
            }
            else if (task20.foto == 2) {
              var name = "jovena"
            }
            else if (task20.foto == 3) {
              var name = "joveno"
            }
  
            else if (task20.foto == 4) {
              var name = "adulta"
            }
            else if (task20.foto == 5) {
              var name = "adulto"
            }
            else if (task20.foto == 6) {
              var name = "abuelo"
            }
            else if (task20.foto == 7) {
              var name = "abuela"
            }
            else if (task20.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task20.minusculas.toString().length
            if (punto < 5) {
              var resultado = task20.minusculas + " pts"
            } else if (punto >= 5) {
              var uno = task20.minusculas.toString().substring(0, 2)
              var dos = task20.minusculas.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer20.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
   
              <td class=label>${task20.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              f = f + 1
          } else if (f == 2) {
            if (task20.foto == 0) {
              var name = "nina"
            } else if (task20.foto == 1) {
              var name = "nino"
            }
            else if (task20.foto == 2) {
              var name = "jovena"
            }
            else if (task20.foto == 3) {
              var name = "joveno"
            }
  
            else if (task20.foto == 4) {
              var name = "adulta"
            }
            else if (task20.foto == 5) {
              var name = "adulto"
            }
            else if (task20.foto == 6) {
              var name = "abuelo"
            }
            else if (task20.foto == 7) {
              var name = "abuela"
            }
            else if (task20.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task20.minusculas.toString().length
            if (punto < 5) {
              var resultado1 = task20.minusculas + " pts"
            } else if (punto >= 5) {
              var uno = task20.minusculas.toString().substring(0, 2)
              var dos = task20.minusculas.toString().substring(2, 3)
              var resultado1 = uno + "." + dos + " k pts"
            }
  
            tasksContainer20.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task20.usuario}</td>
              <td class=label>${resultado1}</td>
                        </tr>
            `         ,
              f = f + 1
          } else if (f == 3) {
            if (task20.foto == 0) {
              var name = "nina"
            } else if (task20.foto == 1) {
              var name = "nino"
            }
            else if (task20.foto == 2) {
              var name = "jovena"
            }
            else if (task20.foto == 3) {
              var name = "joveno"
            }
  
            else if (task20.foto == 4) {
              var name = "adulta"
            }
            else if (task20.foto == 5) {
              var name = "adulto"
            }
            else if (task20.foto == 6) {
              var name = "abuelo"
            }
            else if (task20.foto == 7) {
              var name = "abuela"
            }
            else if (task20.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task20.minusculas.toString().length
            if (punto < 5) {
              var resultado2 = task20.minusculas + " pts"
            } else if (punto >= 5) {
              var uno = task20.minusculas.toString().substring(0, 2)
              var dos = task20.pminusculas.toString().substring(2, 3)
              var resultado2 = uno + "." + dos + " k pts"
            }
  
            tasksContainer20.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task20.usuario}</td>
              <td class=label>${resultado2}</td>
                        </tr>
            `         ,
              f = f + 1
            g = 1
          }
  
        }
        else if (g == 1) {
          var puest1 = f
      
          if (task20.foto == 0) {
            var name = "nina"
          } else if (task20.foto == 1) {
            var name = "nino"
          }
          else if (task20.foto == 2) {
            var name = "jovena"
          }
          else if (task20.foto == 3) {
            var name = "joveno"
          }
  
          else if (task20.foto == 4) {
            var name = "adulta"
          }
          else if (task20.foto == 5) {
            var name = "adulto"
          }
          else if (task20.foto == 6) {
            var name = "abuelo"
          }
          else if (task20.foto == 7) {
            var name = "abuela"
          }
          else if (task20.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task20.minusculas.toString().length
          if (punto < 5) {
            var resultado3 = task20.minusculas + " pts"
          } else if (punto >= 5) {
            var uno = task20.minusculas.toString().substring(0, 2)
            var dos = task20.minusculas.toString().substring(2, 3)
            var resultado3 = uno + "." + dos + " k pts"
          }
          tasksContainer20.innerHTML += `
        
            <tr>
            <td class=label>${puest1} <img src="img/${name}.png" width="15%"></td>
            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado3} </td>
            
              </tr>
    `          , f = f + 1
        }
  
      });
    });
    db.collection("Records").orderBy("mayusculas", "desc").onSnapshot((querySnapshot) => {
      tasksContainer21.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task21 = doc.data();
        if (i == 0) {
          if (h == 1) {
            if (task21.foto == 0) {
              var name = "nina"
            } else if (task21.foto == 1) {
              var name = "nino"
            }
            else if (task21.foto == 2) {
              var name = "jovena"
            }
            else if (task21.foto == 3) {
              var name = "joveno"
            }
  
            else if (task21.foto == 4) {
              var name = "adulta"
            }
            else if (task21.foto == 5) {
              var name = "adulto"
            }
            else if (task21.foto == 6) {
              var name = "abuelo"
            }
            else if (task21.foto == 7) {
              var name = "abuela"
            }
            else if (task21.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task21.mayusculas.toString().length
            if (punto < 5) {
              var resultado = task21.mayusculas + " pts"
            } else if (punto >= 5) {
              var uno = task21.mayusculas.toString().substring(0, 2)
              var dos = task21.mayusculas.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer21.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task21.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              h = h + 1
          } else if (h == 2) {
            if (task21.foto == 0) {
              var name = "nina"
            } else if (task21.foto == 1) {
              var name = "nino"
            }
            else if (task21.foto == 2) {
              var name = "jovena"
            }
            else if (task21.foto == 3) {
              var name = "joveno"
            }
  
            else if (task21.foto == 4) {
              var name = "adulta"
            }
            else if (task21.foto == 5) {
              var name = "adulto"
            }
            else if (task21.foto == 6) {
              var name = "abuelo"
            }
            else if (task21.foto == 7) {
              var name = "abuela"
            }
            else if (task21.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task21.mayusculas.toString().length
            if (punto < 5) {
              var resultado = task21.mayusculas + " pts"
            } else if (punto >= 5) {
              var uno = task21.mayusculas.toString().substring(0, 2)
              var dos = task21.mayusculas.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer21.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task21.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              h = h + 1
          } else if (h == 3) {
            if (task21.foto == 0) {
              var name = "nina"
            } else if (task21.foto == 1) {
              var name = "nino"
            }
            else if (task21.foto == 2) {
              var name = "jovena"
            }
            else if (task21.foto == 3) {
              var name = "joveno"
            }
  
            else if (task21.foto == 4) {
              var name = "adulta"
            }
            else if (task21.foto == 5) {
              var name = "adulto"
            }
            else if (task21.foto == 6) {
              var name = "abuelo"
            }
            else if (task21.foto == 7) {
              var name = "abuela"
            }
            else if (task21.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task21.mayusculas.toString().length
            if (punto < 5) {
              var resultado = task21.mayusculas + " pts"
            } else if (punto >= 5) {
              var uno = task21.mayusculas.toString().substring(0, 2)
              var dos = task21.mayusculas.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
  
            tasksContainer21.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task21.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              h = h + 1
            i = 1
          }
  
        }
        else if (i == 1) {
          var puest1 = h
          if (task21.foto == 0) {
            var name = "nina"
          } else if (task21.foto == 1) {
            var name = "nino"
          }
          else if (task21.foto == 2) {
            var name = "jovena"
          }
          else if (task21.foto == 3) {
            var name = "joveno"
          }
  
          else if (task21.foto == 4) {
            var name = "adulta"
          }
          else if (task21.foto == 5) {
            var name = "adulto"
          }
          else if (task21.foto == 6) {
            var name = "abuelo"
          }
          else if (task21.foto == 7) {
            var name = "abuela"
          }
          else if (task21.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task21.mayusculas.toString().length
          if (punto < 5) {
            var resultado = task21.mayusculas + " pts"
          } else if (punto >= 5) {
            var uno = task21.mayusculas.toString().substring(0, 2)
            var dos = task21.mayusculas.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
  
          tasksContainer21.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
            <td class=label>${task21.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , h = h + 1
        }
  
      });
    });
    db.collection("Records").orderBy("simbolos", "desc").onSnapshot((querySnapshot) => {
      tasksContainer22.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const task22 = doc.data();
        if (k == 0) {
          if (j == 1) {
            if (task22.foto == 0) {
              var name = "nina"
            } else if (task22.foto == 1) {
              var name = "nino"
            }
            else if (task22.foto == 2) {
              var name = "jovena"
            }
            else if (task22.foto == 3) {
              var name = "joveno"
            }
  
            else if (task22.foto == 4) {
              var name = "adulta"
            }
            else if (task22.foto == 5) {
              var name = "adulto"
            }
            else if (task22.foto == 6) {
              var name = "abuelo"
            }
            else if (task22.foto == 7) {
              var name = "abuela"
            }
            else if (task22.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task22.simbolos.toString().length
            if (punto < 5) {
              var resultado = task22.simbolos + " pts"
            } else if (punto >= 5) {
              var uno = task22.simbolos.toString().substring(0, 2)
              var dos = task22.simbolos.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer22.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task22.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              j = j + 1
          } else if (j == 2) {
            if (task22.foto == 0) {
              var name = "nina"
            } else if (task22.foto == 1) {
              var name = "nino"
            }
            else if (task22.foto == 2) {
              var name = "jovena"
            }
            else if (task22.foto == 3) {
              var name = "joveno"
            }
  
            else if (task22.foto == 4) {
              var name = "adulta"
            }
            else if (task22.foto == 5) {
              var name = "adulto"
            }
            else if (task22.foto == 6) {
              var name = "abuelo"
            }
            else if (task22.foto == 7) {
              var name = "abuela"
            }
            else if (task22.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task22.simbolos.toString().length
            if (punto < 5) {
              var resultado = task22.simbolos + " pts"
            } else if (punto >= 5) {
              var uno = task22.simbolos.toString().substring(0, 2)
              var dos = task22.simbolos.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer22.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task22.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              j = j + 1
          } else if (j == 3) {
            if (task22.foto == 0) {
              var name = "nina"
            } else if (task22.foto == 1) {
              var name = "nino"
            }
            else if (task22.foto == 2) {
              var name = "jovena"
            }
            else if (task22.foto == 3) {
              var name = "joveno"
            }
  
            else if (task22.foto == 4) {
              var name = "adulta"
            }
            else if (task22.foto == 5) {
              var name = "adulto"
            }
            else if (task22.foto == 6) {
              var name = "abuelo"
            }
            else if (task22.foto == 7) {
              var name = "abuela"
            }
            else if (task22.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task22.simbolos.toString().length
            if (punto < 5) {
              var resultado = task22.simbolos + " pts"
            } else if (punto >= 5) {
              var uno = task22.simbolos.toString().substring(0, 2)
              var dos = task22.simbolos.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
  
            tasksContainer22.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task22.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              j = j + 1
            k = 1
          }
  
        }
        else if (k == 1) {
          var puest1 = j
          if (task22.foto == 0) {
            var name = "nina"
          } else if (task22.foto == 1) {
            var name = "nino"
          }
          else if (task22.foto == 2) {
            var name = "jovena"
          }
          else if (task22.foto == 3) {
            var name = "joveno"
          }
  
          else if (task22.foto == 4) {
            var name = "adulta"
          }
          else if (task22.foto == 5) {
            var name = "adulto"
          }
          else if (task22.foto == 6) {
            var name = "abuelo"
          }
          else if (task22.foto == 7) {
            var name = "abuela"
          }
          else if (task22.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task22.simbolos.toString().length
          if (punto < 5) {
            var resultado = task22.simbolos + " pts"
          } else if (punto >= 5) {
            var uno = task22.simbolos.toString().substring(0, 2)
            var dos = task22.simbolos.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
  
          tasksContainer22.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
  
            <td class=label>${task22.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , j = j + 1
        }
  
      });
    });
    db.collection("Records").orderBy("numeros", "desc").onSnapshot((querySnapshot) => {
      tasksContainer23.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const task23 = doc.data();
        if (m == 0) {
          if (l == 1) {
            if (task23.foto == 0) {
              var name = "nina"
            } else if (task23.foto == 1) {
              var name = "nino"
            }
            else if (task23.foto == 2) {
              var name = "jovena"
            }
            else if (task23.foto == 3) {
              var name = "joveno"
            }
  
            else if (task23.foto == 4) {
              var name = "adulta"
            }
            else if (task23.foto == 5) {
              var name = "adulto"
            }
            else if (task23.foto == 6) {
              var name = "abuelo"
            }
            else if (task23.foto == 7) {
              var name = "abuela"
            }
            else if (task23.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task23.numeros.toString().length
            if (punto < 5) {
              var resultado = task23.numeros + " pts"
            } else if (punto >= 5) {
              var uno = task23.numeros.toString().substring(0, 2)
              var dos = task23.numeros.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer23.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
         
              <td class=label>${task23.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              l = l + 1
          } else if (l == 2) {
            if (task23.foto == 0) {
              var name = "nina"
            } else if (task23.foto == 1) {
              var name = "nino"
            }
            else if (task23.foto == 2) {
              var name = "jovena"
            }
            else if (task23.foto == 3) {
              var name = "joveno"
            }
  
            else if (task23.foto == 4) {
              var name = "adulta"
            }
            else if (task23.foto == 5) {
              var name = "adulto"
            }
            else if (task23.foto == 6) {
              var name = "abuelo"
            }
            else if (task23.foto == 7) {
              var name = "abuela"
            }
            else if (task23.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task23.numeros.toString().length
            if (punto < 5) {
              var resultado = task23.numeros + " pts"
            } else if (punto >= 5) {
              var uno = task23.numeros.toString().substring(0, 2)
              var dos = task23.numeros.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer23.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
    
              <td class=label>${task23.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              l = l + 1
          } else if (l == 3) {
            if (task23.foto == 0) {
              var name = "nina"
            } else if (task23.foto == 1) {
              var name = "nino"
            }
            else if (task23.foto == 2) {
              var name = "jovena"
            }
            else if (task23.foto == 3) {
              var name = "joveno"
            }
  
            else if (task23.foto == 4) {
              var name = "adulta"
            }
            else if (task23.foto == 5) {
              var name = "adulto"
            }
            else if (task23.foto == 6) {
              var name = "abuelo"
            }
            else if (task23.foto == 7) {
              var name = "abuela"
            }
            else if (task23.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task23.numeros.toString().length
            if (punto < 5) {
              var resultado = task23.numeros + " pts"
            } else if (punto >= 5) {
              var uno = task23.numeros.toString().substring(0, 2)
              var dos = task23.numeros.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer23.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
  
              <td class=label>${task23.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              l = l + 1
            m = 1
          }
  
        }
        else if (m == 1) {
          var puest1 = l
          if (task23.foto == 0) {
            var name = "nina"
          } else if (task23.foto == 1) {
            var name = "nino"
          }
          else if (task23.foto == 2) {
            var name = "jovena"
          }
          else if (task23.foto == 3) {
            var name = "joveno"
          }
  
          else if (task23.foto == 4) {
            var name = "adulta"
          }
          else if (task23.foto == 5) {
            var name = "adulto"
          }
          else if (task23.foto == 6) {
            var name = "abuelo"
          }
          else if (task23.foto == 7) {
            var name = "abuela"
          }
          else if (task23.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task23.numeros.toString().length
          if (punto < 5) {
            var resultado = task23.numeros + " pts"
          } else if (punto >= 5) {
            var uno = task23.numeros.toString().substring(0, 2)
            var dos = task23.numeros.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
          tasksContainer23.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"></td>
        
            <td class=label>${task23.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , l = l + 1
        }
  
      });
    });
  }
  function buscar3() {
    const db = firebase.firestore();
    var inputValue = document.getElementById("buscar2").value;
    const tasksContainer30 = document.getElementById("resultado5");
    const tasksContainer31 = document.getElementById("resultado6");
    const tasksContainer32 = document.getElementById("resultado7");
  if(inputValue!=""){
  
    db.collection("Records").where("correo", "==", inputValue).onSnapshot((querySnapshot) => {
      tasksContainer30.innerHTML = "";
      tasksContainer31.innerHTML = "";
      tasksContainer32.innerHTML = "";
      document.getElementById("buscar2").value = "";
      querySnapshot.forEach((doc) => {
        const task20 = doc.data();
        if (task20.foto == 0) {
          var name = "nina"
        } else if (task20.foto == 1) {
          var name = "nino"
        }
        else if (task20.foto == 2) {
          var name = "jovena"
        }
        else if (task20.foto == 3) {
          var name = "joveno"
        }
  
        else if (task20.foto == 4) {
          var name = "adulta"
        }
        else if (task20.foto == 5) {
          var name = "adulto"
        }
        else if (task20.foto == 6) {
          var name = "abuelo"
        }
        else if (task20.foto == 7) {
          var name = "abuela"
        }
        else if (task20.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task20.minsimB.toString().length
        var punto1 = task20.mayusculasA.toString().length
        var punto2 = task20.numerosA.toString().length
        if (punto < 5) {
          var resultado = task20.minsimB + " pts"
        }
        else if (punto >= 5) {
          var uno = task20.minsimB.toString().substring(0, 2)
          var dos = task20.minsimB.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        if (punto1 < 5) {
          var resultado1 = task20.mayusculasA + " pts"
        } else if (punto1 >= 5) {
          var uno1 = task20.mayusculasA.toString().substring(0, 2)
          var dos1 = task20.mayusculasA.toString().substring(2, 3)
  
          var resultado1 = uno1 + "." + dos1 + " k pts"
        }
  
        if (punto2 < 5) {
          var resultado2 = task20.numerosA + " pts"
        } else if (punto2 >= 5) {
          var uno2 = task20.numerosA.toString().substring(0, 2)
          var dos2 = task20.numerosA.toString().substring(2, 3)
          var resultado2 = uno2 + "." + dos2 + " k pts"
        }
  
        tasksContainer30.innerHTML += `
              <tr>
              <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
         
              <td class=label>${task20.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `
        tasksContainer31.innerHTML += `
            <tr>
            <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
    
            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado1}</td>
                      </tr>
          `
        tasksContainer32.innerHTML += `
          <tr>
          <td class=label><img src="img/logopa1.png" width="15%"><img src="img/${name}.png" width="15%"></td>
  
          <td class=label>${task20.usuario}</td>
          <td class=label>${resultado2}</td>
                    </tr>
        `
      });
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  
    Toast.fire({
      icon: 'error',
  
      title: 'El correo no existe'
  
    })
    reset3();
  });
  }
  else{
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
  
    title: 'Ingrese un correo para buscar'
  
  })
  }
  }
  function reset3() {
    const db = firebase.firestore();
    const tasksContainer30 = document.getElementById("resultado5");
    const tasksContainer31 = document.getElementById("resultado6");
    const tasksContainer32 = document.getElementById("resultado7");
    var n = 1;
    var o = 0;
    var p = 1;
    var q = 0;
    var r = 1;
    var s = 0;
    db.collection("Records").orderBy("minsimB", "desc").onSnapshot((querySnapshot) => {
      tasksContainer30.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task30 = doc.data();
        if (o == 0) {
          if (n == 1) {
            if (task30.foto == 0) {
              var name = "nina"
            } else if (task30.foto == 1) {
              var name = "nino"
            }
            else if (task30.foto == 2) {
              var name = "jovena"
            }
            else if (task30.foto == 3) {
              var name = "joveno"
            }
  
            else if (task30.foto == 4) {
              var name = "adulta"
            }
            else if (task30.foto == 5) {
              var name = "adulto"
            }
            else if (task30.foto == 6) {
              var name = "abuelo"
            }
            else if (task30.foto == 7) {
              var name = "abuela"
            }
            else if (task30.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task30.minsimB.toString().length
            if (punto < 5) {
              var resultado = task30.minsimB + " pts"
            } else if (punto >= 5) {
              var uno = task30.minsimB.toString().substring(0, 2)
              var dos = task30.minsimB.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer30.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%" ><img src="img/${name}.png" width="15%" ></td>
              <td class=label>${task30.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              n = n + 1
          } else if (n == 2) {
            if (task30.foto == 0) {
              var name = "nina"
            } else if (task30.foto == 1) {
              var name = "nino"
            }
            else if (task30.foto == 2) {
              var name = "jovena"
            }
            else if (task30.foto == 3) {
              var name = "joveno"
            }
  
            else if (task30.foto == 4) {
              var name = "adulta"
            }
            else if (task30.foto == 5) {
              var name = "adulto"
            }
            else if (task30.foto == 6) {
              var name = "abuelo"
            }
            else if (task30.foto == 7) {
              var name = "abuela"
            }
            else if (task30.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task30.minsimB.toString().length
            if (punto < 5) {
              var resultado1 = task30.minsimB + " pts"
            } else if (punto >= 5) {
              var uno = task30.minsimB.toString().substring(0, 2)
              var dos = task30.minsimB.toString().substring(2, 3)
              var resultado1 = uno + "." + dos + " k pts"
            }
  
            tasksContainer30.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task30.usuario}</td>
              <td class=label>${resultado1}</td>
                        </tr>
            `         ,
              n = n + 1
          } else if (n == 3) {
            if (task30.foto == 0) {
              var name = "nina"
            } else if (task30.foto == 1) {
              var name = "nino"
            }
            else if (task30.foto == 2) {
              var name = "jovena"
            }
            else if (task30.foto == 3) {
              var name = "joveno"
            }
  
            else if (task30.foto == 4) {
              var name = "adulta"
            }
            else if (task30.foto == 5) {
              var name = "adulto"
            }
            else if (task30.foto == 6) {
              var name = "abuelo"
            }
            else if (task30.foto == 7) {
              var name = "abuela"
            }
            else if (task30.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task30.minsimB.toString().length
            if (punto < 5) {
              var resultado2 = task30.minsimB + " pts"
            } else if (punto >= 5) {
              var uno = task30.minsimB.toString().substring(0, 2)
              var dos = task30.minsimB.toString().substring(2, 3)
              var resultado2 = uno + "." + dos + " k pts"
            }
  
            tasksContainer30.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
           <td class=label>${task30.usuario}</td>
              <td class=label>${resultado2}</td>
                        </tr>
            `         ,
              n = n + 1
            o = 1
          }
  
        }
        else if (o == 1) {
          var puest1 = n
          if (task30.foto == 0) {
            var name = "nina"
          } else if (task30.foto == 1) {
            var name = "nino"
          }
          else if (task30.foto == 2) {
            var name = "jovena"
          }
          else if (task30.foto == 3) {
            var name = "joveno"
          }
  
          else if (task30.foto == 4) {
            var name = "adulta"
          }
          else if (task30.foto == 5) {
            var name = "adulto"
          }
          else if (task30.foto == 6) {
            var name = "abuelo"
          }
          else if (task30.foto == 7) {
            var name = "abuela"
          }
          else if (task30.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task30.minsimB.toString().length
          if (punto < 5) {
            var resultado3 = task30.minsimB + " pts"
          } else if (punto >= 5) {
            var uno = task30.minsimB.toString().substring(0, 2)
            var dos = task30.minsimB.toString().substring(2, 3)
            var resultado3 = uno + "." + dos + " k pts"
          }
          tasksContainer30.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
  
            <td class=label>${task30.usuario}</td>
            <td class=label>${resultado3} </td>
            
              </tr>
    `          , n = n + 1
        }
  
      });
    });
    db.collection("Records").orderBy("mayusculasA", "desc").onSnapshot((querySnapshot) => {
      tasksContainer31.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task31 = doc.data();
        if (q == 0) {
          if (p == 1) {
            if (task31.foto == 0) {
              var name = "nina"
            } else if (task31.foto == 1) {
              var name = "nino"
            }
            else if (task31.foto == 2) {
              var name = "jovena"
            }
            else if (task31.foto == 3) {
              var name = "joveno"
            }
  
            else if (task31.foto == 4) {
              var name = "adulta"
            }
            else if (task31.foto == 5) {
              var name = "adulto"
            }
            else if (task31.foto == 6) {
              var name = "abuelo"
            }
            else if (task31.foto == 7) {
              var name = "abuela"
            }
            else if (task31.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task31.mayusculasA.toString().length
            if (punto < 5) {
              var resultado = task31.mayusculasA + " pts"
            } else if (punto >= 5) {
              var uno = task31.mayusculasA.toString().substring(0, 2)
              var dos = task31.mayusculasA.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer31.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
    
              <td class=label>${task31.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              p = p + 1
          } else if (p == 2) {
            if (task31.foto == 0) {
              var name = "nina"
            } else if (task31.foto == 1) {
              var name = "nino"
            }
            else if (task31.foto == 2) {
              var name = "jovena"
            }
            else if (task31.foto == 3) {
              var name = "joveno"
            }
  
            else if (task31.foto == 4) {
              var name = "adulta"
            }
            else if (task31.foto == 5) {
              var name = "adulto"
            }
            else if (task31.foto == 6) {
              var name = "abuelo"
            }
            else if (task31.foto == 7) {
              var name = "abuela"
            }
            else if (task31.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task31.mayusculasA.toString().length
            if (punto < 5) {
              var resultado = task31.mayusculasA + " pts"
            } else if (punto >= 5) {
              var uno = task31.mayusculasA.toString().substring(0, 2)
              var dos = task31.mayusculasA.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
  
            tasksContainer31.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task31.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              p = p + 1
          } else if (p == 3) {
            if (task31.foto == 0) {
              var name = "nina"
            } else if (task31.foto == 1) {
              var name = "nino"
            }
            else if (task31.foto == 2) {
              var name = "jovena"
            }
            else if (task31.foto == 3) {
              var name = "joveno"
            }
  
            else if (task31.foto == 4) {
              var name = "adulta"
            }
            else if (task31.foto == 5) {
              var name = "adulto"
            }
            else if (task31.foto == 6) {
              var name = "abuelo"
            }
            else if (task31.foto == 7) {
              var name = "abuela"
            }
            else if (task31.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task31.mayusculasA.toString().length
            if (punto < 5) {
              var resultado = task31.mayusculasA + " pts"
            } else if (punto >= 5) {
              var uno = task31.mayusculasA.toString().substring(0, 2)
              var dos = task31.mayusculasA.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer31.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task31.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              p = p + 1
            q = 1
          }
  
        }
        else if (q == 1) {
          var puest1 = p
          if (task31.foto == 0) {
            var name = "nina"
          } else if (task31.foto == 1) {
            var name = "nino"
          }
          else if (task31.foto == 2) {
            var name = "jovena"
          }
          else if (task31.foto == 3) {
            var name = "joveno"
          }
  
          else if (task31.foto == 4) {
            var name = "adulta"
          }
          else if (task31.foto == 5) {
            var name = "adulto"
          }
          else if (task31.foto == 6) {
            var name = "abuelo"
          }
          else if (task31.foto == 7) {
            var name = "abuela"
          }
          else if (task31.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task31.mayusculasA.toString().length
          if (punto < 5) {
            var resultado = task31.mayusculasA + " pts"
          } else if (punto >= 5) {
            var uno = task31.mayusculasA.toString().substring(0, 2)
            var dos = task31.mayusculasA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
  
          tasksContainer31.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
            <td class=label>${task31.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , p = p + 1
        }
  
      });
    });
    db.collection("Records").orderBy("numerosA", "desc").onSnapshot((querySnapshot) => {
      tasksContainer32.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task32 = doc.data();
        if (s == 0) {
          if (r == 1) {
            if (task32.foto == 0) {
              var name = "nina"
            } else if (task32.foto == 1) {
              var name = "nino"
            }
            else if (task32.foto == 2) {
              var name = "jovena"
            }
            else if (task32.foto == 3) {
              var name = "joveno"
            }
  
            else if (task32.foto == 4) {
              var name = "adulta"
            }
            else if (task32.foto == 5) {
              var name = "adulto"
            }
            else if (task32.foto == 6) {
              var name = "abuelo"
            }
            else if (task32.foto == 7) {
              var name = "abuela"
            }
            else if (task32.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task32.numerosA.toString().length
            if (punto < 5) {
              var resultado = task32.numerosA + " pts"
            } else if (punto >= 5) {
              var uno = task32.numerosA.toString().substring(0, 2)
              var dos = task32.numerosA.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer32.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
     
              <td class=label>${task32.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              r = r + 1
          } else if (r == 2) {
            if (task32.foto == 0) {
              var name = "nina"
            } else if (task32.foto == 1) {
              var name = "nino"
            }
            else if (task32.foto == 2) {
              var name = "jovena"
            }
            else if (task32.foto == 3) {
              var name = "joveno"
            }
  
            else if (task32.foto == 4) {
              var name = "adulta"
            }
            else if (task32.foto == 5) {
              var name = "adulto"
            }
            else if (task32.foto == 6) {
              var name = "abuelo"
            }
            else if (task32.foto == 7) {
              var name = "abuela"
            }
            else if (task32.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task32.numerosA.toString().length
            if (punto < 5) {
              var resultado = task32.numerosA + " pts"
            } else if (punto >= 5) {
              var uno = task32.numerosA.toString().substring(0, 2)
              var dos = task32.numerosA.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer32.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task32.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              r = r + 1
          } else if (r == 3) {
            if (task32.foto == 0) {
              var name = "nina"
            } else if (task32.foto == 1) {
              var name = "nino"
            }
            else if (task32.foto == 2) {
              var name = "jovena"
            }
            else if (task32.foto == 3) {
              var name = "joveno"
            }
  
            else if (task32.foto == 4) {
              var name = "adulta"
            }
            else if (task32.foto == 5) {
              var name = "adulto"
            }
            else if (task32.foto == 6) {
              var name = "abuelo"
            }
            else if (task32.foto == 7) {
              var name = "abuela"
            }
            else if (task32.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task32.numerosA.toString().length
            if (punto < 5) {
              var resultado = task32.numerosA + " pts"
            } else if (punto >= 5) {
              var uno = task32.numerosA.toString().substring(0, 2)
              var dos = task32.numerosA.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
            tasksContainer32.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task32.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              r = r + 1
            s = 1
          }
  
        }
        else if (s == 1) {
          var puest1 = r
          if (task32.foto == 0) {
            var name = "nina"
          } else if (task32.foto == 1) {
            var name = "nino"
          }
          else if (task32.foto == 2) {
            var name = "jovena"
          }
          else if (task32.foto == 3) {
            var name = "joveno"
          }
  
          else if (task32.foto == 4) {
            var name = "adulta"
          }
          else if (task32.foto == 5) {
            var name = "adulto"
          }
          else if (task32.foto == 6) {
            var name = "abuelo"
          }
          else if (task32.foto == 7) {
            var name = "abuela"
          }
          else if (task32.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task32.numerosA.toString().length
          if (punto < 5) {
            var resultado = task32.numerosA + " pts"
          } else if (punto >= 5) {
            var uno = task32.numerosA.toString().substring(0, 2)
            var dos = task32.numerosA.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
          tasksContainer32.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
            <td class=label>${task32.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , r = r + 1
        }
  
      });
    });
  }
  function buscar4() {
    const db = firebase.firestore();
    var inputValue = document.getElementById("buscar3").value;
    const tasksContainer40 = document.getElementById("resultado8");
    const tasksContainer41 = document.getElementById("resultado9");
  if(inputValue!=""){
    db.collection("Records").where("correo", "==", inputValue).onSnapshot((querySnapshot) => {
      tasksContainer40.innerHTML = "";
      tasksContainer41.innerHTML = "";
      document.getElementById("buscar3").value = "";
      querySnapshot.forEach((doc) => {
        const task20 = doc.data();
        if (task20.foto == 0) {
          var name = "nina"
        } else if (task20.foto == 1) {
          var name = "nino"
        }
        else if (task20.foto == 2) {
          var name = "jovena"
        }
        else if (task20.foto == 3) {
          var name = "joveno"
        }
  
        else if (task20.foto == 4) {
          var name = "adulta"
        }
        else if (task20.foto == 5) {
          var name = "adulto"
        }
        else if (task20.foto == 6) {
          var name = "abuelo"
        }
        else if (task20.foto == 7) {
          var name = "abuela"
        }
        else if (task20.foto == 8) {
          var name = 'indefinido'
        }
        var punto = task20.minsim.toString().length
        var punto1 = task20.maynum.toString().length
        if (punto < 5) {
          var resultado = task20.minsim + " pts"
        }
        else if (punto >= 5) {
          var uno = task20.minsim.toString().substring(0, 2)
          var dos = task20.minsim.toString().substring(2, 3)
          var resultado = uno + "." + dos + " k pts"
        }
        if (punto1 < 5) {
          var resultado1 = task20.maynum + " pts"
        } else if (punto1 >= 5) {
          var uno1 = task20.maynum.toString().substring(0, 2)
          var dos1 = task20.maynum.toString().substring(2, 3)
  
          var resultado1 = uno1 + "." + dos1 + " k pts"
        }
  
  
        tasksContainer40.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"><img src="img/${name}.png" width="15%"  ></td>
  
              <td class=label>${task20.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `
        tasksContainer41.innerHTML += `
            <tr>
            <td class=label><img src="img/terc.png" width="15%"><img src="img/${name}.png" width="15%"  ></td>
            <td class=label>${task20.usuario}</td>
            <td class=label>${resultado1}</td>
                      </tr>
          `
      });
  
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  
    Toast.fire({
      icon: 'error',
  
      title: 'El correo no existe'
  
    })
    reset4();
  });
  }
  else{
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
  
    title: 'Ingrese un correo para buscar'
  
  })
  }
  }
  function reset4() {
    const db = firebase.firestore();
    const tasksContainer40 = document.getElementById("resultado8");
    const tasksContainer41 = document.getElementById("resultado9");
    var t = 1;
    var v = 0;
    var w = 1;
    var x = 0;
    db.collection("Records").orderBy("minsim", "desc").onSnapshot((querySnapshot) => {
      tasksContainer40.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task40 = doc.data();
        if (v == 0) {
          if (t == 1) {
            if (task40.foto == 0) {
              var name = "nina"
            } else if (task40.foto == 1) {
              var name = "nino"
            }
            else if (task40.foto == 2) {
              var name = "jovena"
            }
            else if (task40.foto == 3) {
              var name = "joveno"
            }
  
            else if (task40.foto == 4) {
              var name = "adulta"
            }
            else if (task40.foto == 5) {
              var name = "adulto"
            }
            else if (task40.foto == 6) {
              var name = "abuelo"
            }
            else if (task40.foto == 7) {
              var name = "abuela"
            }
            else if (task40.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task40.minsim.toString().length
            if (punto < 5) {
              var resultado = task40.minsim + " pts"
            } else if (punto >= 5) {
              var uno = task40.minsim.toString().substring(0, 2)
              var dos = task40.minsim.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer40.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task40.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              t = t + 1
          } else if (t == 2) {
            if (task40.foto == 0) {
              var name = "nina"
            } else if (task40.foto == 1) {
              var name = "nino"
            }
            else if (task40.foto == 2) {
              var name = "jovena"
            }
            else if (task40.foto == 3) {
              var name = "joveno"
            }
  
            else if (task40.foto == 4) {
              var name = "adulta"
            }
            else if (task40.foto == 5) {
              var name = "adulto"
            }
            else if (task40.foto == 6) {
              var name = "abuelo"
            }
            else if (task40.foto == 7) {
              var name = "abuela"
            }
            else if (task40.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task40.minsim.toString().length
            if (punto < 5) {
              var resultado = task40.minsim + " pts"
            } else if (punto >= 5) {
              var uno = task40.minsim.toString().substring(0, 2)
              var dos = task40.minsim.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
  
            tasksContainer40.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
            <td class=label>${task40.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              t = t + 1
          } else if (t == 3) {
            if (task40.foto == 0) {
              var name = "nina"
            } else if (task40.foto == 1) {
              var name = "nino"
            }
            else if (task40.foto == 2) {
              var name = "jovena"
            }
            else if (task40.foto == 3) {
              var name = "joveno"
            }
  
            else if (task40.foto == 4) {
              var name = "adulta"
            }
            else if (task40.foto == 5) {
              var name = "adulto"
            }
            else if (task40.foto == 6) {
              var name = "abuelo"
            }
            else if (task40.foto == 7) {
              var name = "abuela"
            }
            else if (task40.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task40.minsim.toString().length
            if (punto < 5) {
              var resultado = task40.minsim + " pts"
            } else if (punto >= 5) {
              var uno = task40.minsim.toString().substring(0, 2)
              var dos = task40.minsim.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
  
            tasksContainer40.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
              <td class=label>${task40.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              t = t + 1
            v = 1
          }
  
        }
        else if (v == 1) {
          var puest1 = t
          if (task40.foto == 0) {
            var name = "nina"
          } else if (task40.foto == 1) {
            var name = "nino"
          }
          else if (task40.foto == 2) {
            var name = "jovena"
          }
          else if (task40.foto == 3) {
            var name = "joveno"
          }
  
          else if (task40.foto == 4) {
            var name = "adulta"
          }
          else if (task40.foto == 5) {
            var name = "adulto"
          }
          else if (task40.foto == 6) {
            var name = "abuelo"
          }
          else if (task40.foto == 7) {
            var name = "abuela"
          }
          else if (task40.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task40.minsim.toString().length
          if (punto < 5) {
            var resultado = task40.minsim + " pts"
          } else if (punto >= 5) {
            var uno = task40.minsim.toString().substring(0, 2)
            var dos = task40.minsim.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
  
          tasksContainer40.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
  
            <td class=label>${task40.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , t = t + 1
        }
  
      });
    });
    db.collection("Records").orderBy("maynum", "desc").onSnapshot((querySnapshot) => {
      tasksContainer41.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task41 = doc.data();
  
        if (x == 0) {
          if (w == 1) {
            if (task41.foto == 0) {
              var name = "nina"
            } else if (task41.foto == 1) {
              var name = "nino"
            }
            else if (task41.foto == 2) {
              var name = "jovena"
            }
            else if (task41.foto == 3) {
              var name = "joveno"
            }
  
            else if (task41.foto == 4) {
              var name = "adulta"
            }
            else if (task41.foto == 5) {
              var name = "adulto"
            }
            else if (task41.foto == 6) {
              var name = "abuelo"
            }
            else if (task41.foto == 7) {
              var name = "abuela"
            }
            else if (task41.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task41.maynum.toString().length
            if (punto < 5) {
              var resultado = task41.maynum + " pts"
            } else if (punto >= 5) {
              var uno = task41.maynum.toString().substring(0, 2)
              var dos = task41.maynum.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer41.innerHTML += `
              <tr>
              <td class=label><img src="img/prime.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
  
              <td class=label>${task41.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              w = w + 1
          } else if (w == 2) {
            if (task41.foto == 0) {
              var name = "nina"
            } else if (task41.foto == 1) {
              var name = "nino"
            }
            else if (task41.foto == 2) {
              var name = "jovena"
            }
            else if (task41.foto == 3) {
              var name = "joveno"
            }
  
            else if (task41.foto == 4) {
              var name = "adulta"
            }
            else if (task41.foto == 5) {
              var name = "adulto"
            }
            else if (task41.foto == 6) {
              var name = "abuelo"
            }
            else if (task41.foto == 7) {
              var name = "abuela"
            }
            else if (task41.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task41.maynum.toString().length
            if (punto < 5) {
              var resultado = task41.maynum + " pts"
            } else if (punto >= 5) {
              var uno = task41.maynum.toString().substring(0, 2)
              var dos = task41.maynum.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer41.innerHTML += `
              <tr>
              <td class=label><img src="img/segu.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
   
              <td class=label>${task41.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              w = w + 1
          } else if (w == 3) {
            if (task41.foto == 0) {
              var name = "nina"
            } else if (task41.foto == 1) {
              var name = "nino"
            }
            else if (task41.foto == 2) {
              var name = "jovena"
            }
            else if (task41.foto == 3) {
              var name = "joveno"
            }
  
            else if (task41.foto == 4) {
              var name = "adulta"
            }
            else if (task41.foto == 5) {
              var name = "adulto"
            }
            else if (task41.foto == 6) {
              var name = "abuelo"
            }
            else if (task41.foto == 7) {
              var name = "abuela"
            }
            else if (task41.foto == 8) {
              var name = 'indefinido'
            }
            var punto = task41.maynum.toString().length
            if (punto < 5) {
              var resultado = task41.maynum + " pts"
            } else if (punto >= 5) {
              var uno = task41.maynum.toString().substring(0, 2)
              var dos = task41.maynum.toString().substring(2, 3)
              var resultado = uno + "." + dos + " k pts"
            }
  
            tasksContainer41.innerHTML += `
              <tr>
              <td class=label><img src="img/terc.png" width="15%"  ><img src="img/${name}.png" width="15%"  ></td>
   
              <td class=label>${task41.usuario}</td>
              <td class=label>${resultado}</td>
                        </tr>
            `         ,
              w = w + 1
            x = 1
          }
  
        }
        else if (x == 1) {
          var puest1 = w
          if (task41.foto == 0) {
            var name = "nina"
          } else if (task41.foto == 1) {
            var name = "nino"
          }
          else if (task41.foto == 2) {
            var name = "jovena"
          }
          else if (task41.foto == 3) {
            var name = "joveno"
          }
  
          else if (task41.foto == 4) {
            var name = "adulta"
          }
          else if (task41.foto == 5) {
            var name = "adulto"
          }
          else if (task41.foto == 6) {
            var name = "abuelo"
          }
          else if (task41.foto == 7) {
            var name = "abuela"
          }
          else if (task41.foto == 8) {
            var name = 'indefinido'
          }
          var punto = task41.maynum.toString().length
          if (punto < 5) {
            var resultado = task41.maynum + " pts"
          } else if (punto >= 5) {
            var uno = task41.maynum.toString().substring(0, 2)
            var dos = task41.maynum.toString().substring(2, 3)
            var resultado = uno + "." + dos + " k pts"
          }
  
          tasksContainer41.innerHTML += `
        
            <tr>
            <td class=label>${puest1}<img src="img/${name}.png" width="15%"  ></td>
  
            <td class=label>${task41.usuario}</td>
            <td class=label>${resultado} </td>
            
              </tr>
    `          , w = w + 1
        }
  
      });
    });
  }
  
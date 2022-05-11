// const wrapper = document.querySelector('.wrapper')


// const createHeader = () => {
//     return `
//    <header class ="header">
//      <h1>Trainerz</h1>
//      <div class ="actions">
//         <button>Google Play</button>
//         <button>App Store</button>
//      </div>
//     </header>
//     ` ;
// };

// const createHeroSection = () => {
//     return `
//     <section class="hero">
//       <h2 class="hero__title"> Start to workout</h2>
//       <p class="hero__text"> This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
//       <button class="cta">Get started</button>
//       <img src="./img/hero.jpg" alt="training" class="workout" />
//     </section>
//     `;
// };

// wrapper.insertAdjacentHTML('afterbegin', createHeader())
// wrapper.insertAdjacentHTML('beforeend', createHeroSection())


class SiteConstructor {
    constructor() {
        this.wrapper = document.querySelector('.wrapper')
    }

    createHeader = () => {
        return `
        <header class ="header">
         <h1>Trainerz</h1>
         <div class ="actions">
             <button>Google Play</button>
             <button>App Store</button>
        </div>
        </header>
         ` ;
    };

    createHeroSection = () => {
    return `
    <section class="hero">
      <h2 class="hero__title"> Start to workout</h2>
      <p class="hero__text"> This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
      <button class="cta">Get started</button>
      <img src="./img/hero.jpg" alt="training" class="workout" />
    </section>
    `;
    };
    
    render = () => {
        this.wrapper.insertAdjacentHTML('afterbegin', this.createHeader())
        this.wrapper.insertAdjacentHTML('beforeend', this.createHeroSection())
    }
}

const site = new SiteConstructor();
site.render();

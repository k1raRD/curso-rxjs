import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus lorem quis dictum dignissim. Sed at viverra metus. Donec tristique neque eget molestie convallis. Ut ac tellus mollis, scelerisque mauris ut, egestas quam. Aliquam non mauris a ligula ultricies aliquet. Nunc quis semper nisi. Vivamus nec nibh ut nisi volutpat accumsan vel et velit.
<br/><br/>
Pellentesque nulla eros, mollis quis faucibus vitae, porttitor ut libero. Donec sit amet consectetur ex. Aliquam gravida purus quam, nec fermentum erat consequat in. Mauris lectus sem, malesuada semper ante id, mattis vestibulum felis. Ut ultricies diam in lectus finibus iaculis. Cras in purus ante. Pellentesque ut magna id leo tempus posuere non quis eros. Maecenas ullamcorper, ex quis pretium pretium, magna quam cursus quam, in venenatis tortor mi vel nunc. Sed efficitur vestibulum hendrerit. Vestibulum molestie, sapien a egestas efficitur, nulla mauris scelerisque ipsum, non pellentesque nisi erat vulputate leo. Vivamus risus mi, auctor a porta in, ornare blandit tortor. Vestibulum eget pellentesque metus.
<br/><br/>
Vivamus aliquet varius ligula, a tempor ipsum luctus sed. Phasellus eget diam dictum, rutrum mi at, ullamcorper augue. Duis eget suscipit mauris. Nam tincidunt eu orci nec ullamcorper. Integer pulvinar porttitor tortor, id eleifend ante luctus quis. Proin imperdiet ultricies arcu. Vivamus pretium mauris id posuere consequat. Proin odio elit, blandit ut volutpat quis, pharetra vitae sem. Vestibulum quis enim eu elit tincidunt interdum et at purus. Aenean in pellentesque nulla. Sed tincidunt maximus ex, ut dignissim quam ultricies at. Fusce in nibh a ligula venenatis rhoncus eu nec turpis. Donec tortor nisl, pellentesque nec dapibus ac, placerat et lorem. Cras molestie arcu et faucibus bibendum. In a justo nunc.
<br/><br/>
Donec dolor purus, viverra eget interdum ornare, condimentum sit amet nisi. Nam sed lorem velit. Sed ac malesuada nunc, in ultrices felis. Aliquam erat volutpat. Phasellus venenatis, lorem a rutrum tincidunt, velit dui lobortis massa, et dapibus neque erat ut sapien. Aenean eu metus tincidunt, volutpat odio ut, vestibulum est. Aliquam quis neque aliquet, suscipit nisl vitae, ultricies lectus. Praesent vel augue ut augue dignissim rutrum. Proin dapibus ornare neque, nec dignissim arcu placerat sed. Morbi ut convallis quam. Praesent maximus ut arcu id congue. Vivamus viverra est nulla, id porttitor ipsum viverra eu.
<br/><br/>
Proin id dui id tortor viverra rutrum. Praesent euismod cursus justo vel convallis. Maecenas tincidunt urna et enim cursus varius sed sit amet nibh. Maecenas efficitur cursus consectetur. Quisque a luctus elit. Sed mollis suscipit ligula sed viverra. Donec eu odio vel tortor rutrum consequat ac quis lacus. Morbi at risus feugiat, malesuada turpis sodales, dignissim est. Donec id cursus orci. Morbi quis feugiat erat. Quisque congue euismod est, et rhoncus ex finibus a. Suspendisse eget ullamcorper ipsum. Donec vitae rhoncus augue. Praesent scelerisque aliquet eros. Vestibulum neque enim, elementum et malesuada vitae, accumsan in elit. Integer consectetur at nisi ac interdum.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentjaeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentjaeScroll(event))
    map(calcularPorcentjaeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {

    progressBar.style.width = `${porcentaje}%`;

});
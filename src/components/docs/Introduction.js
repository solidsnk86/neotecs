import { SectionTitle } from '../SectionTitle';
import Link from 'next/link';

export const Introduction = () => {
  const IntroTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-slate-100 font-mono">{children}</Tag>;
  };
  const Header = ({ Tag = 'h2', children }) => {
    return <Tag className="text-slate-100">{children}</Tag>;
  };
  return (
    <main className="text-slate-100">
      <IntroTitle>Curso de Programación</IntroTitle>
      <hr />
      <Header>Índice</Header>
      <ol className="indice">
        <li>
          <a href="#introduccion">Introducción</a>
        </li>
        <li>
          <a href="#programacion-web">Programación Web</a>
        </li>
        <li>
          <a href="#html">HTML (Lenguaje de Marcado de Hipertexto)</a>
          <ul>
            <li>
              <a href="#dom">Document Object Model (DOM)</a>
            </li>
            <li>
              <a href="#mas-elementos-html">Más Elementos HTML</a>
            </li>
            <li>
              <a href="#formularios">Formularios</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#css">CSS (Hojas de estilo en cascada)</a>
        </li>
        <li>
          <a href="#diseno-responsivo">Diseño Responsivo</a>
        </li>
        <li>
          <a href="#bootstrap">Bootstrap</a>
        </li>
        <li>
          <a href="#sass">
            Sass (Hojas de estilo Sintácticamente impresionantes)
          </a>
        </li>
      </ol>
      <span id="introduccion" />
      <SectionTitle title="Introducción" />
      <p>
        En este curso, voy a enseñar algo de lo que aprendí en Harvard Edx y
        adentrándonos en el diseño y creación de aplicaciones web.
        Desarrollaremos nuestras habilidades de diseño web trabajando en varios
        proyectos a lo largo del curso, incluyendo un proyecto final de diseño
        abierto donde tendrás la oportunidad de crear tu propio sitio web. En
        este curso, necesitarás un editor de texto donde puedas escribir código
        en tu computadora local. Algunos populares incluyen
        <Link
          className="mx-1 text-red-400"
          href="https://code.visualstudio.com/"
        >
          Visual Studio Code
        </Link>
        ,
        <Link className="mx-1 text-red-400" href="https://www.sublimetext.com/">
          Sublime Text
        </Link>
        ,
        <Link className="mx-1 text-red-400" href="https://atom.io/">
          Atom
        </Link>
        y
        <Link className="mx-1 text-red-400" href="https://www.vim.org/">
          Vim
        </Link>
        , ¡pero hay muchas opciones más para elegir!
      </p>
      <span id="programacion-web" />
      <SectionTitle title="Programación Web" />
      <section>
        <p>
          Temas del curso: Entraremos en más detalles más adelante, pero aquí
          tienes un resumen breve de en qué estaremos trabajando durante este
          curso:
        </p>
        <ol>
          <li>
            HTML y CSS (un lenguaje de marcado utilizado para estructurar una
            página web y un procedimiento para hacer que nuestros sitios sean
            más atractivos visualmente).
          </li>
          <li>Git (utilizado para el control de versiones y colaboración).</li>
          <li>
            Python (un lenguaje de programación ampliamente utilizado que
            usaremos para hacer que nuestros sitios sean más dinámicos).
          </li>
          <li>
            Django (un popular marco de trabajo web que utilizaremos para la
            parte trasera de nuestros sitios).
          </li>
          <li>
            SQL, Modelos y Migraciones (un lenguaje utilizado para almacenar y
            recuperar datos, y métodos específicos de Django que facilitan la
            interacción con bases de datos SQL).
          </li>
          <li>
            JavaScript (un lenguaje de programación utilizado para hacer que los
            sitios web sean más rápidos y interactivos).
          </li>
          <li>
            Interfaces de usuario (métodos utilizados para que un sitio web sea
            lo más fácil de usar posible).
          </li>
          <li>
            Pruebas, CI, CD (aprender sobre diferentes métodos utilizados para
            asegurarse de que las actualizaciones en las páginas web se realicen
            sin problemas).
          </li>
          <li>
            Escalabilidad y Seguridad (asegurarnos de que nuestros sitios web
            puedan ser accedidos por muchos usuarios a la vez y que estén
            protegidos contra intenciones maliciosas).
          </li>
        </ol>
      </section>
    </main>
  );
};

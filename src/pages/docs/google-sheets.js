import { useState, useEffect } from 'react';
import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { GoogleSheetsExample } from '../../components/GoogleSheetsExample';
import { Footer } from '../../components/Footer';
import { CalendarClockIcon } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';
import { AtroposBox } from '../../components/AtroposBox';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import { SectionTitle } from '../../components/SectionTitle';

export default function CsvSheets() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBJ2ICoQMLS-Dfem1ha7yjJQKMgTbZu9PExFjGh2rh6Pj4sgYTl2dBpJw02PQRckCG0SSpaiL6Vwwl/pub?output=csv',
        );
        const csv = await response.text();
        const parsedItems = csv
          .split('\n')
          .slice(1)
          .map((row) => {
            const [
              id,
              name,
              description,
              image,
              price,
              posted,
              isOnSale,
              logo,
            ] = row.split(',');
            return {
              id,
              name,
              description,
              image,
              price: Number(price),
              posted,
              isOnSale,
              logo,
            };
          });
        setItems(parsedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sendWhatsapp = (id, price) => {
    const wapNumber = '+5492604586538';
    const wapMessage = encodeURIComponent(
      `Buenas estoy interesado en el dibujo de ${id}! El cual tiene un importe de U$D ${price}. ¿El envío está incluido?`,
    );
    const wapUrl = `https://wa.me/${wapNumber}?text=${wapMessage}`;
    window.open(wapUrl);
  };

  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Base de Datos con Google Sheets</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
            </li>
            <li>
              <a href="#google-sheets">Google Sheets</a>
            </li>
            <li>
              <a href="#publicar-en-la-web">Publicar en la web</a>
            </li>
            <li>
              <a href="#api-routes">API Routes</a>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <p>
            En este tutorial, exploraremos cómo crear una base de datos
            utilizando Google Sheets en formato Excel (.csv) y cómo realizar
            solicitudes de datos (fetch) en nuestra aplicación de ReactJS con
            Next.js y API Routes. Este enfoque no solo es práctico y accesible,
            sino que también es ideal para proyectos más simples o prototipos.
          </p>
          <section className="xl:w-1/2 justify-center mx-auto text-text-primary p-10 space-y-5">
            <h1 className="mt-10 flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:var(--color-on-surface)]">
              GerArt
            </h1>
            <article className="bg-[#F7F9F9] dark:bg-[#16181C] border border-zinc-100/80 dark:border-zinc-800 rounded-xl text-center p-3">
              <p>¡Bienvenidos a ésta sección de arte y dibujo!</p>
              <p>
                Es importante tener en cuenta que los dibujos presentados aquí
                son solo para fines de ejemplo y están protegidos por derechos
                de autor. Apreciamos y respetamos el trabajo artístico de mi
                hermano el creador. Ahora, sumerjámonos juntos en el fascinante
                mundo del arte, la creatividad y la tecnología. ¡Sigamos
                explorando!
              </p>
            </article>
            {items.map((pic) => (
              <article key={pic.id} className="mt-3">
                <p className="text-2xl font-mono text-center py-2">{pic.id}</p>
                <span className="bg-button-variant text-text-variant font-semibold font-mono p-1 w-fit my-3 rounded-md">
                  Price: U$D {pic.price}
                </span>
                <AtroposBox
                  bg={pic.image}
                  logo={pic.logo}
                  studios={pic.studio}
                />
                <aside className="font-light my-3">
                  <span>Publicado {pic.posted}</span>
                  <CalendarClockIcon className="w-4 mx-1 inline mb-1" />
                  <span className="float-right xl:mr-[68px] uppercase font-mono px-1 mt-[7px] bg-button-variant rounded-md text-text-variant text-xs font-semibold">
                    {pic.isOnSale}
                  </span>
                  <p className="bg-red-500 text-text-variant text-sm p-1 w-fit font-semibold rounded-md">
                    {pic.name}
                  </p>
                  <p>{pic.description}</p>
                  <span
                    className="cursor-pointer hover:underline hover:text-lime-500 font-mono text-sm"
                    onClick={() => sendWhatsapp(pic.id, pic.price)}
                  >
                    Encargar
                    <WhatsApp className=" mx-1 mb-1 w-4" />
                  </span>
                </aside>
              </article>
            ))}
          </section>
          <GoogleSheetsExample />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

CsvSheets.title = 'Aprende Base de datos con Google Sheets';

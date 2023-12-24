import Navbar from "./components/Navbar";
import PageTransition from "./components/animationComponents/PageTransition";
import SideSequence from "./components/animationComponents/SideSequence";

export default function ONama() {
  return (
    <div>
      <Navbar />
      <PageTransition>
        <hr />
        <div className="container">
          <SideSequence delay={0.5}>
            <h2>
              OPG Šincek - Uzgoj Odojaka, Svinja i Proizvodnja Žitarica, Grožđa
              i Bučinog Ulja
            </h2>
            <p>
              OPG Šincek je obiteljsko poljoprivredno gospodarstvo koje se
              ponosi tradicijom i strašću za poljoprivredom. Naša priča započela
              je 1990. godine, kada smo se posvetili uzgoju odojaka i
              svinja-tovljenika. Od tada, kontinuirano radimo na poboljšanju
              kvalitete naših proizvoda i pružanju najbolje skrbi za naše
              životinje.
            </p>
          </SideSequence>
          <SideSequence delay={0.7}>
            <h3>Uzgoj Odojaka i Svinja</h3>
            <p>
              Naša primarna djelatnost je uzgoj odojaka i svinja-tovljenika.
              Stavljamo poseban naglasak na njihovu prehranu, udobnost i
              zdravlje. Kroz godine iskustva, razvili smo visoke standarde u
              uzgoju, osiguravajući da naši proizvodi budu vrhunske kvalitete.
              Naši odojci i svinje dobivaju najbolju brigu i prehranu kako bi
              rezultirali mesom visoke nutritivne vrijednosti i izvanrednog
              okusa.
            </p>
          </SideSequence>
          <SideSequence delay={0.9}>
            <h3>Proizvodnja Žitarica, Grožđa i Bučinog Ulja</h3>
            <p>
              Uzgoj odojaka i svinja samo je jedan dio naše raznovrsne
              poljoprivredne djelatnosti. Osim toga, posvećeni smo i proizvodnji
              različitih žitarica koje koristimo za hranu naših životinja.
              Također uzgajamo grožđe, iz kojeg proizvodimo visokokvalitetna
              vina, te buču koju pretvaramo u ukusno bučino ulje. Naš cilj je
              proizvoditi visokokvalitetne proizvode koji će zadovoljiti potrebe
              naših kupaca i pridonijeti zdravoj prehrani.
            </p>
          </SideSequence>
          <SideSequence delay={1.1}>
            <h3>Članovi PDV-a od 2003. godine</h3>
            <p>
              Ponosno smo članovi sustava PDV-a od 2003. godine, što potvrđuje
              našu profesionalnost i transparentnost u poslovanju. Kontinuirano
              pratimo i prilagođavamo se zakonodavnim promjenama kako bismo
              osigurali usklađenost sa svim poreznim i regulatornim zahtjevima.
            </p>
          </SideSequence>
          <SideSequence delay={1.3}>
            <p>
              Zahvaljujemo na podršci i povjerenju koje nam pružate već dugi niz
              godina. S veseljem radimo na očuvanju visokih standarda kvalitete
              i raznolikosti naše ponude. Ako imate bilo kakva pitanja ili
              trebate dodatne informacije, slobodno nas kontaktirajte.
            </p>
          </SideSequence>
        </div>
      </PageTransition>
    </div>
  );
}

import React, { Component } from "react";
import "./PoradyComponent.css";
import kotZdrowie from "../koty/KotZdrowie.JPG";
import karmienie from "../koty/karmienie.jpg";
import pielegnacja from "../koty/kotPielegnacja.jpg";
import zachowanie from "../koty/zachowanieKota.jpg";

function PoradyC() {
  return (
    <div className="KontentPorady">
      <div className="Karmienie">
        <h2>Karmienie</h2>
        <h5>Jak zadbać o prawidłowe żywienie kota?</h5>
        <img src={karmienie}></img>
        <p>
          Dieta kota powinna obfitować w niezbędnie składniki odżywcze, które
          zapewnią mu prawidłowe funkcjonowanie. Wysoka zawartość mięsa wpłynie
          także na walory smakowe. Jeżeli jesteś na etapie poszukiwania
          odpowiedniej karmy dla swojego pupila – zawsze analizuj składy. Zakupy
          warto poprzedzać gruntowną refleksją nad ilością zawartych składników,
          zbóż i mięs.
        </p>
      </div>
      <div className="Pielęgnacja">
        <h2>Pielęgnacja</h2>
        <h5>Kocie kołtuny – jak skutecznie się ich pozbyć?</h5>
        <img src={pielegnacja}></img>
        <p>
          Futro to powód do dumy każdego mruczka. No… może łyse koty nie mają
          się zbytnio czym chwalić w tym zakresie. Jednak te długowłose noszą
          swój włos z wyjątkową dumą. Nie ma co się dziwić. Sierść ma nie tylko
          znaczenie funkcjonalne, ale również wizerunkowe. Wymaga wiele uwagi i
          pielęgnacji. Choć koty dbają o nie z należytą starannością, to
          kołtunów czasami po prostu nie da się uniknąć. Skąd się biorą i jak
          usunąć kołtuny u kota?
        </p>
      </div>
      <div className="Zdrowie">
        <h2>Zdrowie</h2>
        <h5>
          Niska temperatura u kota. Jak rozpoznać, że może mieć hipotermię?
        </h5>
        <img src={kotZdrowie}></img>
        <p>
          Okazuje się, że koty są często bardziej wrażliwe na zimno niż ich
          opiekunowie. Dokładna temperatura, w której mruczki zaczynają odczuwać
          chłód, nie jest dokładnie określona. Jest to spowodowane różną masą
          ciała, odmienną długością sierści i ogólną indywidualną chemią
          organizmu. Jednak weterynarze w większości zgadzają się z tym, że
          optymalna temperatura, zarówno dla kotów domowych, jak i dla tych
          przebywających na zewnątrz, wynosi od ok. 26 do ok. 37 stopni
          Celsjusza. Można by więc założyć, że gdy temperatura spada poniżej 26
          stopni, to twojemu kotu może zacząć robić się chłodno. Będzie musiał
          wykorzystać dodatkową energię na samodzielne ogrzanie swojego ciała.
        </p>
      </div>
      <div className="Zachowanie">
        <h2>Zachowanie</h2>
        <h5>Dlaczego kot zachowuje się tak, jakby był zazdrosny?</h5>
        <img src={zachowanie}></img>
        <p>
          Mruczki to bardzo emocjonalne zwierzęta. Choć niektórzy zarzucają im
          zbytnią powściągliwość, to prawda jest taka, że przeżywają one każdą
          sytuację, tyle że na swój sposób. A czy mogą być zazdrosne? Naukowcy
          nie potrafią dowieść tego w stu procentach. Koty nie chcą odkrywać
          przed nami wszystkich swoich tajemnic. Prawdą jest jednak, że czasami
          zachowują się właśnie tak, jak gdyby uczucie zazdrości nie było im
          obce. Szczególnie gdy w domu pojawia się ktoś nowy.
        </p>
      </div>
    </div>
  );
}

export default PoradyC;

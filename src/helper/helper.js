const mapIdToValue = (id) => {
    switch (id) {
      case 400:
        return "Bez SaP";
      case 110:
        return "Čekající - přečteno";
      case 100:
        return "Čekající na odbavení";
      case 200:
        return "Inicializovaná";
      case 440:
        return "Likvidovaná";
      case 430:
        return "Lokalizovaná";
      case 450:
        return "Odjezd poslední jednotky";
      case 300:
        return "Odložená";
      case 120:
        return "Odmítnuto";
      case 210:
        return "Převzatá";
      case 410:
        return "SaP na cestě";
      case 420:
        return "SaP na místě";
      case 700:
      case 710:
      case 800:
      case 520:
      case 500:
      case 750:
      case 760:
      case 780:
      case 620:
      case 510:
      case 600:
      case 610:
        return "Ukončená";
      case 130:
        return "Zapracováno k řešené události";
      default:
        return "Neznámé";
    }
};
const mapIdToStatusString = (id) => {
    switch (id) {
      case "7031":
        return "Bratislavský kraj";
      case "1":
        return "GŘ Praha";
      case "116":
        return "Jihomoravský";
      case "124":
        return "Olomoucký";
      case "94":
        return "Pardubický";
      case "108":
        return "Vysočina";
      case "141":
        return "Zlínský";
      default:
        return "Neznámé";
    }
};
const getNazevfromId = (id) => {
  switch (id) {
    case 3100:
      return "🔥Požár";
    case 3200:
      return "Dopravní nehoda";
    case 3400:
      return "Únik nebezpečných látek";
    case 3500:
      return "🔧Technická pomoc";
    case 3550:
      return "Záchrana osob a zvířat";
    case 3700:
      return "Ostatní mimořádná událost";
    case 3800:
      return "Planý poplach";
    case 3900:
      return "Jiné, zatím neurčeno";
    case 3600:
      return "Formálně založená událost";
    case 6000:
      return "Pohotovost";
    case 5000:
      return "Událost na objekt";
    default:
      return "Neznámé";
  }
}
const mapIdToNazevString = (id) => {
    switch (id) {
      case 3101:
    return "Nízké budovy";
  case 3102:
    return "Výškové budovy";
  case 3103:
    return "Průmyslové, zemědělské objekty, sklady";
  case 3104:
    return "Shromaždiště osob";
  case 3105:
    return "Podzemní prostory, tunely";
  case 3107:
    return "Trafostanice, rozvodny";
  case 3109:
    return "Popelnice, kontejner";
  case 3110:
    return "Lesní porost";
  case 3106:
    return "Polní porost, tráva";
  case 3108:
    return "Dopravní prostředky";
  case 3111:
    return "Odpad, ostatní";
  case 3211:
    return "Vyproštění osob";
  case 3212:
    return "Uvolění komunikace, odtažení";
  case 3213:
    return "Úklid vozovky";
  case 3214:
    return "Se zraněním";
  case 3231:
    return "Železniční";
  case 3241:
    return "Letecká";
  case 3523:
    return "Uzvařené prostory, výtah";
  case 3524:
    return "Zasypané, zavalené";
  case 3527:
    return "Čerpání vody";
  case 3401:
    return "Na pozemní komunikaci";
  case 3402:
    return "Do půdy";
  case 3404:
    return "Do ovzduší";
  case 3501:
    return "Odstranění nebezpečných stavů";
  case 3502:
    return "Spolupráce ze složkama IZS";
  case 3503:
    return "Destrukce objektu";
  case 3505:
    return "Odstranění stromu";
  case 3521:
    return ":droplet:Z Vody";
  case 3522:
    return "Z výšky";
  case 3525:
    return "Otevření uzavřených prostor";
  case 3526:
    return "Odstraňování překážek";
  case 3528:
    return "Měření koncentrací";
  case 3529:
    return "Z hloubky";
  case 3530:
    return "AED";
  case 3534:
    return "Transport pacienta";
  case 3541:
    return "Monitoring";
  case 3542:
    return "Likvidace obížného hmyzu";
  case 3543:
    return "Transport pacienta";
  case 3601:
    return "Ostatní formálně založená událost";
  case 3602:
    return "Živelná pohroma";
  case 3603:
    return "Humanitární pomoc";
  case 3611:
    return "Radiační nehoda, Havárie";
  case 3711:
    return "Evakuace a ochrana obyvatel plošná";
  case 3712:
    return "Jiné";
  case 3911:
    return "Zatím neurčeno";
  case 3931:
    return "Zlomyslné volání";
  case 10001:
    return "Signalizace EPS";
  case 10014:
    return "Požár";
  case 10015:
    return "Větrná smršť";
  case 10016:
    return "Povodeň";
  case 10024:
    return "Činnost jednotky";
  default:
    return "Neznámé"; 
    }
};

const cities = [
  {
    text: "Brno",
    value: "Brno"
  }, 
  {
    text: "Hodonín",
    value: "Hodonín"
  },
  {
    text: "Znojmo",
    value: "Znojmo"
  }, 
  {
    text: "Vyškov",
    value: "Vyškov"
  },
  {
    text: "Příbram na Moravě",
    value: "Příbram na Moravě"
  },
  {
    text: "Bučovice",
    value: "Bučovice"
  },
  {
    text: "Mikulov",
    value: "Mikulov"
  }
]

const Statuses = [
  { text: "Bez SaP", value: 400},
  { text: "SaP na cestě", value: "SaP na cestě"},
  { text: "SaP na místě", value: "SaP na místě"},
  { text: "Likvidovaná", value: "Likvidovaná"},
  { text: "Ukončená", value: "Ukončená" /*710*/ },
  /*{ text: "Ukončená", value: 800},
  { text: "Ukončená", value: 520},
  { text: "Ukončená", value: 500},
  { text: "Ukončená", value: 750},
  { text: "Ukončená", value: 760},
  { text: "Ukončená", value: 780},
  { text: "Ukončená", value: 620},
  { text: "Ukončená", value: 510},
  { text: "Ukončená", value: 600},
  { text: "Ukončená", value: 610},*/
]

const Kraje = [
  {
    text: "Jihomorvaský kraj",
    value: "Jihomoravský"
  }, 
  {
    text: "Olomoucký kraj",
    value: "Olomoucký kraj"
  }
]

export { mapIdToValue , mapIdToStatusString, mapIdToNazevString , getNazevfromId, cities, Statuses, Kraje };
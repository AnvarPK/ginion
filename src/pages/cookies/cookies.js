import React from 'react';
import { connect } from 'react-redux';

import './cookies.css';

const Nl = () => (
    <div className="cookieContent">
        <div className="text-block-head">COOKIE POLICY</div>
        <div className="text-block-7">WAT IS EEN COOKIE ?</div>
        <p>
        Een cookie is een klein tekstbestand waarin internetinstellingen opgeslagen zitten. Bijna elke website
gebruikt cookies.
        </p>
        <p>
        Bij uw eerste bezoek aan een website wordt het door uw internetbrowser gedownload. Indien u deze
website de volgende keer met hetzelfde apparaat bezoekt, wordt het cookie en de daarin opgeslagen
informatie teruggestuurd naar ofwel de website die het geplaatst heeft (first party cookie) ofwel naar
een andere website waartoe het behoort (third party cookie). Zo herkent de website dat hij met deze
browser al eens werd opgeroepen, en verschilt in sommige gevallen de weergegeven content.
        </p>
        <p>
        Sommige cookies zijn erg nuttig omdat ze de online-ervaring bij een volgende bezoek aan een website
kunnen verbeteren. Op voorwaarde dat u hetzelfde apparaat en dezelfde browser als de eerste keer
gebruikt, herinneren cookies zich bv. uw voorkeuren, zeggen ze hoe u een pagina gebruikt en passen ze
het aanbod aan uw persoonlijke interesses en behoeften aan.
        </p>
        <p>
        Afhankelijk van hun functie en het vooropgestelde doel, kunnen cookies worden onderverdeeld in 4
categorieën*: strikt noodzakelijke cookies, functionele cookies, prestatiecookies, en cookies voor
marketingdoeleinden.
        </p>
        <div className="text-block-7">
        UW COOKIE-INSTELLINGEN OP DEZE WEBSITE.
        </div>
        <div className="text-block-sub">
        COOKIES OP DEZE WEBSITE WAARVOOR GEEN TOESTEMMING VEREIST IS.
        </div>
        <p>
        Strikt noodzakelijke cookies, ook wel “strictly necessary” genoemd, garanderen functies zonder dewelke
u deze website niet kunt gebruiken zoals gepland. Deze cookies worden uitsluitend gebruikt door Ginion

Group en vallen onder de zogenaamde first party cookies. Ze worden alleen op uw computer opgeslagen
voor de huidige browsersessie. Strikt noodzakelijke cookies zorgen er bijvoorbeeld voor dat u bij het
oproepen van de voertuigconfigurator een versie krijgt, waarvan de bandbreedte van de
datahoeveelheid overeenstemt met de door u gebruikte internetverbinding. Verder garanderen deze
cookies bijvoorbeeld bij een paginawissel de functie van een overgang van http naar https, en dus
blijven de verhoogde veiligheidsvereisten voor gegevensoverdracht behouden. Dit soort cookie bevat
ook uw beslissing met betrekking tot het gebruik van cookies op onze website. Voor het gebruik van
strikt noodzakelijke cookies is uw toestemming niet vereist.
        </p>
        <p>
        Strikt noodzakelijke cookies kunnen via de functie van deze website niet uitgeschakeld worden. U kunt
cookies wel op elk ogenblik in uw browser uitschakelen.
        </p>
        <div className="text-block-7">
        COOKIES WAARVOOR TOESTEMMING VEREIST IS
        </div>

        <p>
        Cookies die niet strikt noodzakelijk zijn om de website te kunnen gebruiken, vervullen een belangrijke
taak. Zonder deze cookies staan de functies die het mogelijk maken om comfortabel op onze website te
surfen, zoals bijvoorbeeld vooraf ingevulde formulieren, niet meer ter beschikking. Door u ingegeven
instellingen, zoals bijvoorbeeld de taalkeuze, kunnen niet worden opgeslagen en moeten dus op elke
pagina opnieuw worden opgevraagd. Verder hebben wij niet langer de mogelijkheid om u individueel
aangepaste aanbiedingen voor te stellen.
        </p>

        <p>
        Ginion Group integreert ook content van derden op deze website. Deze derdenaanbieders kunnen
theoretisch cookies plaatsen wanneer u onze website bezoekt en daardoor bijvoorbeeld de informatie
verkrijgen, dat u onze website hebt opgevraagd. Bezoek de websites van de derdenaanbieders voor
meer informatie over hun gebruik van cookies. Wanneer u ervoor kiest om uw toestemming voor het
gebruik van cookies met toestemming niet te geven of te herroepen, kunt u alleen gebruikmaken van
die functies op onze website, die wij zonder deze cookies kunnen garanderen. Delen van de website die
potentieel de technische mogelijkheid bieden om content van derden te integreren en dus third party
cookies te plaatsen, zijn in dat geval voor u niet toegankelijk. Wilt u in dat geval de inhoud van de
website toch gebruiken, dan is dit mogelijk op voorwaarde dat u instemt met het gebruik van cookies
met toestemming. Gebruik daarvoor de op onze website op die plaats ter beschikking gestelde functie
voor toestemming Wanneer u cookies principieel niet wilt toelaten, kunt u dit ook in uw browser
instellen.
        </p>

        <p>
        U vindt meer informatie over cookies waarvoor toestemming vereist is, de verschillende categorieën
cookies, het gebruik van cookies en tracking op deze website, en hoe u cookies kan beheren en
verwijderen hieronder.
        </p>

        <div className="text-block-7">BEHEER EN VERWIJDEREN VAN COOKIES.</div>


        <p>
        U kan cookies blokkeren en verwijderen via de instellingen van uw browser. Om cookies te beheren,
laten de meeste browsers u toe om alle cookies te weigeren of toe te staan, of om enkel bepaalde types
cookies toe te staan.
        </p>
        <p>
        Hoe u cookies beheert en verwijdert vindt u in de helpfunctie van uw browser. U vindt meer informatie
voor de meest courante browsers hieronder:
        </p>

        <p>Indien u het gebruik van cookies wenst te beperken, zal u niet alle interactieve functies van onze
website kunnen gebruiken.</p>

        <ul>
            <li>Internet Explorer</li>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
        </ul>

        <br />

        <div className="text-block-7">CATEGORIEËN.</div>
        <p>
        Afhankelijk van hun functie en het vooropgestelde doel, kunnen cookies worden onderverdeeld in 4
categorieën*: strikt noodzakelijke cookies, functionele cookies, prestatiecookies, en cookies voor
marketingdoeleinden.
        </p>

        <p className="small-head"> <b>Strikt noodzakelijke cookies</b></p>
        <p> 
        Strikt noodzakelijke cookies zijn nodig opdat u een website kunt bezoeken en gebruiken. Zonder deze
cookies kunnen de functies van de website niet worden gegarandeerd, bijvoorbeeld dat de tijdens een
bezoek uitgevoerde handelingen (bv. tekstingave of voertuigconfiguratie) behouden blijven, ook
wanneer u tussen verschillende pagina’s navigeert.
        </p>
        <p className="small-head"><b> Functionele cookies</b></p>
        <p> 
        Functionele cookies maken het een website mogelijk om reeds ingegeven gegevens (zoals bv.
gebruikersnaam, taalkeuze of woonplaats) op te slaan en de gebruiker verbeterde, persoonlijkere
functies aan te bieden. Een website zou bijvoorbeeld lokale prijsrelevante btw-informatie kunnen
aanbieden wanneer hij een cookie gebruikt om de regio op te slaan waarin de gebruiker zich bevindt.
Functionele cookies worden daarnaast ook gebruikt om gevraagde functies zoals het afspelen van
video’s mogelijk te maken. Deze cookies verzamelen anonieme informatie, ze volgen niet uw
bewegingen op andere websites.
        </p>

        <p className="small-head"><b>Prestatiecookies</b></p>
        <p> 
        Prestatiecookies verzamelen informatie over de gebruikswijze van een website – bijvoorbeeld welke
pagina’s een bezoeker het vaakst opvraagt en of hij foutmeldingen van websites ontvangt. Deze cookies
slaan geen informatie op die de gebruiker kan identificeren. De verzamelde informatie wordt gebruikt
voor rapporten in geaggregeerde en anonieme vorm. Deze cookies worden alleen gebruikt om de
prestaties van een website en dus de beleving van de gebruiker te verbeteren.
        </p>

        <p className="small-head"> <b>Cookies voor marketingdoeleinden</b></p>
        <p> 
        Cookies voor marketingdoeleinden worden gebruikt om gerichte, voor de gebruiker relevante en aan
zijn interesses aangepaste reclameboodschappen weer te geven. Ze worden ook gebruikt om de
weergavefrequentie van een reclameboodschap te beperken en de doelmatigheid van
reclamecampagnes te meten. Ze registreren of men een website al dan niet heeft bezocht. Deze
informatie kan worden gedeeld met derden, zoals bv. adverteerders. Cookies ter verbetering van de
doelgroepaanspreking en reclame worden vaak gekoppeld aan bijkomende functies van derden.
        </p>

    </div>
);
const Fr = () => (
    <div className="cookieContent">
        <div className="text-block-head">DIRECTIVES GINION GROUP AUX COOKIES</div>
        <div className="text-block-7">QU'EST-CE QU'UN COOKIE ?</div>
        <p>
            Un cookie est un petit fichier texte où sont enregistrés des paramètres Internet. La quasi-totalité des sites web utilisent la technologie des cookies.
        </p>
        <p>
            Ce cookie est téléchargé sur votre ordinateur par votre navigateur à votre première visite sur le site. À la prochaine visite que vous ferez sur ce site avec le même périphérique, le cookie et les informations qui y figurent sera soit renvoyé à la page web qui l’a généré (cookie propriétaire), soit à une autre page web à laquelle il appartient (cookie tiers). Grâce à ce cookie, la page web sait que vous vous êtes déjà présenté avec ce navigateur et adaptera le cas échéant le contenu affiché en conséquence.
        </p>
        <p>
            Certains cookies sont très utiles dans la mesure où ils procurent une expérience plus agréable lorsque vous visitez une page web où vous vous êtes déjà rendu plusieurs fois. Pour autant que vous utilisiez le même périphérique et le même navigateur, les cookies se souviendront par exemple de vos préférences et indiquent comment vous utilisez une page, permettant ainsi d’adapter les offres présentées à vos intérêts et à vos besoins.
        </p>
        <p>
            Les cookies se répartissent en quatre catégories* selon leur fonction et leur usage. Les cookies strictement nécessaires, les cookies de performance, les cookies fonctionnels et les cookies de marketing.
        </p>
        <div className="text-block-7">
            VOS PARAMÈTRES DE COOKIES SUR CE SITE WEB.
        </div>
        <div className="text-block-sub">
            COOKIES NE NÉCESSITANT PAS DE CONSENTEMENT SUR CE SITE WEB.
        </div>
        <p>
            Cookies indispensables, dits « strictement nécessaires » assurant des fonctions sans lesquelles il vous serait impossible d’utiliser cette page web comme prévu. Ces cookies sont utilisés exclusivement par Ginion Group, d’où leur appellation «
        </p>
        <p>
            cookies propres ». Ils sont uniquement enregistrés sur votre ordinateur pendant la durée de la session du navigateur. Lorsque vous appelez le configurateur de véhicule, les cookies strictement nécessaires veillent par exemple à vous envoyer une version dont le poids de données soit compatible avec la largeur de bande de votre connexion Internet. Lors d’un changement de page, ces cookies assurent par exemple le passage du protocole http à https en veillant à respecter les exigences de sécurité élevées de la transmission de données. Ce type de cookie mémorise notamment votre choix concernant l’utilisation de cookies sur notre page web. L’utilisation de cookies strictement nécessaires ne nécessite pas votre autorisation.
        </p>
        <p>
            Les cookies strictement nécessaires ne peuvent pas être désactivés par la fonction de cette page. Vous pouvez néanmoins à tout moment désactiver les cookies en général à partir de votre navigateur.
        </p>
        <div className="text-block-7">
            COOKIES NÉCESSITANT UN CONSENTEMENT SUR CE SITE WEB.
        </div>

        <p>Les cookies qui, du point de vue strictement juridique, ne sont pas absolument nécessaires pour utiliser le site web, n’en assurent pas moins des fonctions importantes. En l’absence de ces cookies, des fonctions assurant une navigation confortable sur notre page web, comme des formulaires pré-remplis, ne seraient plus disponibles. Les configurations que vous avez opérées comme le choix de la langue ne pourraient plus être enregistrées et vous seraient redemandées à chaque page. Nous ne pourrions en outre plus vous proposer des offres personnalisées.</p>

        <p>Ginion Group inclut également des contenus de tiers sur ce site web. Les liens vers des services Facebook ou des vidéos YouTube en sont des exemples. Le fournisseur tiers peut dans un tel cas placer des cookies pendant que vous visitez la page web de manière par exemple à obtenir l’information que vous avez visité une de nos pages web. Veuillez vous rendre sur les pages web des fournisseurs tiers pour de plus amples informations concernant l’utilisation de ces cookies. Si vous avez décidé de refuser l’utilisation de cookies nécessitant une autorisation ou de révoquer votre autorisation, seules les fonctionnalités dont l’utilisation ne nécessite pas des cookies de ce type vous seront présentées sur notre page web. Les zones du site web permettant techniquement d’inclure des contenus de fournisseurs tiers et donc, de placer des cookies tiers, ne vous seront pas accessibles. Dans un tel cas et si vous souhaitez malgré tout accéder à ce contenu, cette possibilité vous sera donnée à condition que vous acceptiez l’utilisation des cookies soumis à autorisation. Pour ce faire, activez la fonction de notre site web prévue à cette fin. Si de manière générale, vous souhaitez refuser les cookies, effectuez la configuration nécessaire sur votre navigateur.</p>

        <p>Vous trouverez plus d’information sur les cookies nécessitant un consentement sur ce site web, les différentes catégories de cookies, l’usage des cookies et du suivi sur ce site web, et comment vous pouvez gérer et effacer des cookies ci-dessous.</p>

        <div className="text-block-7">GÉRER ET SUPPRIMER DES COOKIES.</div>


        <p>Vous pouvez bloquer et supprimer des cookies en changeant les paramètres de votre navigateur. Afin de gérer les cookies, la majorité des navigateurs vous permettent de refuser ou d’accepter tous les cookies, ou d’en accepter que certaines catégories de cookies.</p>
        <p>Comment vous pouvez gérer et supprimer les cookies est expliqué dans la fonction d’aide de votre navigateur. Vous trouverez plus d’infos pour les navigateurs les plus populaires ci-dessous.</p>

        <p>Si vous souhaitez de limiter l’usage des cookies, pas toutes les fonctions interactives de notre site web ne vous seront accessibles.</p>

        <ul>
            <li>Internet Explorer</li>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
        </ul>

        <br />

        <div className="text-block-7">CATÉGORIES DE COOKIES.</div>
        <p>
            Les cookies se répartissent en quatre catégories selon leur fonction et leur usage. Les cookies strictement nécessaires, les cookies fonctionnels, les cookies de performance, et les cookies de marketing
        </p>

        <p className="small-head"> <b>Les cookies strictement nécessaires.</b></p>
        <p> Les cookies strictement nécessaires sont utilisés pour vous permettre de naviguer sur une page et d’utiliser ses propriétés. Sans ces cookies, certaines fonctionnalités ne sont pas assurées, par exemple la mémorisation de vos actions pendant une visite (saisie de textes ou configuration d’un véhicule), lorsque vous naviguez d’une page à l’autre.</p>
        <p className="small-head"><b> Les cookies fonctionnels.</b></p>
        <p> Les cookies fonctionnels permettent de conserver des informations déjà saisies sur une page web (telles que le nom d’utilisateur, le choix de la langue ou du lieu où vous vous trouvez) et de proposer à l’utilisateur des fonctions personnalisées améliorées. Une page web pourra par exemple présenter une information de prix avec prise en compte de la taxation locale si vous utilisez un cookie pour enregistrer la région où l’utilisateur se trouve. Les cookies fonctionnels servent également à permettre l’exécution de fonctions proposées comme la lecture de vidéos. Ces cookies recueillent des informations anonymes. Ils ne peuvent pas suivre vos navigations sur d’autres pages web.</p>

        <p className="small-head"><b> Les cookies de performance.</b></p>
        <p> Les cookies de performance recueillent des informations sur la manière d’utiliser une page web – par exemple les pages les plus fréquemment visitées et les messages d’erreur occasionnés éventuels. Ces cookies ne mémorisent aucune information permettant d’identifier l’utilisateur. Les informations recueillies sont cumulées et de ce fait anonymes. Ces cookies servent exclusivement à améliorer les performances d’une page web et donc, l’expérience de navigation.</p>

        <p className="small-head"> <b>Les cookies de marketing.</b></p>
        <p> Les cookies de marketing servent à présenter à l’utilisateur des annonces publicitaires ciblées adaptées à ses besoins. Ils servent également à limiter la fréquence d’affichage de l’annonce et à mesurer l’efficacité de campagnes publicitaires. Ils enregistrent si l’utilisateur a visité ou non une page web. Cette information peut être communiquée à des tiers comme des annonceurs. Les cookies destinés à améliorer le ciblage de groupes de consommateurs et de la publicité sont souvent liés à des fonctionnalités de sites tiers.</p>

    </div>
);


const Cookies = ({ language }) => {
    return (
        <>
            <div className="cookiesPage">

                <div className="text-banner">
                    <div className="container-ginion">
                        <div className="div-block-30">
                            <h1 className="heading-3">COOKIES</h1>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container-ginion">

                        <div className="cookiesInner">
                            {language.value === 'nl' && <Nl />}
                            {language.value === 'fr' && <Fr />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

export default connect(mapStateToProps)(Cookies);
CAP iFlow Viewer
Een SAP CAP + Fiori Elements applicatie die data ophaalt uit een iFlow API via de SAP Integration Suite, en deze read-only weergeeft in een Fiori List Report UI.

📦 Projectstructuur
Backend: Node.js met SAP Cloud Application Programming Model (CAP)
Frontend: Fiori Elements (List Report Page)
Externe API: iFlow gepubliceerd via SAP Integration Suite
Authenticatie: OAuth 2.0 met client credentials
⚙️ Setup en installatie
Clone het project
git clone <repo-url>
cd cap-api-fiori
Installeer afhankelijkheden
npm install
Voeg .env toe in rootfolder
IFLOW_URL=https://41208216trial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/cp011if002
CLIENT_ID=sb-642165e1-4e47-4df1-9c0c-66b7cbbe60c9!b421096|it-rt-41208216trial!b26655
CLIENT_SECRET=818825c8-6659-430d-bbe9-c5294647e3fa$YMyyVRxXDGlKfPYNwiGKVyyEcYmh2GplSDWljBcbeqY=
TOKEN_URL=https://41208216trial.authentication.us10.hana.ondemand.com/oauth/token
Start de app
npm run dev
De CAP-service is dan bereikbaar op http://localhost:4004

🧠 Functionaliteit
Ophaal van iFlow-data via OAuth2 + axios
Mapping naar een CDS-entiteit (IFlowEntity)
Read-only presentatie via Fiori UI (ListReport)
Live herlaadbaar via cds watch
📁 Belangrijke bestanden
Bestand	Doel
srv/external-api-service.js	Custom handler met API-call
srv/external-api-service.cds	CAP service-definitie
db/data-model.cds	Entiteitdefinitie
app/iflow-ui/	Fiori frontend-app
.env	Config voor API-authenticatie
🚫 Beperkingen
Alleen READ-functionaliteit (geen create/update/delete)
Geen Launchpad integratie (standalone AppRouter)
Test enkel lokaal of op BTP trial
IFlow

CP010-IF002 Datasphere To Fiori: [https://41208216trial.integrationsuite-trial.cfapps.us10-001.hana.ondemand.com/shell/design/contentpackage/CP010YassineLakdimi/integrationflows/CP010-IF002_Datasphere_To_Fiori]

🧑‍💻 Auteur
Yassine Lakdimi
Student toegepaste informatica, Erasmushogeschool Brussel
Opdracht: Fiori Elements + CAP + iFlow Integratie
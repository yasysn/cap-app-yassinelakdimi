# 📊 CAP iFlow Viewer

Een **SAP CAP + Fiori Elements** applicatie die data ophaalt uit een iFlow API via de **SAP Integration Suite**, en deze read-only weergeeft in een **Fiori List Report UI**.

---

## 📦 Projectstructuur

- **Backend**: Node.js met SAP Cloud Application Programming Model (CAP)  
- **Frontend**: Fiori Elements (List Report Page)  
- **Externe API**: iFlow gepubliceerd via SAP Integration Suite  
- **Authenticatie**: OAuth 2.0 met client credentials  

---

## ⚙️ Setup en Installatie

1. **Clone het project**
   ```bash
   git clone <repo-url>
   cd cap-api-fiori
   ```

2. **Installeer afhankelijkheden**
   ```bash
   npm install
   ```

3. **Voeg een `.env` bestand toe in de rootfolder**  
   ```env
   IFLOW_URL=https://41208216trial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/cp011if002
   CLIENT_ID=sb-642165e1-4e47-4df1-9c0c-66b7cbbe60c9!b421096|it-rt-41208216trial!b26655
   CLIENT_SECRET=818825c8-6659-430d-bbe9-c5294647e3fa$YMyyVRxXDGlKfPYNwiGKVyyEcYmh2GplSDWljBcbeqY=
   TOKEN_URL=https://41208216trial.authentication.us10.hana.ondemand.com/oauth/token
   ```

4. **Start de app**
   ```bash
   npm run dev
   ```

5. **Toegang tot CAP-service**  
   Ga naar: [http://localhost:4004](http://localhost:4004)

---

## 🧠 Functionaliteit

- Ophalen van iFlow-data via OAuth2 en Axios
- Mapping naar een CDS-entiteit (`IFlowEntity`)
- Read-only presentatie via Fiori UI (List Report)
- Live herlaadbaar via `cds watch`

---

## 📁 Belangrijke Bestanden

| Bestand                         | Doel                                 |
|---------------------------------|--------------------------------------|
| `srv/external-api-service.js`  | Custom handler met API-call          |
| `srv/external-api-service.cds` | CAP service-definitie                |
| `db/data-model.cds`            | Definitie van de entiteit            |
| `app/iflow-ui/`                | Fiori frontend-app                   |
| `.env`                         | Configuratie voor API-authenticatie |

---

## 🚫 Beperkingen

- Alleen **READ-functionaliteit** (geen create/update/delete)
- Geen Launchpad-integratie (standalone AppRouter)
- Enkel getest **lokaal of op BTP Trial**

---

## 🔗 iFlow Details

- **iFlow Naam**: `CP010-IF002 Datasphere To Fiori`  
- **Bekijk in SAP Integration Suite**:  
  [https://41208216trial.integrationsuite-trial.cfapps.us10-001.hana.ondemand.com/shell/design/contentpackage/CP010YassineLakdimi/integrationflows/CP010-IF002_Datasphere_To_Fiori](https://41208216trial.integrationsuite-trial.cfapps.us10-001.hana.ondemand.com/shell/design/contentpackage/CP010YassineLakdimi/integrationflows/CP010-IF002_Datasphere_To_Fiori)

---

## 👤 Auteur

**Yassine Lakdimi**  
Student Toegepaste Informatica  
Erasmushogeschool Brussel  
**Opdracht**: Fiori Elements + CAP + iFlow Integratie

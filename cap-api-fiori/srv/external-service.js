const cds = require('@sap/cds')
const axios = require('axios')
require('dotenv').config()
 
module.exports = cds.service.impl(async function (srv) {
  const { IFlowData } = srv.entities
 
  this.on('READ', IFlowData, async (req) => {
    try {
      const tokenResponse = await axios.post(process.env.TOKEN_URL, null, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.CLIENT_SECRET
        },
        params: {
          grant_type: 'client_credentials'
        }
      })
 
      const token = tokenResponse.data.access_token
 
      const apiResponse = await axios.get(process.env.IFLOW_URL, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
 
      const data = apiResponse.data
 
      return data.map(item => ({
        ATTRIBUTEEXTERNALID:     item.ATTRIBUTEEXTERNALID,
        PERSONEXTERNALID:        item.PERSONEXTERNALID,
        PERSONIDENTIFIERTYPE:    item.PERSONIDENTIFIERTYPE,
        PROFICIENCYLEVEL:        parseInt(item.PROFICIENCYLEVEL),
        PROFICIENCYASSIGNEDDATE: new Date(item.PROFICIENCYASSIGNEDDATE),
        PREFERENCEVALUE:         parseInt(item.PREFERENCEVALUE),
        STATUS:                  item.STATUS,
        LASTMODIFIEDBY:          item.LASTMODIFIEDBY,
        LASTMODIFIEDAT:          new Date(item.LASTMODIFIEDAT),
        EXPECTEDRATING:          item.EXPECTEDRATING
      }))
    } catch (error) {
      console.error('❌ API ERROR:', error.response?.data || error.message)
      req.reject(500, 'Kon de data niet ophalen van de Integration Suite API.')
    }
  })
})
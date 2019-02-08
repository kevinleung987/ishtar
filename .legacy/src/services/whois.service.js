import EveService from './eve.service'

class WhoIsService {
  whois (name) {
    const output = {}
    return EveService.search(name, true, 'character').then(searchResult => EveService.characters(searchResult.character[0]).then(character => {
      const id = searchResult.character[0]
      output.id = id
      output.name = character.name
      output.birthday = character.birthday
      output.security_status = character.security_status
      const requests = []
      // Get alliance info, if there is any.
      if (character.alliance_id) {
        output.alliance = {
          alliance_id: character.alliance_id
        }
        requests.push(EveService.alliances(character.alliance_id).then(alliance => {
          output.alliance.name = alliance.name
          output.alliance.ticker = alliance.ticker
        }))
      }
      // Get corporation info.
      output.corporation = {
        corporation_id: character.corporation_id
      }
      requests.push(EveService.corporations(character.corporation_id).then(corporation => {
        output.corporation.name = corporation.name
        output.corporation.ticker = corporation.ticker
      }))
      // Get zkill info.
      output.killboard = {
        url: `https://zkillboard.com/character/${id}`
      }
      requests.push(EveService.zkill(id).then(zkill => {
        output.killboard.kills = zkill.shipsDestroyed || 0
        output.killboard.losses = zkill.shipsLost || 0
        output.killboard.iskDestroyed = zkill.iskDestroyed || 0
        output.killboard.iskLost = zkill.iskLost || 0
      }))
      return Promise.all(requests).then(() => output)
    }))
  }
}

export default new WhoIsService()

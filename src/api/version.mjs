import { Version as Buff } from './protobufTypes'

class Version {
  constructor(promptId, body, passageNumber, ledger) {
    this.promptId = promptId
    this.body = body
    this.passageNumber = passageNumber
    this.ledger = ledger
  }

  static fromTcr(tcr) {
    try {
      const decoded = Version.decode(tcr.blob)
      return new Version(decoded.promptId, decoded.body, decoded.passageNumber, tcr.ledger)
    } catch (e) {
      console.log('Failed decoding version: ', e)
      return null
    }
  }

  static sampleBytes() {
    const data = { promptId: 1, body: 'Im a version', passageNumber: 3 }
    console.log('Verify: ', Buff.verify(data))

    const message = Buff.create(data)
    console.log('message: ', message)

    const buffer = Buff.encode(message).finish()
    console.log('buffer: ', buffer)

    const bytes = new Uint8Array(buffer)
    console.log('bytes: ', bytes)

    console.log('Prompt.decode(buffer): ', Buff.decode(buffer))

    return bytes
  }

  static decode(buffer) {
    return Buff.decode(buffer)
  }
}

export default Version

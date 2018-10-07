import { Prompt as Buff } from './protobufTypes'

class Prompt {
  constructor(id, body, ledger) {
    this.id = id
    this.body = body
    this.ledger = ledger
  }
  // sampleBytes() {
  //   const data = { id: 1, body: 'Hello World' }
  //   console.log('Verify: ', Buff.verify(data))
  //
  //   const message = Buff.create(data)
  //   console.log('message: ', message)
  //
  //   const buffer = Buff.encode(message).finish()
  //   console.log('buffer: ', buffer)
  //
  //   const bytes = new Uint8Array(buffer)
  //   console.log('bytes: ', bytes)
  //
  //   console.log('Prompt.decode(buffer): ', Buff.decode(buffer))
  //
  //   return bytes
  // }

  static fromTcr(tcr) {
    try {
      const decoded = Prompt.decode(tcr.blob)
      console.log('decoded: ', decoded)
      return new Prompt(decoded.id, decoded.body, tcr.ledger)
    } catch (e) {
      console.log('Failed decoding prompt: ', e)
      return null
    }
  }

  static decode(buffer) {
    return Buff.decode(buffer)
  }
}

export default Prompt

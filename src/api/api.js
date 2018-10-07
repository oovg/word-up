const protobuf = require('protobufjs')

const jsonDescriptor = {
  nested: {
    Prompt: {
      fields: {
        id: {
          type: 'uint32',
          id: 1,
          rule: 'required'
        }
      }
    }
  }
}
const root = protobuf.Root.fromJSON(jsonDescriptor)
const Prompt = root.lookupType('Prompt')

const data = { id: 1 }
console.log('Oreo: ', Prompt.verify(data))

const message = Prompt.create(data)
console.log('message: ', message)

const buffer = Prompt.encode(message).finish()
console.log('buffer: ', buffer)

const bytes = new Uint8Array(buffer)
console.log('bytes: ', bytes)

console.log('Prompt.decode(bytes: ', Prompt.decode(bytes))

const oreo = Prompt.decode(buffer)
console.log('oreo: ', oreo)


const mockTcrs = [
  {
    erc20: '0x1234',
    ratio: 500000,
    blob: 'abc'
  }
]

const WORD_UP_RATIO = 500000
const WORD_UP_ERC20 = '0x1234'


function injestTcrs(tcrs) {
  const prompts = []
  const versions = []

  tcrs.map((tcr) => {

  })
}

// Returns either null (If the TCR is invalid) or and object
// The object has the form {type: 'prompt', object: {id: 1, body: 'yolo', cap: 1234 }}
function injectTcr(tcr) {
  if (tcr.erc20 !== WORD_UP_ERC20) {
    console.log("TCR didn't have matching erc20")
    return null
  } else if (tcr.ratio !== WORD_UP_RATIO) {
    console.log("TCR didn't have matching ratio")
  } else {

  }
}

class Version {

}

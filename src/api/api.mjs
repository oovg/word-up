import Prompt from './prompt'
import Version from './version'

const bytes = new Uint8Array([8, 1, 18, 11, 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
const verBytes = Version.sampleBytes()

console.log('bytes: ', bytes)
console.log('verBytes: ', verBytes)

const mockTcrs = [
  // {
  //   erc20: '0x1234',
  //   ratio: 500000,
  //   blob: 'abc'
  // },
  // {
  //   erc20: '0x1234',
  //   ratio: 500000,
  //   blob: bytes
  // },
  // {
  //   erc20: '0x1235',
  //   ratio: 500000,
  //   blob: bytes
  // },
  {
    erc20: '0x1234',
    ratio: 500000,
    blob: verBytes,
    ledger: {
      '0xaaa': 44
    }
  }
]

const WORD_UP_RATIO = 500000
const WORD_UP_ERC20 = '0x1234'

function injestTcrs(tcrs) {
  const injested = {
    prompts: [],
    versions: []
  }

  tcrs.map((tcr) => {
    const decoded = injestTcr(tcr)
    if (decoded) {
      if (decoded.type === 'prompt') {
        injested.prompts.push(decoded.object)
      } else {
        injested.versions.push(decoded.object)
      }
    }
  })

  return injested
}

// Returns either null (If the TCR is invalid) or and object
// The object has the form {type: 'prompt', object: {id: 1, body: 'yolo', cap: 1234 }}
function injestTcr(tcr) {
  if (tcr.erc20 !== WORD_UP_ERC20) {
    console.log("TCR didn't have matching erc20")
    return null
  }

  if (tcr.ratio !== WORD_UP_RATIO) {
    console.log("TCR didn't have matching ratio")
    return null
  }

  const version = Version.fromTcr(tcr)
  console.log('version: ', version)
  if (version !== null) {
    return { type: 'version', object: version }
  }

  const prompt = Prompt.fromTcr(tcr)
  if (prompt !== null) {
    return { type: 'prompt', object: prompt }
  }

  // Not a valid blob
  return null
}

const injested = injestTcrs(mockTcrs)
console.log('injested: ', injested)

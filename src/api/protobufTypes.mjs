import protobuf from 'protobufjs'

const jsonDescriptor = {
  nested: {
    Prompt: {
      fields: {
        id: {
          type: 'uint32',
          id: 1,
          rule: 'required'
        },
        body: {
          type: 'string',
          id: 2,
          rule: 'required'
        }
      }
    },
    Version: {
      fields: {
        promptId: {
          type: 'uint32',
          id: 1,
          rule: 'required'
        },
        body: {
          type: 'string',
          id: 2,
          rule: 'required'
        },
        passageNumber: {
          type: 'uint32',
          id: 3,
          rule: 'required'
        }
      }
    }
  }
}

// const promptRoot = protobuf.Root.fromJSON(promptDescriptor)
// const Prompt = promptRoot.lookupType('Prompt')
//
// const versionRoot = protobuf.Root.fromJSON(versionDescriptor)
// const Version = versionRoot.lookupType('Version')

const root = protobuf.Root.fromJSON(jsonDescriptor)
const Prompt = root.lookupType('Prompt')
const Version = root.lookupType('Version')

export { Prompt, Version }

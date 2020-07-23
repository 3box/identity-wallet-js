declare module '3id-blockchain-utils' {
  export interface LinkProof {
    version: number
    message: string
    signature: string
    account: string
    did?: string
    timestamp?: number
    address?: string
    type?: string
    chainId?: number
  }

  export function createLink(
    did: string,
    account: string,
    provider: any,
  ): Promise<LinkProof>
}

declare module 'did-jwt' {
  type SignFunc = (
    data: any,
  ) => Promise<{ r: string; s: string; recoveryParam: number }>

  export function SimpleSigner(hexPrivateKey: string): SignFunc

  type CreateJWTOptions = {
    issuer: string
    signer: SignFunc
    alg?: string
    expiresIn?: number
  }

  export function createJWT(payload: any, options: CreateJWTOptions): string
}

declare module 'ipfs-did-document' {
  import CID from 'cids'

  export default class DidDocument {
    constructor(ipfs: any, method: string)
    get DID(): string
    addAuthentication(type: string, id: string): void
    addPublicKey(
      id: string,
      type: string,
      encoding: string,
      key: string,
      owner?: string,
    ): void
    addCustomProperty(propName: string, propValue: any): void
    commit(options: { noTimestamp?: boolean }): Promise<CID>
  }
}

declare module 'ipld-dag-cbor' {
  import CID from 'cids'

  export type UserOptions = { cidVersion?: number; hashAlg?: number }

  namespace util {
    function cid(binaryBlob: any, userOptions?: UserOptions): Promise<CID>
    function serialize(node: any): Buffer
  }

  export { util }
}

declare module 'multihashes' {
  export function encode(
    digest: Buffer,
    code: number | string,
    length?: number,
  ): Buffer
}
